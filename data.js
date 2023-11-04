const express = require('express');
const formidable = require('formidable');

var app = express();
app.use(express.static(__dirname + '/structure'));

app.post('/submitForm', (req, res) => {
    console.log(req);

    var form = new formidable.IncomingForm();
    form.parse(req, (err, flds) => {
        var data = {
            name: flds.name,
            phone: flds.phone,
            email: flds.email,
            city : flds.city,
            gender: flds.gender
        };
        res.json(data);
        res.end('');
    });
});
app.listen(7777);
console.log("Server is running on port: 7777");