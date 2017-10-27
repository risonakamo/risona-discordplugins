function randomColor()
{
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

function randomise()
{
    $(".avatar-small").css("background-color",randomColor());
    $(".messages-wrapper").css("background-color",randomColor())
    $(".guilds-wrapper").css("background-color",randomColor());
}
