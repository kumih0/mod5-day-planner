// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Get the current hour using dayjs
  var today = dayjs();
  var saveBtn = $('.saveBtn');
  var hourBlock = document.querySelectorAll('.time-block');

  function dateNtime() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM D, YYYY, h:mm:ss A"));
  };
  dateNtime();
  setInterval(dateNtime, 1000);

  // Function to check the time and add the correct class to each hour block
  function tickTock() {
    // Load data from local storage and add to the correct hour block
    for (var i = 0; i < localStorage.length; i++) {
      var loadEvents = localStorage.key(i);
      $("#" + loadEvents).children(".description").val(localStorage.getItem(loadEvents));
    };

    for (var i = 0; i < hourBlock.length; i++) {
      var hourId = $(hourBlock[i]).attr("id");
      hourId = hourId.split("-")[1];
      console.log(hourId);

      if (today.hour() > hourId) {
        // Add 'past' class for time blocks in the past
        $(hourBlock[i]).children(".description").addClass("past");
      }

      // Add 'present' class for the current time block
      else if (today.hour() == hourId) {
        $(hourBlock[i]).children(".description").addClass("present");
      }

      // Add 'future' class for time blocks in the future
      else if (today.hour() < hourId) {
        $(hourBlock[i]).children(".description").addClass("future");
      }
    }
  }
  setInterval(tickTock, 10000);

  saveBtn.on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
  
    localStorage.setItem(time, text);
  });

  // Clear local storage
$("#clearStorageBtn").on("click", function () {
  localStorage.clear();
});

});
