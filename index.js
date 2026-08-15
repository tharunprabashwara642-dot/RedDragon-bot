const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('RedDragon Bot is running successfully on Railway!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
