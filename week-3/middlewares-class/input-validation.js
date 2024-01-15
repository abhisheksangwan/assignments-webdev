const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidenys = req.body.kidneys;
    
    const kidneyLength = kidenys.length;
    res.send("you have " + kidneyLength + " kidneys");
});
//global-catches
app.use((err, req, res, next) => {
    res.json({
        msg:'sorry! something is wrong with our server'
    })
})
app.listen(3000);