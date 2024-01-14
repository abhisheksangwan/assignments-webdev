const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
app.use(bodyParser.json());


function sum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    const finalAns = sum(n);
    res.send(finalAns.toString());
})

app.post('/conversations', (req, res) => {
    // console.log(req.body.message);
    const message = req.body.message;
    console.log(message);

    res.json({
        output: "I am adding two numbers"
    })
})


app.listen(port, (req, res) => {
    console.log(`example app is listening on port ${port}`);
})