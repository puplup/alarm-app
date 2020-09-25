const express = require('express');
const url = require('url');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded());
app.use(express.json());

// Alarm variables
const alarm = {
    state: false,
    time: {
        hour: 7,
        minute: 15
    }
};

app.get('/', (req, res) => {
    console.log("/");
    res.send('Hello World!');
});

app.get('/alarm', (req, res) => {
    return res.json(create_output());
});

app.put('/alarm', (req, res) => {
    console.log(req.body);
    
    if (req.body.alarm_state == 'true') {
        alarm.state = true;
    } else if (req.body.alarm_state == 'false') {
        alarm.state = false;
    }
    
    const hour = Number(req.body.alarm_hour);
    const minute = Number(req.body.alarm_minute);
    
    if (!(isNaN(hour) || isNaN(minute))) {
        alarm.time.hour = hour;
        alarm.time.minute = minute;
    }
    
    return res.json(create_output());
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

function create_output() {
    return { 
        alarm_state: alarm.state,
        alarm_time: {
            hour: alarm.time.hour,
            minute: alarm.time.minute
        }
    }
}
