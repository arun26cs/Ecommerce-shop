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

        console.log("offset:" + $("#register-submit").offset().top);
        $("#register-submit").click(function() {
            console.log("register page submitted");
            console.log(allGood());

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

        allGood = function() {
            console.log("eneterd valid");
            var Good = 0;
            $("#customername").focus(function() {
                if (!$("#customername").val().trim() || $("#customername").val() == null) {
                    $("#customername").addClass("redAlert");

                } else {
                    $("#customername").removeClass("redAlert");
                    Good += 1;
                }
            });
            $("#username").focus(function() {
                if (!$("#username").val().trim() || $("#username").val() == null) {
                    $("#username").addClass("redAlert");

                } else {
                    $("#username").removeClass("redAlert");
                    Good += 1;
                }
            });
            $("#password").focus(function() {
                if (!$("#password").val().trim() || $("#password").val() == null) {
                    $("#password").addClass("redAlert");

                } else {
                    $("#password").removeClass("redAlert");
                    Good += 1;
                }
            });
            $("#email").focus(function() {
                console.log("email: ");
                if (!$("#email").val().trim() || $("#email").val() == null) {
                    $("#email").addClass("redAlert");

                } else {
                    $("#email").removeClass("redAlert");
                    Good += 1;
                }
            });
            $("#phone").focus(function() {
                if (!$("#phone").val().trim() || $("#phone").val() == null) {
                    $("#phone").addClass("redAlert");

                } else {
                    $("#phone").removeClass("redAlert");
                    Good += 1;
                }
            });
            $("#address").focus(function() {
                if (!$("#address").val().trim() || $("#address").val() == null) {
                    $("#address").addClass("redAlert");

                } else {
                    $("#address").removeClass("redAlert");
                    Good += 1;
                }
                console.log(Good);
            });
            console.log($("#customername").val(),
                $("#username").val(),
                $("#password").val(),
                $("#email").val(),
                $("#phone").val(),
                $("#address").val());
            if (Good >= 5) {
                console.log(Good);
                return true;
            } else {
                console.log(Good);
                return false;
            }
        }

    }
);