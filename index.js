
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


import path from 'path';
import { fileURLToPath } from 'url';


var express = require('express');
var app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

app.listen(process.env.PORT||3000);

