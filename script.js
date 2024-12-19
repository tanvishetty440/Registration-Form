$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Collect form data
        const formData = $(this).serialize();

        // Send data to PHP using AJAX
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            success: function (response) {
                $('#result').html(response); // Display the response
                $('#registrationForm')[0].reset(); // Clear the form
            },
            error: function () {
                $('#result').html('<p style="color:red;">An error occurred. Please try again.</p>');
            }
        });
    });
});