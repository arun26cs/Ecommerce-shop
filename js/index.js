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
            var c_name;
            /*if($(".form-group #customername").val().trim()){
                c_name=$(".form-group #customername").val().trim();
            }else{
                alert("customer name empty");
            }*/

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
                contentType: "application/json",
                dataType: 'json',
                data: string_form_register,
                success: function(data) {

                    console.log(data);
                },
                failure: function() {
                    alert("failure");
                }

            });
            $(".form-body").fadeIn();
            $(".register-body").fadeOut();
            $(".success").fadeToggle("slow");


        });


    }
);