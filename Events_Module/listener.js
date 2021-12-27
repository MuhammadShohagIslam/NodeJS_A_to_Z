// importing class based raising event
const School = require('./class_base_event');

const school = new School();

// listener for raising event
school.on('bellRing', (period) => {
    console.log(`${period} is finished`);
});

school.startPeriod();
