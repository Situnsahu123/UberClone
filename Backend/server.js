const http = require('http');
const app = require ('./app');
const  connectDB  = require ('./db/db');
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.port || 3000;

const server = http.createServer(app);

connectDB();

server.listen(port,()=>{
 console.log(`SERVER IS RUNNING ON PORT http://localhost:${port}`);
});
