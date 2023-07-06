# Century

## Introduction
Century is a small app that demonstrates contact functionality. The main function of this app is to search for branch company information and provide contact functionality through Google Maps integration.

## Features
- Branch company information search
- Contact functionality through Google Maps

## Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express

### Database
- MongoDB

### Building
- Vite

## How to Use

### Clone the Repository
```bash
git clone https://github.com/padrone1225/test.git
```

### Install Dependencies
#### Frontend
```bash
cd test/frontend
npm install
```

#### Backend
```bash
cd test
npm install
```

### Start the Project
#### Start the backend
```bash
npm run server
```

#### Start the frontend
```bash
npm run frontend
```

#### Start the project (both frontend and backend)
```bash
npm run dev
```

### Build the Project
#### Build CSS
```bash
cd frontend
npx tailwindcss -i ./src/App.css -o ./src/styles/output.css --watch
```

#### Build Project
```bash
npm run render-postbuild
```

### MongoDB
#### Local DB
```bash
npm run render-postbuild
npm start
```

#### Online DB
```bash
npm run render-postbuild
npm start --production=true
```

### URL
Access the application at [http://localhost:4000](http://localhost:4000)

## Validation
In order to check the validity of the contact information, a server-side middleware was implemented using regular expressions (RegEx) to validate the values. The following patterns were used:

- Name: `/^([A-Z][a-z]*)(\s[A-Z][a-z]*){0,2}$/`
- Email: `/^[a-z][a-z0-9.]*@[a-z]+\.[a-z]+$/`
- Phone Number: `/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/`