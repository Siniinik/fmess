// Plugin
$.fn.fmess = function(options) {
    types = {
            success: "alert alert-success",
            info: "alert alert-info",
            warning: "alert alert-warning",
            danger: "alert alert-danger"
        }
        // This is the easiest way to have default options.
    var settings = $.extend({
        // These are the defaults.
        text: "Плагин плавающих подсказок",
        type: "info",
        time: 1500,
        distance: 100,
        direction: "top"
    }, options);

    var t = this.offset().top;
    var l = this.offset().left;
    var w = this.outerWidth();
    var h = this.outerHeight();

    var rand = Math.floor((Math.random() * 10000) + 1);
    $('body').append('<div id="fast_mess_' + rand + '"></div>');
    var mess = $("#fast_mess_" + rand);
    mess.css("position", "fixed");
    mess.css("padding", "5px 5px");
    mess.css("opacity", "1");
    mess.css("z-index", "10000");
    mess.attr("class", types[settings.type]);
    mess.text(settings.text);
    var mess_h = mess.outerHeight();
    var mess_w = mess.outerWidth();
    var finish = mess_h + settings.distance;

    switch (settings.direction) {
        case "top":
            mess.offset({ "top": t, "left": l });
            mess.css("margin-top", "-" + h + "px");
            mess.animate({
                opacity: 0,
                marginTop: -finish
            }, settings.time, function() {
                mess.remove();
            });
            break;
        case "bottom":
            mess.offset({ "top": t + h, "left": l });
            // mess.css("margin-top", "-"+h+"px");
            mess.animate({
                opacity: 0,
                marginTop: finish
            }, settings.time, function() {
                mess.remove();
            });
            break;
        case "right":
            mess.offset({ "top": t + (h / 2 - (mess_h / 2)), "left": l + w });
            // mess.css("margin-top", "-"+h+"px");
            mess.animate({
                opacity: 0,
                marginLeft: finish
            }, settings.time, function() {
                mess.remove();
            });
            break;
        case "left":
            mess.offset({ "top": t + (h / 2 - (mess_h / 2)), "left": l - mess_w });
            // mess.css("margin-top", "-"+h+"px");
            mess.animate({
                opacity: 0,
                marginLeft: -finish
            }, settings.time, function() {
                mess.remove();
            });
            break;

    }

};
