$(document).ready(function() {
    const moveable = $('#moveable');

    // Animate up
    $('#up-btn').click(function() {
        moveable.stop().animate({ top: '-=500px' }, 500, function() {
            console.log('Moved up!'); // Callback
        });
    });

    // Animate down
    $('#down-btn').click(function() {
        moveable.stop().animate({ top: '+=500px' }, 500, function() {
            console.log('Moved down!');
        });
    });

    // Animate left
    $('#left-btn').click(function() {
        moveable.stop().animate({ left: '-=500px' }, 500, function() {
            console.log('Moved left!');
        });
    });

    // Animate right
    $('#right-btn').click(function() {
        moveable.stop().animate({ left: '+=500px' }, 500, function() {
            console.log('Moved right!');
        });
    });

    // Stop any ongoing animations
    $('#stop-btn').click(function() {
        moveable.stop(); // Stops all current animations
        console.log('Animation stopped!');
    });
});