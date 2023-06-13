const express = require('express');

const port = 3200;

const app = express();

app.listen(port, () => {
  console.log(`***Server running on ${port}***`);
});
