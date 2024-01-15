const express = require('express');
const zod = require('zod');
const app = express();
const port = 3000;
app.use(express.json());

const schema = zod.array(zod.number());


// zod schema for following inputs:
// {
//     email: string => email
//     password: atleast 8 letters
//     country: 'IN', 'US'
// }
// ===============>
// const schema1 = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal('IN').or(zod.literal('US'))
// })

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg:'Input is invalid'
        })
    }
    res.send(response);

})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})