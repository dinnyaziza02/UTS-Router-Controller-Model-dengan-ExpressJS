import express from "express";
import { bio } from "./model.js";
const app = express();

//route
app.get('/', (req, res) => {
    res.send ('hello word')
});

app.get('/data/:datadiri1', (req, res) =>{
    const parameter = req.params.datadiri1;
    res.send (bio(parameter))
});
app.get('/data/:datadiri2', (req, res) =>{
    const parameter = req.params.datadiri2;
    res.send(bio(parameter))
})


app.listen(3005, () =>
console.log ('server menyala'));