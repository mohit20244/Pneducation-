const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./database/connectdb')
const web= require('./routers/web')
var cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

//cookie parser
app.use(cookieParser())

//env
dotenv.config({});
const PORT = process.env.PORT || 3000;


//connectDb
connectDB()

app.use(express.json())

 //phele cors pcg install krenge fir yaha require krenge.....ye api se communiccation k liye
 app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));

//routes
app.use('/api',web)




app.listen(PORT, () => {
  console.log(`serer start localhost: ${PORT}`)
})