$(
    () => {
        console.log("pressed");
        //Hiding the Register page
        $(".register-body").hide();
        $(".success").hide();

        //clicking the register button to show register page and hide the form body for sign in
        $("#register").click(
            function() {
                $(".form-body").hide();
                $(".register-body").show();
            }
        );


        $("#register-submit").click(function() {
            console.log("register page submitted");

            var form_register = {
                customername: $(".form-group #customername").val(),
                username: $("#username").val(),
                password: $("#password").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                address: $("#address").val()
            };
            console.log(form_register);
            var string_form_register = JSON.stringify(form_register);
            $.ajax({
                type: 'POST',
                url: "/customers",
                data: string_form_register,


            });

            $(".form-body").fadeIn();
            $(".register-body").fadeOut();
            $(".success").fadeToggle("slow");
        });

    }
);