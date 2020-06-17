$(function () {

    //Slider
    $('.gallery').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
    });

//    Posts

    let posts = [
        {
            title: 'Proof of title 1',
            date: 'Published in ' + moment().format("LLLL"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat sem. Curabitur faucibus\n' +
                '                    sit amet ante ut malesuada. Pellentesque a sagittis neque, at posuere nisi. Ut a ligula venenatis,\n' +
                '                    molestie augue vitae, congue turpis. Nullam semper felis sed semper efficitur. Phasellus velit nisi,\n' +
                '                    malesuada vitae lobortis vitae, gravida sit amet augue. Praesent pulvinar tempor orci, eget commodo\n' +
                '                    justo iaculis vitae. Morbi ultricies, est ut imperdiet ultrices, velit tellus pretium neque, in\n' +
                '                    finibus quam metus mollis nibh. Etiam a arcu egestas, porttitor augue a, maximus ipsum.'
        },
        {
            title: 'Proof of title 2',
            date: 'Published in ' + moment().format("LLLL"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat sem. Curabitur faucibus\n' +
                '                    sit amet ante ut malesuada. Pellentesque a sagittis neque, at posuere nisi. Ut a ligula venenatis,\n' +
                '                    molestie augue vitae, congue turpis. Nullam semper felis sed semper efficitur. Phasellus velit nisi,\n' +
                '                    malesuada vitae lobortis vitae, gravida sit amet augue. Praesent pulvinar tempor orci, eget commodo\n' +
                '                    justo iaculis vitae. Morbi ultricies, est ut imperdiet ultrices, velit tellus pretium neque, in\n' +
                '                    finibus quam metus mollis nibh. Etiam a arcu egestas, porttitor augue a, maximus ipsum.'
        },
        {
            title: 'Proof of title 3',
            date: 'Published in ' + moment().format("LLLL"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat sem. Curabitur faucibus\n' +
                '                    sit amet ante ut malesuada. Pellentesque a sagittis neque, at posuere nisi. Ut a ligula venenatis,\n' +
                '                    molestie augue vitae, congue turpis. Nullam semper felis sed semper efficitur. Phasellus velit nisi,\n' +
                '                    malesuada vitae lobortis vitae, gravida sit amet augue. Praesent pulvinar tempor orci, eget commodo\n' +
                '                    justo iaculis vitae. Morbi ultricies, est ut imperdiet ultrices, velit tellus pretium neque, in\n' +
                '                    finibus quam metus mollis nibh. Etiam a arcu egestas, porttitor augue a, maximus ipsum.'
        },
        {
            title: 'Proof of title 4',
            date: 'Published in ' + moment().format("LLLL"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat sem. Curabitur faucibus\n' +
                '                    sit amet ante ut malesuada. Pellentesque a sagittis neque, at posuere nisi. Ut a ligula venenatis,\n' +
                '                    molestie augue vitae, congue turpis. Nullam semper felis sed semper efficitur. Phasellus velit nisi,\n' +
                '                    malesuada vitae lobortis vitae, gravida sit amet augue. Praesent pulvinar tempor orci, eget commodo\n' +
                '                    justo iaculis vitae. Morbi ultricies, est ut imperdiet ultrices, velit tellus pretium neque, in\n' +
                '                    finibus quam metus mollis nibh. Etiam a arcu egestas, porttitor augue a, maximus ipsum.'
        },
        {
            title: 'Proof of title 5',
            date: 'Published in ' + moment().format("LLLL"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut volutpat sem. Curabitur faucibus\n' +
                '                    sit amet ante ut malesuada. Pellentesque a sagittis neque, at posuere nisi. Ut a ligula venenatis,\n' +
                '                    molestie augue vitae, congue turpis. Nullam semper felis sed semper efficitur. Phasellus velit nisi,\n' +
                '                    malesuada vitae lobortis vitae, gravida sit amet augue. Praesent pulvinar tempor orci, eget commodo\n' +
                '                    justo iaculis vitae. Morbi ultricies, est ut imperdiet ultrices, velit tellus pretium neque, in\n' +
                '                    finibus quam metus mollis nibh. Etiam a arcu egestas, porttitor augue a, maximus ipsum.'
        }
    ]

    posts.forEach((item, index) => {
        let post = `
          <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Read more</a>
          </article>
        `

        $("#posts").append(post)
    })

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

//    Scroll up of the web
    $('.rise').on("click", function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

// Login false

    $("#login form").on("submit", function () {
        let form_name = $("#form_name").val()

        localStorage.setItem("form_name", form_name)
    })

    let form_name = localStorage.getItem("form_name")
    if (form_name != null && form_name != "undefined") {
        let about_paragraph = $("#about p")

        $("#about p").html("<br><strong>Welcome, " + form_name + "</strong>")

        about_paragraph.append("<a href='#' id='logout'> SIGN OFF</a>")

        $("#login").hide()

        $("#logout").on("click", function () {
            localStorage.clear()
            location.reload()
        })
    }

})