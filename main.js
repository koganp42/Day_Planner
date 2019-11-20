$(document).ready(function() {
    let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let dateAndTimeDisplay = setInterval(momentDisplay, 1000);
    function momentDisplay() {
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));    
    };
    //console.log(now)

    $(".saveBtn").click(function( event ) {
        event.preventDefault();
        textStorage();
    });
    
    function textStorage() {
        $("textarea")
    }

    let nineTime = moment.utc("15:00", "HH:mm");
    let tenTime = moment.utc("16:00", "HH:mm");
    let elevenTime = moment.utc("17:00", "HH:mm");
    let twelveTime = moment.utc("18:00", "HH:mm");
    let oneTime = moment.utc("19:00", "HH:mm");
    let twoTime = moment.utc("20:00", "HH:mm");
    let threeTime = moment.utc("21:00", "HH:mm");
    let fourTime = moment.utc("22:00", "HH:mm");
    let fiveTime = moment.utc("23:00", "HH:mm");
    //let timeArray = [nineTime, tenTime, elevenTime, twelveTime, oneTime, twoTime, threeTime, fourTime, fiveTime];
    //console.log(timeArray);

    //The below code section 
    if (moment().diff(nineTime) > 1) {
        $("#nineTextArea").addClass("past");
    } else {
        $("#nineTextArea").addClass("future");
    };

    if (moment().diff(tenTime) > 1) {
        $("#tenTextArea").addClass("past");
    } else {
        $("#tenTextArea").addClass("future");
    };

    if (moment().diff(elevenTime) > 1) {
        $("#elevenTextArea").addClass("past");
    } else {
        $("#elevenTextArea").addClass("future");
    };

    if (moment().diff(twelveTime) > 1) {
        $("#twelveTextArea").addClass("past");
    } else {
        $("#twelveTextArea").addClass("future");
    };

    if (moment().diff(oneTime) > 1) {
        $("#oneTextArea").addClass("past");
    } else {
        $("#oneTextArea").addClass("future");
    };

    if (moment().diff(twoTime) > 1) {
        $("#twoTextArea").addClass("past");
    } else {
        $("#twoTextArea").addClass("future");
    };

    if (moment().diff(threeTime) > 1) {
        $("#threeTextArea").addClass("past");
    } else {
        $("#threeTextArea").addClass("future");
    };

    if (moment().diff(fourTime) > 1) {
        $("#fourTextArea").addClass("past");
    } else {
        $("#fourTextArea").addClass("future");
    };

    if (moment().diff(fiveTime) > 1) {
        $("#fiveTextArea").addClass("past");
    } else {
        $("#fiveTextArea").addClass("future");
    };
    
    // for (i = 0; i < timeArray.length; i++) {
    //     if (now.diff(timeArray[i]) > 0) {
    //         $(".")
    //     }
    // }

    //dateAndTimeDisplay;
})