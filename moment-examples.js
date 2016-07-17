var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));

var timeStamp = 1468794294977;
var timeStampMoment = moment.utc(timeStamp);

console.log(timeStampMoment.format('h:mm'));
// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format(' YYYY, h:mm '));