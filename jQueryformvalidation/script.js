$(document).ready(function() {
    $('#submit').on('click', function(event){

        let name = $('#name');
        let email = $('#email');
        let phoneNumber = $('#phone');
        let message = $("#message");
        
        let required = [name, email, phoneNumber];
        
        for(let i=0; i < required.length; i++){
            if (required[i].val() === "") {
                const newP = '<p>Please Fill Out Required Fields</p>';
                message.html(newP);
                message.addClass("warning");
                required[i].prev('label').css('color', 'red').addClass("warning");
        
            } else {
                message.removeClass("warning").empty();
                required[i].prev('label').css('color', '').removeClass("warning");
            }
        }
            if(!$('label').hasClass("warning")) {
                $('.form-container').remove();
                $('h2').html("Thanks for your feedback!")
            }
        });
});

