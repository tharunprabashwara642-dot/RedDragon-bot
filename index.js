const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html><body style="font-family:sans-serif;text-align:center;padding-top:50px;"><h1>🔴 RedDragon WhatsApp Bot is Active!</h1><p>Running live on Railway cloud infrastructure.</p></body></html>');
});

app.listen(PORT, () => {
  console.log(`RedDragon server listening on port ${PORT}`);
});
