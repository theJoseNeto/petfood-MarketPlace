const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const port = 8000;
const app = express();

app.listen(8000, () => console.log(`Ruinnig in http://localhost:${port}`));