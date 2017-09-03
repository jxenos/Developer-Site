/* add mouseover effect to options */
$("div.option").mouseover(
    function(e) {
    e.stopPropagation();
    $(this).addClass("hover");
}).mouseout(
function() {
    $(this).removeClass("hover");
});
