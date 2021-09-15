const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname, "../public");
const temoplate_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', temoplate_path );
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
app.get("/", (req, res) =>{
    res.render('index')
})



app.get("/weather", (req, res) =>{
    res.render('weather')
})

app.get("*", (req, res) =>{
    res.render('404',{
        errorMsg: 'Oops! page not found'
    })
})

app.listen(port, ()=>{
    console.log(`listening to port no ${port}`)
})