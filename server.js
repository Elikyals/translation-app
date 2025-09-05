import express from 'express'
import OpenAI from 'openai'
import cors from 'cors'
import 'dotenv/config'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname))

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com/v1',
    apiKey: process.env.DEEP_SEEK_API_KEY
})

app.post('/api/chat', async (req, res) => {
    try {
        const { language, sentence } = req.body
        const response = await openai.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                {
                    role: "system",
                    content: `You are a pollyGlot, expert in french, spanish and japanese. 
                            Translate the given statement to the languages you specialise in.
                            Try to be concise as possible.`
                },
                {
                    role: "user",
                    content: `Translate the following from English to ${language}: 
                            ${sentence}`
                }
            ],
        })
        res.json({ reply: response.choices[0].message.content})
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong',
            message: error
        })
    }
})

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
})
