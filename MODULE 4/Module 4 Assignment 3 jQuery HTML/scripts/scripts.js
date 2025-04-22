$(document).ready(function() {
    $('#form-container__button--submit').click(function() {
        let formData = '';
        $('#form-container__form input').each(function() {
            formData += $(this).val() + ' ';
            $(this).val('');
        });
        $('#form-container__display').append('<p>' + formData + '</p>');
    });

    $('#form-container__button--light-mode').click(function() {
        $('body').removeClass('form-container__button--dark-mode');
    });

    $('#form-container__button--dark-mode').click(function() {
        $('body').addClass('form-container__button--dark-mode');
    });

    $('#form-container__button--increase-font').click(function() {
        $('body').addClass('form-container__button--increase-font').removeClass('form-container__button--decrease-font');
    });

    $('#form-container__button--decrease-font').click(function() {
        $('body').addClass('form-container__button--decrease-font').removeClass('form-container__button--increase-font');
    });
});