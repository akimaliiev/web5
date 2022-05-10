const express = require("express");
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
//const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




const dbConfig = require('./config/database.config.js');
const {router} = require("express/lib/application");
const {destroy, findAll, findOne, create} = require("./controllers/UserController");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use("/", require("./routes/root"));
app.use("/login", require("./routes/login"));
app.use("/tech", require("./routes/tech"));
app.use("/vision", require("./routes/vision"));
app.use('/user', require('./routes/UserRoute'));




app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    create(req,res)
});



let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});





