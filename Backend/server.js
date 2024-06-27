require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
// middle wares
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});

// connect with database
const dbConnect = require('./config/database');
dbConnect();

// router
const router = require('./routes/item.routes');
app.use('/item/v1', router);

const userrouter = require('./routes/user.routes');
app.use('/user/v2', userrouter);

const searchapi = require('./routes/search.routes');
app.use('/api/v3', searchapi);
