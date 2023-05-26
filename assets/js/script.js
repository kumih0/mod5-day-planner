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
var eventInput;
var hourBlock;
var hourEvent;
// var newEvent = {};

function saveEvent() {
  eventInput = $("description").val();
  //check for saved events in local storage
  //if there is a key name of same hour block, the value is overwritten
  //if event has text inside it, the information is saved to localstorage
  if (eventInput.value !== null) {
    hourEvent = eventInput.prev().text();
    // hourBlock = eventInput.parent(".time-block");
    // newEvent = {hourBlock: eventInput};

    localStorage.setItem(hourEvent, "eventInput");
    //localStorage.setItem("events", JSON.stringify(newEvent));
     
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

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.
  var date = $('#currentDay');
  var clock =$("#clock");
  
  function dateNtime() {
    var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
    var time = dayjs().format("hh:mm:ss a");
    
    date.text(today);
    clock.text(time);
  };
dateNtime();
setInterval(dateNtime, 1000);


});
