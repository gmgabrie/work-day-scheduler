

$(function () {
// Event listener for save button click
  $('.saveBtn').on('click', function () {
    // get nearby values of the description in jQuery
    var descText = $(this).siblings('.description').val();
    // get the id attribute of the parent div element
    var hourBlock = $(this).parent().attr('id');
    // save in local storage
  localStorage.setItem(hourBlock, descText);
  });
  

//function to compare time block hour to current hour and change class appropriately
function checkTimeBlock() {
  //function to grab current hour using DayJS
  var currentHour = dayjs().format('H');
  // console.log(currentHour);
  //parse out the hour digits from each time block ID
  $('.time-block').each(function () {
    var hourId = parseInt($(this).attr('id').split("hour-")[1]);
    // console.log(hourId);
  //if/else statements to change class depending on if time block is past, present or future
    if (hourId < currentHour) {
      $(this).addClass('past');
    }
    else if (hourId == currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

  //Get data from Local Storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  //declare variables for html elements where day/date and time will display
  var dayDisplayEl = $('#currentDay');
  var timeDisplayEl = $('#currentTime');

  //function to grab current day/date using dayjs and display in web page
  function displayCurrentDay() {
    var currentDay = dayjs().format('dddd - MMMM D, YYYY');
    dayDisplayEl.text(currentDay);
  }
  //function to display current using dayjs and display in web page
  function displayCurrentTime() {
    var currentTime = dayjs().format('h:mm a');
    timeDisplayEl.text(currentTime);
  }

//call function to grab current day/date and display in page every 30 seconds
  displayCurrentDay();
  displayCurrentTime();
  setInterval(displayCurrentTime, 30000);

//call checkTimeBlock function every 60 seconds
  checkTimeBlock();
  setInterval(checkTimeBlock, 60000);
});
