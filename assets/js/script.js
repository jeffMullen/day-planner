var planner = $('#planner');
var entry = $('#entry');

// || Each Timeblock
var nine = $('#9');
var ten = $('#10');
var eleven = $('#11');
var twelve = $('#12');
var thirteen = $('#13');
var fourteen = $('#14');
var fifteen = $('#15');
var sixteen = $('#16');
var seventeen = $('#17');

var time = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

// || Moment.js to display time
var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

// || Timeblocks color coded for past, present, and future ******
var currentHour = parseInt(moment().format('H'));

for (var i = 0; i < time.length; i++) {
    if (currentHour > parseInt(time[i].attr('id'))) {
        time[i].addClass('past');
    }
    if (currentHour === parseInt(time[i].attr('id'))) {
        time[i].addClass('present');
    }
    if (currentHour < parseInt(time[i].attr('id'))) {
        time[i].addClass('future');
    }
}
// || Specific save button
var buttonClicked;
// || Event listener on whole container
planner.on('click', 'button', function (event) {
    buttonClicked = this;
    saveEntry();
})

function saveEntry(event) {
    // || Choose textarea associated with button and save to local storage
    var textarea = $(buttonClicked).parent().siblings().eq(1).children().children().children();
    var inputId = textarea.attr('id');
    localStorage.setItem(inputId, textarea.val());

    // || Message displaying that entry has been saved
    var messageEl = $('<div>');
    var messageP = $('<p>');
    messageEl.append(messageP);
    messageP.text('Entry has been saved to Local Storage');
    messageEl.attr('id', 'message');
    planner.prepend(messageEl);
    messageEl.addClass('text-center');
    messageEl.attr('style', 'display: block');
    setTimeout(function () {
        messageEl.attr('style', 'display: none');
    }, 1500);
}

// || Loading events to the planner
$('textarea').each(function () {
    localStorage.getItem($(this).attr('id'));
    $(this).val(localStorage.getItem($(this).attr('id')));
});
