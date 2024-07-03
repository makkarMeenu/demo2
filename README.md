# AppLaunchKit - Your Universal App Development Powerhouse

## Description

AppLaunchKit is more than just a starter kit; it's your strategic development partner. Its meticulously crafted architecture and comprehensive features empower you to build exceptional app faster, with a focus on code reusability and long-term maintainability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:AppLaunchKit/frontend-starter-kit.git
   ```

2. Checkout to the feat/supabase branch:

   ```bash
   git checkout feat/supabase
   ```

3. Ensure you have Node.js installed on your system. This project requires Node.js version >=21. You can install it
   using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager):
   ```bash
   nvm install 21
   ```
4. Navigate to the cloned directory:
   ```bash
   cd <project-directory>
   ```
5. Install dependencies:
   ```bash
   npm install
   ```

## Usage

This section provides instructions on how to use the project, including commands and configurations needed for different environments.

### Apps

#### Expo

1. Navigate to the `expo` directory:
   ```bash
   cd apps/expo
   ```
2. Start the Expo go server:

   ```bash
   npm start
   ```

   This command will start the development server for the Expo app in expo-go environment and you need to comment

   ```bash
   <GoogleSignInButton/>
   ```

   import statement .ie.

   ```bash
   import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton"
   ```

   as this doesn't work in go environment but only works for dev environment.

3. Run the app on Android:

   ```bash
   npm run android
   ```

   This command will build and run the Expo app in dev environment on an Android emulator or connected device.

4. Run the app on iOS:

   ```bash
   npm run ios
   ```

   This command will build and run the Expo app in dev environment on an iOS simulator or connected device.

5. Start the Expo web development server:

   ```bash
   npm run web
   ```

   This command will start the development server for running the Expo app in a web browser.

6. Lint the code:

   ```bash
   npm run lint
   ```

   This command will run ESLint to check and fix any linting issues in the code.

7. Format the code:

   ```bash
    npm run format
   ```

   This command will run Prettier to format the code according to specified rules.

8. Start Storybook for web:

   ```bash
   npm run storybook:web
   ```

   This command will start Storybook for web development.

9. Start Expo with Storybook for iOS:

   ```bash
   npm run storybook:ios
   ```

   This command will start Expo with Storybook enabled for iOS.

10. Start Expo with Storybook for android:

    ```bash
    npm run storybook:android
    ```

    This command will start Expo with Storybook enabled for android.

11. Build Storybook:
    ```bash
    npm run build-storybook
    ```
    This command will build Storybook as a static app.

#### Next

1. Navigate to the `next` directory:
   ```bash
   cd apps/next
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   This command will start the Next.js development server.
3. Build the project:
   ```bash
   npm run build
   ```
   This command will build the Next.js project for production deployment.
4. Start the development server:

   ```bash
   npm run dev
   ```

   This command will start the Next.js development server.

5. Start the build:

   ```bash
   npm run start
   ```

   This command will start the Next.js build server.

6. Lint the code:

   ```bash
   npm run lint
   ```

   This command will run ESLint to check for linting issues in the codebase.

7. Start Storybook:
   ```bash
   npm run storybook
   ```
   This command will start Storybook for developing and testing UI components.
8. Build Storybook:
   ```bash
   npm run build-storybook
   ```
   This command will build Storybook as a static app for production use.

## Troubleshooting

- Getting `globals.css` error?
  Run the project again, it caches the tailwind files once we run the project and next time picks up from that.
- Getting aliasing issues between packages and expo app?
  While running the project, clear the metro cache.
  ```bash
  npm run web -- --reset-cache
  ```

## License

Licensed under the MIT License, Copyright © 2023 GeekyAnts.
