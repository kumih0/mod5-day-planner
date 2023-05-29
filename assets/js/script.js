// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  console.log("ready");
  // var 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
var saveBtn = $('.saveBtn');
var eventInput = $('description').val();
var hourBlock;
// var hourEvent;
// var newEvent = {};

function saveEvent() {
  //check for saved events in local storage
  //if there is a key name of same hour block, the value is overwritten
  //if event has text inside it, the information is saved to localstorage
  if (eventInput.val() !== null) {
    hourBlock = eventInput.prev().text();
    // hourBlock = eventInput.parent(".time-block");
    newEvent = {hourBlock: eventInput};

    localStorage.setItem(hourBlock, 'eventInput');
    localStorage.setItem('events', JSON.stringify(newEvent));
     console.log(hourBlock);
     console.table(newEvent);
  } else {
    return;
  }

};
saveBtn.on('click', saveEvent);


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentHour = dayjs(clock).format('HH');
  var allTimeBlock = $('.time-block');
console.log(currentHour);
console.log(allTimeBlock);
    // var timeBlockId = allTimeBlock.attr('id');
    // console.log(timeBlockId);
  function tickTock() {
    var allTimeId = $.each(allTimeBlock, function (_i, val) {  
      $('#' + val - 'hour-');
    });       
    console.log(allTimeId);

for (let i = 0; i < allTimeId.length; i++) {
    const timeBlock = allTimeBlock[i];
    console.log(allTimeBlock[i]);
    // for loop checks if the current hour value (number) in the SAME place in the array index as time block 
     if (currentHour > allTimeId[i] && $(timeBlock).hasClass('present')) {
        $(timeBlock).removeClass().addClass('past');
    } else if (currentHour === allTimeId[i] && $(timeBlock).hasClass('future')) {
          $(timeBlock).removeClass('future').addClass('present');
    } else if(currentHour < allTimeId[i] && $(timeBlock).hasClass('past')) {
        timeBlock.removeClass('past').addClass('future');
    } else if (currentHour < allTimeId[i]){
        timeBlock.addClass(future);
      } 
    }
  };

setInterval(tickTock, 10000);
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
function loadEvents() {
  //generates the saved stringified events from local storage as an obj with json
  var savedEvents = localStorage.getItem(JSON.parse('events'));
  // if there is a value in localstorage for 'events'/savedevents obj, will look for all key names of the obj's key-value pairs and return a new array of those key names as eventTime and array of values as eventSaved
  if (savedEvents.val() == true) {
    // /takes the key name values (they're all numbers) and attaching the id tag and the string text hour- in front of it so they match the html id names

    $.each(savedEvents, function (key, val) { 
      var key = Object.keys(val)[0];
      var eventSaved = val[key].val();
       var eventTime = $('#hour-' + key);

      //  if the localstorage key name for the hour block exists and matches a HTML ID tag, then the saved event will be displayed in the text box for that given hour block
       if (allTimeBlock.$(eventTime) === true) {
        hourBlock = $(allTimeBlock.eventTime);
        hourBlock.eventInput.text() = eventSaved.val();
       } else
       return false;
    });
        }
      };


  // TODO: Add code to display the current date in the header of the page.
  var date = $('#currentDay');
  var clock =$('#clock');
  
  function dateNtime() {
    var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
    var time = dayjs().format('hh:mm:ss a');
    
    date.text(today);
    clock.text(time);
  };
dateNtime();
setInterval(dateNtime, 1000);


});
