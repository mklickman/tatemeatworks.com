(function(window, $) {
    $(document).ready(function() {



        // Update the copyright year in the footer to be current
        var curYear = new Date().getFullYear();
        $('.copyright-year').text(curYear);


        //  Order page sticky sidebar
        // ------------------------------------------------------------------------//
        
        $('.sidebar-nav').sticky({
            topSpacing: 10,
            bottomSpacing: 450
        });

       
        
        //  Online Order Form
        // ------------------------------------------------------------------------//

        // Show/hide item drawer
        $('.form-group.--item input[type="checkbox"]').on('change', function() {
            $(this).parents('.form-group').find('.form-group-drawer').toggleClass('--visible');
        });

        // Remove empty product lines from the form before submitting
        $('.order-form').on('submit', function(event) {
            event.preventDefault();

            // Since anything with a "name" attribute gets submitted via formspree,
            // we remove all the checkboxes first to prevent cluttering up the email
            $(this).find('input[type="checkbox"]').remove();

            // Remove any text fields that aren't visible. This allows us to retain
            // any user input in case they decide to "un-delete" an item.
            $('.item-amount').each(function(i, e) {
                var $this = $(this);

                if(!$this.parents('.form-group-drawer').hasClass('--visible')) {
                    $this.remove();
                }
            });

            // Submit the form once all the empty fields are cleaned up
            $(this)[0].submit();
        });

    });
})(window, jQuery);