const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const Router = require('./Routes/route');
app.use(express.json());

const cors = require('cors')
app.use(cors({
    origin: "*"
}))

app.use('/api', Router)
app.listen(process.env.PORT, () => {
    console.log(`App listening on port:${process.env.PORT}`);
})