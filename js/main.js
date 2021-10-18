$(".btn-green").click(function() {
    $(this).css("background-color", "green");
});

$(".btn-green-discount").click(function() {
    $(this).css("background-color", "green");
});

$(".btn-item").click(function() {
    $(this).css({ "background-color": "green", "color": "white" });
});

$(".product-list-title-mobile").click(function() {
    $(".product-mobile").toggle();
});

$(".menu-mobile-title").click(function() {
    $(".menu-mobile-list").toggle();
})

$(".menu-tablet-title").click(function() {
    $(".menu-tablet-list").toggle();
})

$(".fa-caret-down").click(function() {
    $(".sub-menu-product").show();
    $(".fa-caret-down").hide();
    $(".fa-caret-up").show();
    $(".icon-show-sub .fa-caret-down").show();
    $(".icon-show-sub .fa-caret-up").hide();
});

$(".fa-caret-up").click(function() {
    $(".sub-menu-product").hide();
    $(".fa-caret-up").hide();
    $(".fa-caret-down").show();
});

$(".icon-show-sub .fa-caret-down").click(function() {
    $(".post-menu").show();
    $(".icon-show-sub .fa-caret-up").show();
    $(".icon-show-sub .fa-caret-down").hide();
});

$(".icon-show-sub .fa-caret-up").click(function() {
    $(".post-menu").hide();
    $(".icon-show-sub .fa-caret-up").hide();
    $(".icon-show-sub .fa-caret-down").show();
});

$(".list-icon").click(function() {
    $(".product").toggle();
})