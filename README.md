# Screenshoter

A basic tool for traversing a page and invoking DOM actions like clicks, form submits and stuff.

Each action is then screenshoted after page is ready (assets loaded etc.)


## Installation
```
npm install
cp .env.dist .env
mkdir screens
chmod +w screens
```

fill .env with your application credentials
and provide testing url

## Running

```
node index.js
```

Screens should be put into `screens` folder.
