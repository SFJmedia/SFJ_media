/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//jQuery(document).on('scroll', function () {
//    var scroll = jQuery(document).scrollTop();
//    if (scroll >= 200) {
//        jQuery(".header_container").addClass("header_container_scroll");
//    } else {
//        jQuery(".header_container").removeClass("header_container_scroll");
//    }
//});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});
$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 50);
        }
    }
    $(".c-section4").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });
    function startCount() {
        $(".c-section4").each(function () {
            count($(this));
        });
    }
    ;
    $(window).scroll(function () {
        startCount();
    });
    startCount();
});
