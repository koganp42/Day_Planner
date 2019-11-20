$(document).ready(function() {
    let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let dateAndTimeDisplay = (momentDisplay, 1000);
    function momentDisplay() {
        $("#currentday").text(now);    
    };
    console.log(now)

    $(".saveBtn").click(function( event ) {
        event.preventDefault()
    });
    
    function textStorage() {
        $()
    }
})