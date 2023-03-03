const express = require("express");
const connectDB = require('./db/conn');
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// app.get('/', (req, res) => res.send('Hello world!'));

app.use(require('./routes/api/employees'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));