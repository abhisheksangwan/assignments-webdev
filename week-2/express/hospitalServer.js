const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
app.use(bodyParser.json());

const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
  }];

// query parameters
app.get('/', (req,res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
        numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
// send data via body
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push(
      {
        healthy: isHealthy,
      }
    );
    res.json({
        msg: 'Done!'
    })
})

app.put('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    for (let i = 0; i < johnKidneys.length; i++){
        if (johnKidneys[i].healthy == false) {
            johnKidneys[i].healthy = true;
        }
    }
    res.json({
        msg: "All Kidneys replaced !"
    })
})
app.delete('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
      if (johnKidneys[i].healthy) {
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
      }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    if (numberOfUnhealthyKidneys < 1) {
        res.json({
            msg:'No Unhealthy kidenys to be replaced!'
        })
    } else {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
          if (users[0].kidneys[i].healthy == false) {
              newKidneys.push({
                healthy: true
            })
          }
        }
        users[0].kidneys = newKidneys;
        res.json({
          msg: "Unhealthy Kidney replaced !",
        });
    }
    
})

app.listen(port, () => {
    console.log(`App is listining on port ${port}`);
})