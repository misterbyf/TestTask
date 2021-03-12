// eslint-disable-next-line strict
const express = require('express');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const dotEnv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function runServer() {
  try {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`Server message: ${e.message}`);
    process.exit(1);
  }
}

runServer().catch(error => {
  // eslint-disable-next-line no-console
  console.log(error.message);
});
