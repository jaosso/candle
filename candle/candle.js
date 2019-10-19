$(".wick").click(function() {
    if ($(".flame").css("visibility") == "hidden") {
        $(".flame").css("visibility", "visible");
        $(".shine").css("visibility", "visible");
    } else {
        $(".flame").css("visibility", "hidden");
        $(".shine").css("visibility", "hidden");
    }
})