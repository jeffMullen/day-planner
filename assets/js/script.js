// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



// || Moment.js to display time
var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

// || Storing current hour for color display
var currentHour = moment().format('H');
console.log(currentHour);

// Timeblocks color coded for past, present, and future ******

    // Moment.js to track which hour it is

    // Variable for each large div

    // Array for all time div variables

    // Placeholder index that changes each time the hour changes moment.js

        // Event listener on change of moment.js

    // If indexes are earlier in the array - past

    //  If current index - present

    //  If indexes are later in array - future

    // event listener on whole container


// WHEN I click into a timeblock *******
// THEN I can enter an event ********

    // Text area in each large div


// WHEN I click the save button for that timeblock *********
// THEN the text for that event is saved in local storage ********

    // Button on last div of each row

        //  Event listener click on container targeting buttons

    //  On click string is saved to local storage

    //  On load text fields are populated from local storage