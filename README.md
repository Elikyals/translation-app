# PollyGlot Translation App (Core Requirements)

This project is part of the Scrimba Full Stack Career Development Track. PollyGlot is a simple translation app built from scratch, following the design spec provided by scrimba.

## Branches

- **[main](https://github.com/Elikyals/translation-app/tree/main)** – Latest stable version (same as stretch-goal)
- **[core-req](https://github.com/Elikyals/translation-app/tree/core-req)** – Basic translation features (this branch)
- **[stretch-goal](https://github.com/Elikyals/translation-app/tree/stretch-goal)** – Enhanced features

## Features (Core Requirements)

- Translate English text to French, Spanish, or Japanese
- Uses DeepSeek API via OpenAI SDK
- Clean, responsive UI
- Loading indicator for API requests
- Error handling for failed requests

## Setup

1. Clone the repo and switch to the `core-req` branch:

    ```sh
    git clone https://github.com/Elikyals/translation-app.git
    cd translation-app
    git checkout core-req
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Copy `.env.sample` to `.env` and add your DeepSeek API key:

    ```sh
    DEEP_SEEK_API_KEY=your_api_key_here
    ```

4. Start the server:

    ```sh
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo

![App Demo]() #TODO: Gif goes here

## Stretch Goals

See the [`stretch-goal`](https://github.com/Elikyals/translation-app/tree/stretch-goal) branch for features like chat mode, correction, AI-generated images, and deployment instructions.

---

**Note:** This README is for the `core-req` branch. For stretch goals and the latest features, check the other branches linked above.
