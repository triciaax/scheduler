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
    `<form data-name="${hour}" class="row justify-content-center"></form>.`
  );
  var timeEl = $(
    `<div class="row justify-content-center">${timeString}</div>`
  );
  var textEl = $(
    `<textarea name="${hour}" class="row justify-content-center col-6">${store.getItem(`store-${hour}`) || ""}</textarea>`
  );
  var saveEl = $(`<button class="btn btn-info" type="submit">Save</button>`);
  hourBlock.append(timeEl, textEl, saveEl);
  return hourBlock;
}

function buildTimeString(hour) {
  var timeString = moment(hour, "hA").format("hA");
  return timeString;
}

for (var i = 0; i <= 24; i++) {
    schedulerblock.append(buildHourBlock(i));
}