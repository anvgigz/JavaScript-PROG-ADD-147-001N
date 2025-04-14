$(document).ready(function() {
    // Hide/Show Effect
    $('#hide-show-btn').click(function() {
        $('#image').toggle();
    });

    // Fade Effect
    $('#fade-btn').click(function() {
        $('#image').fadeToggle(1000);
    });

    // Slide Effect
    $('#slide-btn').click(function() {
        $('#image').slideToggle(1000);
    });
});