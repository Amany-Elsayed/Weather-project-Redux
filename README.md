# Weather App

A modern, responsive weather application built with React and Vite. This application allows users to check the weather and features full state management, internationalization, and a beautiful UI.

## Features

- **State Management**: Utilizes Redux Toolkit for efficient and predictable state management.
- **UI Components**: Built with Material-UI (MUI) and Emotion for sleek, responsive, and customizable design.
- **Internationalization (i18n)**: Supports multiple languages using `i18next` and `react-i18next`.
- **API Integration**: Fetches predictable and robust real-time weather data using `axios`.
- **Date & Time Formatting**: Handled seamlessly with `moment.js`.
- **Fast Build Tool**: Powered by Vite for lightning-fast Hot Module Replacement (HMR).

## Technologies Used

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) & React Redux
- [Material-UI (MUI)](https://mui.com/)
- [Axios](https://axios-http.com/)
- [i18next](https://www.i18next.com/)
- [Moment.js](https://momentjs.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <your-github-repo-url>
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate optimized files in the `dist` directory. You can preview the build locally using:
```bash
npm run preview
```
