$(function () {

    //Slider
    $('.gallery').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
    });

//    Selector of theme
    let theme = $("#theme")

    $("#to-green").on("click", function () {
        theme.attr("href", "css/green.css")
    })

    $("#to-red").on("click", function () {
        theme.attr("href", "css/red.css")
    })

    $("#to-blue").on("click", function () {
        theme.attr("href", "css/blue.css")
    })

})