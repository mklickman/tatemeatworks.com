(function(window, $) {
    $(document).ready(function() {

        //  Mobile nav visibility
        // ------------------------------------------------------------------------//
        $('.mobile-nav-trigger').on('click', function(event) {
            event.preventDefault();
            $('.site-header').toggleClass('nav-expanded');
        });


        //  Update the copyright year in the footer to be current
        // ------------------------------------------------------------------------//
        var curYear = new Date().getFullYear();
        $('.copyright-year').text(curYear);


        //  IE 9 Upgrade notice close behavior
        // ------------------------------------------------------------------------//
        $('.upgrade-notice .close-btn').on('click', function() {
            $(this).parents('.upgrade-notice').remove();
        });


        //  Order page sticky sidebar
        // ------------------------------------------------------------------------//
        

        // Only stick the sidebar to the window when the viewport is wider than 945px...
        var checkSticky = function() {
            if ($(window).width() > 945) {
                $('.sidebar-nav').sticky({
                    topSpacing: 10,
                    responsiveWidth: true,
                    bottomSpacing: $('.site-footer').outerHeight() + $('.copyright').outerHeight() + 20
                });

            // ...otherwise, take the sidebar nav out of the sticky wrapper, and put it
            // back in the DOM like normal, and remove the sticky wrapper.
            } else if ($('.sticky-wrapper').length) {
                var $parent = $('.sticky-wrapper').parent();
                var innerHTML = $('.sticky-wrapper').html();

                $parent.prepend(innerHTML);
                $('.sidebar-nav').removeAttr('style');
                $('.sticky-wrapper').remove();
            }
        }

        checkSticky();
        $(window).on('resize', checkSticky);
        
        

        //  Order Form "Jump to a Section" for mobile viewports
        // ------------------------------------------------------------------------//

        // jump to section on select
        $('.js-menu-section-select').on('change', function() {
            var val = $(this).val();

            if (val !== '') {
                window.location.hash = $(this).val();
            }
        });

        // show the menu after inline menu scrolls out of view
        $(window).on('scroll', function() {
            var $sidebarNav = $('.sidebar-nav');
            var menuBottom = $sidebarNav.offset().top + $sidebarNav.outerHeight();
            
            if ($(window).scrollTop() > menuBottom) {
                $('.mobile-page-nav').not('.visible').addClass('visible');
            } else {
                $('.mobile-page-nav.visible').removeClass('visible');
            }
        });

       
        
        //  Online Order Form
        // ------------------------------------------------------------------------//

        // Show/hide item drawer
        $('.form-group.item input[type="checkbox"]').on('change', function() {
            $(this).parents('.form-group').find('.form-group-drawer').toggleClass('visible');
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

                if(!$this.parents('.form-group-drawer').hasClass('visible')) {
                    $this.remove();
                }
            });

            // Submit the form once all the empty fields are cleaned up
            $(this)[0].submit();
        });

    });
})(window, jQuery);