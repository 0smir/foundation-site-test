/**
 * Created by user on 03.10.2016.
 */
$(document).ready(function () {
    var mobileNavTrigger = $('.mobile-nav'),
        body = $('body'),
        closeMobileNav = $(".mobile-nav-close-button");

    $(".play").on("click", function (){
        $(".controls-video").fadeOut();
        $("#bgvideo")[0].play();
    });


    $(mobileNavTrigger).on('click', function () {
        if($(body).hasClass('blocked')){
            $(body).removeClass('blocked');
        } else{
            $(body).addClass('blocked');
        }
    });

    $(document).on('click', function (e) {
        var target = e.target;
        if($(target).hasClass('js-off-canvas-exit') || $(target).hasClass('closeMobileNav') || $(target).hasClass('mobile-nav-close-icon')){
            $(body).removeClass('blocked');
        }
    });

    jQuery.validator.addMethod("validate_email",function(value, element) {
        if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ))
        {
            return true;
        }
        else
        {
            return false;
        }
    },"Please enter a valid Email.");


    $("#subscribe_form").validate({
        rules: {
            mail: {
                email: true,
                required: true,
                validate_email: true
            },
            name: {
                minlength: 2

            }
        },
        messages: {
            mail: {
                required: "Please, enter your Email!"
            },
            name: {
                minlength: "Name should be longer!"
            }
        }
    });





});

