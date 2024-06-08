# Express-Middleware

## Description

This project is about middleware and creating custom middleware for an Express.js project. This a continuation

## Middleware

Middleware are functions between the request to get information form an API and the information what the API will display. It
gives information on how the user will interact with the API.

## Custom Middleware

Custom middleware is a middleware that is created by the developer. Examples are:

- Logging
- Authentication
- Authorization
- Rate limiting
- CORS
- Error handling
- Session management

## Custom Middleware Example

```js
function notFound(req, res) {
  return res.status(404).json({
    success: false,
    error: "Not found",
  });
}

function logger(req, res, next) {
  console.log(req.method, req.path);
  console.log(req.headers);
  next();
}

module.exports = { notFound, logger };
```

## Usage

To use the middleware, you need to add it to the middleware array in the server.js file.

```js
const express = require("express");
const app = express();

const { notFound, logger } = require("./middleware");

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
```

## Conclusion

This project is about middleware and creating custom middleware for an Express.js project. By creating custom middleware it can give the user more information and instructions about the API.
