const HebrewDate = require('./libhdate-wrapper');

const date = new Date('2021-09-21')
const hdate = new HebrewDate({ date });
console.log(hdate.year, hdate.month, hdate.date, hdate.holiday, hdate.holidayName);
