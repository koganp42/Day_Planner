$(document).ready(function() {
    //let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let dateAndTimeDisplay = setInterval(momentDisplay, 1000);
    function momentDisplay() {
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));    
    };
    //console.log(now)

   
})