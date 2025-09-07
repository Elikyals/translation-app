# PollyGlot Translation App (Stretch Goals)

This project is part of the Scrimba Full Stack Career Development Track. PollyGlot is an advanced translation app that goes beyond basic translation to provide an enhanced language learning experience.

## Branches

- **[main](https://github.com/Elikyals/translation-app/tree/main)** – Latest stable version (same as stretch-goal)
- **[core-req](https://github.com/Elikyals/translation-app/tree/core-req)** – Basic translation features
- **[stretch-goal](https://github.com/Elikyals/translation-app/tree/stretch-goal)** – Enhanced features (this branch)

## Features

### Core Features

- Translate English text to French, Spanish, or Japanese
- Uses DeepSeek API via OpenAI SDK
- Clean, responsive UI
- Loading indicator for API requests
- Error handling for failed requests

### Enhanced Features

- **Chat Mode**: Have natural conversations in different languages
- **Grammar Correction**: Get instant feedback on your translations

## Setup

1. Clone the repo and switch to the `stretch-goal` branch:

    ```sh
    git clone https://github.com/Elikyals/translation-app.git
    cd translation-app
    git checkout stretch-goal
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Copy `.env.sample` to `.env` and add your API keys:

    ```sh
    DEEP_SEEK_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```sh
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo

![App Demo](https://github.com/Elikyals/translation-app/blob/stretch-goals/translation-app-sg.gif)

---

**Note:** This README is for the `stretch-goal` branch which includes all enhanced features. For basic translation features, see the [`core-req`](https://github.com/Elikyals/translation-app/tree/core-req) branch.
