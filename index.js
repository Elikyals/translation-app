const form = document.getElementById("translation-form")
const inputTextField = document.getElementById('input-txt')
const submitBtn = document.getElementById("submit")
const innerFormSection = document.getElementById('inner-form')
const selectLangTitle = document.getElementById('select-lang-title')

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

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (submitBtn.value == "Translate") {
        const inputValue = inputTextField.value
        const selectedLanguage = document.querySelector('input[name="language"]:checked').value
        if (inputValue) {
            // API functionality
            const response = await sendMessage(selectedLanguage, inputValue)
            renderNewPage(response.reply)
        }
    }
    else if (submitBtn.value == "Start Over") {
        renderPreviousPage()
    }

})

function renderNewPage(translation) {
    document.getElementById('translation-title').textContent = "Original text 👇"
    selectLangTitle.textContent = "Your translation 👇"
    selectLangTitle.style.paddingBottom = 0
    innerFormSection.innerHTML = `<p id="output-txt" class="output-txt">${translation}</p>`
    submitBtn.value = "Start Over"
}

function renderPreviousPage() {
    document.getElementById('translation-title').textContent = "Text to translate 👇"
    selectLangTitle.textContent = "Select language 👇"
    inputTextField.value = ""
    innerFormSection.innerHTML = `
    <div>
        <input type="radio" id="french" name="language" value="french" checked />
        <label for="french">French </label>
        <img src="assets/fr-flag.png" alt="Flag of France">
    </div>
    <div>
        <input type="radio" id="spanish" name="language" value="spanish"/>
        <label for="spanish">Spanish</label>
        <img src="assets/sp-flag.png" alt="Flag of spain">
    </div>
    <div>
        <input type="radio" id="japanese" name="language" value="japanese"/>
        <label for="japanese">Japanese</label>
        <img src="assets/jpn-flag.png" alt="Flag of Japan">
    </div>
    `
    submitBtn.value = "Translate"
}