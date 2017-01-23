//Adds eventhandler for $().append();
//$("div").bind("append", function() { alert('Hello, world!'); });
(function($) {
    var origAppend = $.fn.append;

    $.fn.append = function () {
        return origAppend.apply(this, arguments).trigger("append");
    };
})(jQuery);