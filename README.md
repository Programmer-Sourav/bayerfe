# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Frontend Architecture Documentation

## Overview
This document outlines the architecture of the frontend application, including the state management, components, and features.

## Tech Stack
- **React.js**: Frontend framework for building user interfaces.
- **Redux**: State management library.
- **JavaScript (ES6+)**: Programming language.
- **Redux Store**: Centralized state management.

---

## State Management
### Initial State
```javascript
export const initialState = {
   loginStatus: false,
   token: "",
   registrationStatus: false
};
```

### Reducer
```javascript
export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, loginStatus: action.payload.loginStatus, token: action.payload.token };
        case 'REGISTER':
            return {...state, registrationStatus: action.payload};    
        default:
            return state;
    }
};
```

### Store Configuration
```javascript
import { createStore } from "redux";
import { appReducer } from "./AppReducer";

const store = createStore(appReducer);

export default store;
```

---

## Components Structure
The application consists of the following components:

### 1. **ActivityMatrix.jsx**
   - Displays user activities.
   - Fetches and renders user-related data.

### 2. **HealthcarePortal.jsx**
   - Acts as the main dashboard for healthcare-related services.

### 3. **LoginPage.jsx**
   - Provides user authentication.
   - Dispatches login action to Redux store.

### 4. **RegisterPage.jsx**
   - Handles new user registration.
   - Dispatches register action to Redux store.

### 5. **UserDashboard.jsx**
   - Displays user profile and activity details.
   - Fetches data from backend services.

---

## Features & API Endpoints

| Feature | API Endpoint |
|---------|-------------|
| User Registration | `POST /user/signup` |
| User Login | `POST /user/login` |
| Create Service | `POST /user/service/create` |
| Create Event | `POST /user/event/create` |
| Get User Details | `GET /user/details` |
| Get Event Data | `GET /event` |

---

## Folder Structure
```
/src
│── components
│   ├── ActivityMatrix.jsx
│   ├── HealthcarePortal.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── UserDashboard.jsx
│
│── redux
│   ├── AppReducer.js
│   ├── store.js
│
│── services
│   ├── api.js
│
│── App.js
│── index.js
```

This document provides a structured overview of the frontend application, ensuring consistency in development and future enhancements.


