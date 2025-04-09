// Function to hide paragraphs, tied to the button with ID 'hideParagraphs'
$('#hideParagraphs').click(function() {
    $('p').hide();
});

// Function to hide the div with an ID, tied to the button with ID 'hideDiv'
$('#hideDiv').click(function() {
    $('#myDiv').hide();
});

// Function to hide h2 headings when clicked
$('h2').click(function() {
    $(this).hide();
});