//variables defined below
var schedulerblock = $("#hour-scheduler");
var now = moment().format("LL");
const store = window.localStorage;

//pull dynamically of the current day/date of the week
$("#currentDay").text(now);

//generate blocks for each hour of the day
function buildHourBlock(hour) {
  var timeString = buildTimeString(hour);
  var hourBlock = $(
    `<form data-name="${hour}" class="row justify-content-center ${color(hour)}"></form>.`
  );
  var timeEl = $(
    `<div class="col-lg-2 col-md-2 col-sm-3 ${color(hour)}">${timeString}</div>`
  );

  //text area for user input is below
  var textEl = $(
    `<textarea name="${hour}" class="col-lg-9 col-md-8 col-sm-6 ${color(hour)}">${store.getItem(`store-${hour}`) || ""}</textarea>`
  );

  //save button and functionality for user is below
  var saveEl = $(`<button class="btn btn-dark col-lg-1 col-md-2 col-sm-3" type="submit">Save</button>`);
  hourBlock.submit(function(e) {
    var hour = $(this).data('name');
    var text = $(this).find('textarea').val();
    store.setItem(`store-${hour}`, text);  
})
hourBlock.append(timeEl);
hourBlock.append(textEl);
hourBlock.append(saveEl);
return hourBlock;
}

function buildTimeString(hour) {
var timeString = moment(hour, 'hA').format('hA');
return timeString;
}

function color(hour) {
    var currentHour = moment().hour();
    if (currentHour > hour) {
        return 'background-past';
    } else if (currentHour === hour) {
        return 'background-current';
    } else {
        return 'background-future';
    }
}

//set the time range from 9AM to 6PM
for (var i = 9; i <= 18; i++) {
schedulerblock.append(buildHourBlock(i));
}