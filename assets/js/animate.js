jQuery(function ($) {
    var doAnimations = function () {
        var offset = $(window).scrollTop() + $(window).height(),
            $anims = $('.anim');
        if ($anims.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        $anims.each(function (i) {
            var $anim = $(this);
            if (($anim.offset().top + $anim.height() - 20) < offset) {
                $anim.removeClass('anim').addClass('animated');
            }
        });
    };
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});