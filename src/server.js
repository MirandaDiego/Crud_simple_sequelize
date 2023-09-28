const express = require("express");
const Connection = require('./database/index')
const routes = require('./routes/routes')

const AppError = require('./utils/App.Errors')

const app = express();
app.use(express.json());//parser
app.use(routes);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running ON PORT ${PORT}`)
})



