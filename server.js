import express from 'express'
import OpenAI from 'openai'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEP_SEEK_API_KEY
})

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body
        const response = await openai.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                {
                    role: "system",
                    content: ""//TODO: System prompt goes here
                },
                {
                    role: "user",
                    content: message
                }
            ]
        })
        res.json({ reply: response.choices[0].message.content})
    } catch (error) {
        res.status(500).json({error: 'Something went wrong'})
    }
})

app.listen(3000)