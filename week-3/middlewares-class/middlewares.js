const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username === 'abhishek' && password === 'pass') {
        if (kidneyId == 1 || kidneyId == 2) {
            // do something with kidney here
            res.json({
                msg: 'Your kidney is fine!'
            })
        } else {
            res.json({
                msg:'Your kidney might not be fine so please fill your kidneyId correctly!'
            })
        }
    }
    res.status(400).json({
        msg: 'something is wrong with your inputs!'
    })
})
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})