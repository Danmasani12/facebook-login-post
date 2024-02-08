const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = 3040;

app.use('/docs', express.static('public/docs'));

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', postRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
