'use strict';

/* inisiasi dotenv */
require('dotenv').config();

/* inisiasi express */
const express = require('express');
const app = express();

/* inisasi router */
const { router } = require('./router/router');
/* inisiasi cors */
const cors = require('cors');

/* call port */
const port = process.env.PORT || 3000;

/* cors option origin */
let originOptionCors = {
    origin: `http://localhost:${port}`
}

/* call router */
app.use('/', router);

/* listen port */
app.listen(port, () => `connected ${port}`);