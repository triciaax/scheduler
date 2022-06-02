//variables defined below 
var schedulerblock = $('#hour-scheduler');
var now = moment().format('LL');
const store = window.localStorage;

//pull dynamically of the current day/date of the week
$('#currentDay').text(now)

//generate blocks for each hour of the day

