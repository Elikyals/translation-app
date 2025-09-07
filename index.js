const sendBtn = document.getElementById("send-btn")
const inputTextField = document.getElementById('input-field')
const flagsBtn = document.getElementById('flag-btn')
const chatContainer = document.getElementById('chat-container')
const loadingEl = document.getElementById('loading-animation')

async function sendMessage(language, userInput) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    language: language,
                    sentence: userInput
                }
            )
        })
        const translatedText = await response.json()
        return translatedText
    } catch (error) {
        return 'Error: Could not get response';
    }
}

function toggleFlags(clickedOpt) {
    const frenchFlagEl = document.getElementById('french-flag') 
    const spanishFlagEl = document.getElementById('spanish-flag')
    const japaneseFlagEl = document.getElementById('japanese-flag')
    frenchFlagEl.classList.remove('clicked')
    spanishFlagEl.classList.remove('clicked')
    japaneseFlagEl.classList.remove('clicked')
    clickedOpt.classList.add('clicked')
}

flagsBtn.addEventListener('click', (e) => {
    const clickedFlagContainer = e.target.closest(".flag-btn")
    const clickedFlag = clickedFlagContainer.querySelector('.flag')
    toggleFlags(clickedFlag)
})

sendBtn.addEventListener('click', async () => {
    const inputVal = inputTextField.value
    const selectedLanguage = document.querySelector('input[name="language"]:checked').value
    if (inputVal) {
        let html = `
            <p class="user-text">${inputVal}</p>
        `
        renderChat(html)
        toggleLoading()
        inputTextField.value = ""
        const response = await sendMessage(selectedLanguage, inputVal)
        html = `
            <p class="system-text">${response.reply}</p>
        `
        renderChat(html)
        toggleLoading()
    }
})

function renderChat(htmlText) {
    chatContainer.innerHTML += htmlText
}

sendBtn.addEventListener('dblclick', () => {
    renderNewChat()
})

function renderNewChat() {
    chatContainer.innerHTML = `
        <p class="system-text">Select the language you me to translate into, type your text and hit send!</p>
    `
}

function toggleLoading() {
    sendBtn.hidden = !(sendBtn.hidden)
    loadingEl.hidden = !(loadingEl.hidden)
}