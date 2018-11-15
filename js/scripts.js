
var constraints = {
    name: {
        presence: true,
        length: {
            minimum: 3
        }
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        presence: true,
        length: {
            minimum: 6
        }
    },
    confirmPassword: {
        presence: true,
        equality: "password"
    }
}

$("#registerForm").submit(function(event){
    event.preventDefault();
    var form = $("#registerForm");

    var errors = validate(form, constraints);
    console.log(errors);

    showErrors(errors);

    if(!errors){
        console.log("form has been submitted");
    }
    // alert("form has been submitted");
})

function showErrors(errors){
    var inputs = $("#registerForm .form-control");
    $(inputs).each(function(){
        var input = $(this);
        var inputName = input.attr("name");
        if(errors && errors[inputName]){
            input.addClass('is-invalid');
            input.removeClass('is-valid');
            input.parent()
                .find('.message')
                .addClass('invalid-feedback')
                .removeClass('valid-feedback')
                .text(errors[inputName])
                .show();
        } else {
            input.addClass('is-valid');
            input.removeClass('is-invalid');
            input.parent()
                .find('.message')
                .removeClass('invalid-feedback')
                .addClass('valid-feedback')
                .text('You are good to go')
                .show();
        }
    })
}