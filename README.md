# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

We used [msw](https://mswjs.io/) to mock the network request.
You can read more here: [Browser Integration](https://mswjs.io/docs/integrations/browser)

- The request interceptor in located in `.src/interceptors`
- Inside `.src/index.tsx` we need to start the worker before starting the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
