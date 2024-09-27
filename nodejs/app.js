const express = require('express');
const app = express();
app.disable("x-powered-by");
const port = 3000;

app.get('/', (_req, res) => {
  const a = 1;
  const b = 2;
  const c = 1 + 2;
  if ( a == b ) {  // Use === for strict equality comparison
    console.log('a equals b')
  }
  console.log('1+2='+c);  // Consider using template literals

  hello1('hello', 'world');
  hello2('my', 'world');
  calculateArea(30);
  res.send('Hello World!');
});

// Remove unused variable
// let unusedVariable = 42;

let server;

const hello1 = (a, b) => {
  console.log('hello1', a, b);
  return a + b;
}

// Remove unused function
// const hello3 = (x) => {
//   return x * 2;
// }

const hello2 = (a, b) => {
  console.log('hello2', a, b);
  return a + b;
}

// Use a named constant for PI
const PI = Math.PI;
function calculateArea(radius) {
  return PI * radius * radius;
}

function startServer() {
  server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

function stopServer(done) {
  if (server) {
    server.close(done);
  } else {
    done();
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer, stopServer };