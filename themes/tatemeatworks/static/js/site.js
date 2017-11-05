(function(window, $) {
    $(document).ready(function() {

        // Update the copyright year in the footer to be current
        var curYear = new Date().getFullYear();
        $('.copyright-year').text(curYear);

    });
})(window, jQuery);