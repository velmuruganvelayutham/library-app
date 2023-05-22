if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const expressLayout = require('express-ejs-layouts');
const indexRoutes = require('./routes/index');
const authorsRoute = require('./routes/authors');
app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');
app.set("layout", 'layouts/layout');
app.use(express.static(__dirname + '/public'));
app.use(expressLayout);
app.use("/", indexRoutes);
app.use("/authors", authorsRoute);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log("connected to MongoDB"));

app.listen(process.env.PORT || 3000)

