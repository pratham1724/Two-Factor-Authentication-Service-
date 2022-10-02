import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// import usersRoutes from './routes/users.js'

const app = express();
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const con = mongoose.connection

con.on('open', function(){
    console.log('connected ...');
});

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());

import authenticationRouter from './routes/authentication.js';
app.use('/authentication', authenticationRouter);

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname+'/api_endpoints.html'));
// });
app.use(express.static(__dirname));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${process.env.PORT}`)); 
