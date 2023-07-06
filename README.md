# Century

## Introduction
This project is a small app that demonstrates Contact functionality.

## Feature
The main function is the branch company information search and contact function through Google Map.

## Tech Stack

### Front end
React.js, TypeScript, Tailwind CSS

### Back end
Node.js, Express

### Database
MongoDB

### Building
Vite

## How to use

### Clone
Using terminal
```
git clone https://github.com/padrone1225/test.git
```

### Install Dependencies
Front end
```
cd test/frontend
npm install 'or' npm i
```

Back end
```
cd test
npm install 'or' npm i
```

### Start Project
Start back-end
```
npm run server
```

Start front-end
```
npm run frontend
```

Start project
```
npm run dev
```

### Build
Build CSS
```
cd frontend
npx tailwindcss -i ./src/App.css -o ./src/styles/output.css --watch
```

Build Project
```
npm run render-postbuild
```

### MongoDB
Local DB
```
npm run render-postbuild
npm start
```

Online DB
```
npm run render-postbuild
npm start --production=true
```

### URL
```
http://localhost:4000
```

## Others

### Validation
In order to check the validity of the contact information, middleware was built to check the values using RegEx in the server.

```
const namePattern = /^([A-Z][a-z]*)(\s[A-Z][a-z]*){0,2}$/;
const mailPattern = /^[a-z][a-z0-9.]*@[a-z]+\.[a-z]+$/;
const phoneNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
```