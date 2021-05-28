$(document).ready(function(){
    $(".amount-item").on("click", (function(){
        $(".amount-item").removeClass("amount-item-active");
        $(this).addClass("amount-item-active");
        $(".how-much").removeClass("how-much-active");
        if ($(this).attr('id') == "custom-amount") {
            $(".how-much").toggleClass("how-much-active");
        }
    }))

    $(".memory-honor").on("click", (function(){
        $(this).toggleClass("memory-honor-active");
    }))

    $(".toggle").on("click", (function(){
        $(this).toggleClass("toggle-active");
    }))

    $("#filter-byCollege").on("click", (function(){
        $(this).children("i").toggleClass("fa-angle-down fa-angle-up");
        $(".filter-dropdown").toggleClass("filter-dropdown-active");
    }))
})