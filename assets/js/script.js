// The.ready() method offers a way to run JavaScript code as soon as the page 's 
// Document Object Model (DOM) becomes safe to manipulate. This will often be a 
// good time to perform tasks that are needed before the user views or interacts 
// with the page, for example to add event handlers and initialize plugins. 

$(document).ready(function () {
    var getCurrentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(getCurrentDate);


    // Get current time in hour.
    var currentHour = moment().hour();

    $(".saveBtn").on("click", function () {
        // Gets the current elements description and time hour.
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        // Save values to localStorage
        localStorage.setItem(time, description);
    });

    // Continously updated the blocks by check the time.
    var timeBlockUpdate = function () {
        $(".time-block").each(function () {

            var timeBlockHourTime = parseInt($(this).attr("id").split("-")[1]);
            // console.log("This is the time block hour: " + timeBlockHourTime);

            // If time period is before current time set time block to grey.
            // If time period is at current time, set time block to red.
            // If time period is  in the futre set time block to green.
            if (timeBlockHourTime < currentHour) {
                $(this).addClass("past");
            } else if (timeBlockHourTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    };

    timeBlockUpdate();
    var timeBlockUpdated = setInterval(timeBlockUpdate, 30000);

    // Load events or tasks from local storage.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});