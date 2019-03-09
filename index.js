
const port = process.env.PORT || 9000;

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

require('./routes/contact')(app);
require('./routes/payments')(app);

app.listen(port);