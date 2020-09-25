const express = require('express');

const app = express();
const port = 3000;

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
    console.log(req);
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