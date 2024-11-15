# Speech to Text Frontend Application

## A frontend application built using NextJS v14.2.16 to interface with the [Backend application](https://github.com/Dannyyapyap/stt)

## Pre-requiste

Tested on

Ensure that you have node and npm installed

- node v18.19.1
- npm 9.2.0

## Getting Started

### Running Locally

There are two method for setting up the project locally: using the provided setup script (setup_env.sh) or setting it up manually

---

### Method 1: Setup with the provided script

1.  From the root project directory, run the setup script to automate the environment setup:

    ```bash
    bash setup_env.sh
    ```

    Note: if your backend application is hosted on another port, do make the necessary change in .env.local

### Method 2: Setup Manually

1.  Install dependencies:

    ```bash
    npm install
    npx shadcn@latest add accordion
    npx shadcn@latest add button
    npx shadcn@latest add input
    npx shadcn@latest add pagination
    ```

2.  Configure environment variables

    create /frontend-ui-stt/.env.local

    ```bash
    NEXT_PUBLIC_API_ENDPOINT=http://localhost:8020
    ```

    Note: This is the endpoint which is hosting your backend application, the backend application has to be running, please refer to
    [stt](https://github.com/Dannyyapyap/stt)

### Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
