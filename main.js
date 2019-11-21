$(document).ready(function() {
    let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let dateAndTimeDisplay = setInterval(momentDisplay, 1000);
    function momentDisplay() {
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));    
    };
    //console.log(now)

    populateTextAreas();
    function populateTextAreas(){
        
    }
    
    $(".saveBtn").click(function( event ){
        event.preventDefault();
        localStorage.setItem($(this).siblings("label").text(), $(this).siblings("textarea").val())
    }) 



    console.log(localStorage);

    //These variables correspond to the time slots listed on the schedule, 9-5.
    let nineTime = moment.utc("15:00", "HH:mm");
    let tenTime = moment.utc("16:00", "HH:mm");
    let elevenTime = moment.utc("17:00", "HH:mm");
    let twelveTime = moment.utc("18:00", "HH:mm");
    let oneTime = moment.utc("19:00", "HH:mm");
    let twoTime = moment.utc("20:00", "HH:mm");
    let threeTime = moment.utc("21:00", "HH:mm");
    let fourTime = moment.utc("22:00", "HH:mm");
    let fiveTime = moment.utc("23:00", "HH:mm");
    //Keeping this array here in case I decided to try iterating through it with one if/elseif/else statement.
    //let timeArray = [nineTime, tenTime, elevenTime, twelveTime, oneTime, twoTime, threeTime, fourTime, fiveTime];

    //The below code section calls the moment function and compares it to the predetermined hour slot variables, changing the styling of the text areas according to whether the hour slot is in the past, present, or future.
    if (moment().diff(nineTime) > (3.6e+6)) {
        $("#nineTextArea").addClass("past");
    } else if(moment().diff(nineTime) > 1 && moment().diff(nineTime) < (3.6e+6)) {
        $("#nineTextArea").addClass("present");
    } else {
        $("#nineTextArea").addClass("future");
    };

    if (moment().diff(tenTime) > (3.6e+6)) {
        $("#tenTextArea").addClass("past");
    } else if(moment().diff(tenTime) > 1 && moment().diff(tenTime) < (3.6e+6)) {
        $("#tenTextArea").addClass("present");
    } else {
        $("#tenTextArea").addClass("future");
    };

    if (moment().diff(elevenTime) > (3.6e+6)) {
        $("#elevenTextArea").addClass("past");
    } else if(moment().diff(elevenTime) > 1 && moment().diff(elevenTime) < (3.6e+6)) {
        $("#elevenTextArea").addClass("present");
    } else {
        $("#elevenTextArea").addClass("future");
    };

    if (moment().diff(twelveTime) > (3.6e+6)) {
        $("#twelveTextArea").addClass("past");
    } else if(moment().diff(twelveTime) > 1 && moment().diff(twelveTime) < (3.6e+6)) {
        $("#twelveTextArea").addClass("past");
    } else {
        $("#twelveTextArea").addClass("future");
    };

    if (moment().diff(oneTime) > (3.6e+6)) {
        $("#oneTextArea").addClass("past");
    } else if(moment().diff(oneTime) > 1 && moment().diff(oneTime) < (3.6e+6)) {
        $("#oneTextArea").addClass("present");
    } else {
        $("#oneTextArea").addClass("future");
    };

    if (moment().diff(twoTime) > (3.6e+6)) {
        $("#twoTextArea").addClass("past");
    } else if(moment().diff(twoTime) > 1 && moment().diff(twoTime) < (3.6e+6)) {
        $("#twoTextArea").addClass("present");
    } else {
        $("#twoTextArea").addClass("future");
    };

    if (moment().diff(threeTime) > (3.6e+6)) {
        $("#threeTextArea").addClass("past");
    } else if(moment().diff(threeTime) > 1 && moment().diff(threeTime) < (3.6e+6)) {
        $("#threeTextArea").addClass("present");
    } else {
        $("#threeTextArea").addClass("future");
    };

    if (moment().diff(fourTime) > (3.6e+6)) {
        $("#fourTextArea").addClass("past");
    } else if(moment().diff(fourTime) > 1 && moment().diff(fourTime) < (3.6e+6)) {
        $("#fourTextArea").addClass("present");
    } else {
        $("#fourTextArea").addClass("future");
    };

    if (moment().diff(fiveTime) > (3.6e+6)) {
        $("#fourTextArea").addClass("past");
    } else if(moment().diff(fiveTime) > 1 && moment().diff(fiveTime) < (3.6e+6)) {
        $("#fiveTextArea").addClass("present");
    } else {
        $("#fiveTextArea").addClass("future");
    };
    
})