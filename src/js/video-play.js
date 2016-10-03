/**
 * Created by user on 03.10.2016.
 */
$(document).ready(function () {
    $(".play").on("click", function (){
        $(".controls-video").fadeOut();
        $("#bgvideo")[0].play();
    });

});

