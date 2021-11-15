import $ from "jquery"


var windowwidth;



        
        if ((windowwidth = $(window).width()) <= 1040) {
            var ncards = $(".cards li").length;
            rotate = 0, number = 45 * -ncards, slide = 0
        }
        if ((windowwidth = $(window).width()) >= 1025) {
            ncards = $(".cards li").length;
            rotate = 0, number = 54 * -ncards, slide = 0
        }
        var stateManager = function () {
            var t = null,
                a = function () {
                    $("body").width() < 768 ? ("mobile" !== t && e(), i()) : ("desktop" !== t && n(), r())
                },
                e = function () {
                    t = "mobile"
                },
                n = function () {
                    t = "desktop"
                },
                i = function () { },
                r = function () { };
            return {
                init: function () {
                    a(), $(window).on("resize", a)
                }
            }
        }();

        function move(t) {
            slide += t, $(".cards").css("transform", "translateZ(" + -number + "px) rotateY(" + 360 * slide / ncards + "deg)")
        }
        stateManager.init(), $(".cards").css("transform", "translateZ(" + -number + "px)"), $(".cards li").each(function (t) {
            $(this).css("transform", "rotateY(" + 360 * -t / ncards + "deg) translateZ(" + number + "px)"), $(this).find(".corner").html(t + 1)
        }), $(".slide-left").on("click", function () {
            move(-1), deductCarouselProgress()
        }), $(".slide-right").on("click", function () {
            move(1), addCarouselProgress()
        });
        var pbVal = 1,
            prevpbVal = 0,
            nextpbVal = 0;

        function addCarouselProgress() {
            $(".section-container-8 .text-content.next-active").addClass('move-right');
            $(".section-container-8 .text-content.top-active").addClass('move-right');
            $(".cards-cta-btn").removeClass("onactive"), (pbVal += 1) > 14 && (pbVal = 1), pbVal < 1 && (pbVal = 14), (prevpbVal = pbVal - 1) >= 15 && (prevpbVal = 1), prevpbVal <= 0 && (prevpbVal = 14), (nextpbVal = pbVal + 1) > 18 && (nextpbVal = 1), nextpbVal <= 0 && (nextpbVal = 14), $(".cards-cta-btn-" + prevpbVal).addClass("onactive"), $(".cards-cta-btn-" + pbVal).addClass("onactive"), $(".cards-cta-btn-" + nextpbVal).addClass("onactive");
            var t = $(".img-container-" + pbVal).attr("data-case"),
                a = $(".img-container-" + pbVal).attr("data-sub-title"),
                e = $(".img-container-" + pbVal).attr("data-sub-title-link"),
                n = $(".img-container-" + pbVal).attr("data-description");
            $(".section-container-8 .text-content.next-active .categoryTitle").html(t),
                $(".section-container-8 .text-content.next-active .SubsectionTitleTrigger").attr("aria-label", a),
                $(".section-container-8 .text-content.next-active .SubsectionTitleTrigger").attr("data-analytics-link-name", a),
                $(".zoom .explore-container .cards-cta-btn-container").attr("aria-label", a),
                $(".zoom .explore-container .cards-cta-btn-container").attr("data-analytics-link-name", a),
                $(".section-container-8 .text-content.next-active .SubsectionTitleTrigger").attr("href", e),
                $(".section-container-8 .carousel .explore-container .cards-cta-btn-container").attr("href", e),
                $(".section-container-8 .text-content.next-active .SubsectionTitle").html(a),
                $(".section-container-8 .text-content.next-active .Subsectiondescription").html(n),
                $(".progress-bar").css("width", 16.6 * pbVal + "%"),
                $(".progress-bar-label").html(pbVal + "/14");

            setTimeout(function () {
                $(".section-container-8 .text-content.top-active .categoryTitle").html(t),
                    $(".section-container-8 .text-content.top-active .SubsectionTitleTrigger").attr("aria-label", a),
                    $(".section-container-8 .text-content.top-active .SubsectionTitleTrigger").attr("data-analytics-link-name", a),
                    $(".section-container-8 .text-content.top-active .SubsectionTitleTrigger").attr("href", e),
                    $(".section-container-8 .text-content.top-active .SubsectionTitle").html(a),
                    $(".section-container-8 .text-content.top-active .Subsectiondescription").html(n),
                    $(".progress-bar").css("width", 16.6 * pbVal + "%"),
                    $(".progress-bar-label").html(pbVal + "/14");
                $(".section-container-8 .text-content.next-active").removeClass('move-right');
                $(".section-container-8 .text-content.top-active").removeClass('move-right');
            }, 700);
        }

        function deductCarouselProgress() {
            $(".section-container-8 .text-content.next-active").addClass('move');
            $(".section-container-8 .text-content.top-active").addClass('move');
            $(".cards-cta-btn").removeClass("onactive"), (pbVal -= 1) > 14 && (pbVal = 1), pbVal < 1 && (pbVal = 14), (prevpbVal = pbVal - 1) >= 15 && (prevpbVal = 1), prevpbVal <= 0 && (prevpbVal = 14), (nextpbVal = pbVal + 1) >= 15 && (nextpbVal = 1), nextpbVal <= 0 && (nextpbVal = 14), $(".cards-cta-btn-" + prevpbVal).addClass("onactive "), $(".cards-cta-btn-" + pbVal).addClass("onactive"), $(".cards-cta-btn-" + nextpbVal).addClass("onactive");
            var t = $(".img-container-" + pbVal).attr("data-case"),
                a = $(".img-container-" + pbVal).attr("data-sub-title"),
                e = $(".img-container-" + pbVal).attr("data-sub-title-link"),
                n = $(".img-container-" + pbVal).attr("data-description");
            $(".section-container-8 .text-content.next-active .categoryTitle").html(t),
                $(".section-container-8 .text-content.next-active .SubsectionTitleTrigger").attr("aria-label", a),
                $(".section-container-8 .text-content.next-active .SubsectionTitleTrigger").attr("data-analytics-link-name", a),
                $(".zoom .explore-container .cards-cta-btn-container").attr("aria-label", a),
                $(".zoom .explore-container .cards-cta-btn-container").attr("data-analytics-link-name", a),
                $(".section-container-8 .text-content.next-active .SubsectionTitleTrigger").attr("href", e),
                $(".section-container-8 .carousel .explore-container .cards-cta-btn-container").attr("href", e),
                $(".section-container-8 .text-content.next-active .SubsectionTitle").html(a),
                $(".section-container-8 .text-content.next-active .Subsectiondescription").html(n),
                $(".progress-bar").css("width", 16.6 * pbVal + "%"),
                $(".progress-bar-label").html(pbVal + "/14");

            setTimeout(function () {
                $(".section-container-8 .text-content.top-active .categoryTitle").html(t),
                    $(".section-container-8 .text-content.top-active .SubsectionTitleTrigger").attr("aria-label", a),
                    $(".section-container-8 .text-content.top-active .SubsectionTitleTrigger").attr("data-analytics-link-name", a),
                    $(".section-container-8 .text-content.top-active .SubsectionTitleTrigger").attr("href", e),
                    $(".section-container-8 .carousel .explore-container .cards-cta-btn-container").attr("href", e),
                    $(".section-container-8 .text-content.top-active .SubsectionTitle").html(a),
                    $(".section-container-8 .text-content.top-active .Subsectiondescription").html(n),
                    $(".progress-bar").css("width", 16.6 * pbVal + "%"),
                    $(".progress-bar-label").html(pbVal + "/14");
                $(".section-container-8 .text-content.next-active").removeClass('move');
                $(".section-container-8 .text-content.top-active").removeClass('move');
            }, 700);
        }

        $(".carousel .zoom .explore-container").on("click", function () {
            $(".cards-cta-btn-container").addClass("isclicked");
            //alert($(this).attr("data-href"));
            //$(".carousel-text-content.top-active a.SubsectionTitleTrigger").trigger("click");
            setTimeout(function () {
                window.location.href = $(".carousel .zoom .explore-container .cards-cta-btn-container").attr("href");
            }, 500);
        });

        $(".carousel .zoom .explore-container .cards-cta-btn-container").on("click", function () {
            $(".cards-cta-btn-container").addClass("isclicked");
            //alert("cards-cta-btn-container");
            //$(".carousel-text-content.top-active a.SubsectionTitleTrigger").trigger("click");
            setTimeout(function () {
                window.location.href = $(".carousel .zoom .explore-container .cards-cta-btn-container").attr("href");
            }, 500);
        });
       
    var ww = $(window).width();
    var platformStatus;
    var browser = 'others';
   

    // init
   

    $(function () { // Section 1

        //if(browser == 'others'){
       

        setTimeout(function () { $("a.carousel-control-next").addClass("isactive"); $("a.carousel-control-prev").addClass("isactive"); }, 3000);

        $('').on('touchstart', function (event) {
            const xClick = event.originalEvent.touches[0].pageX;
            $(this).one('touchmove', function (event) {
                const xMove = event.originalEvent.touches[0].pageX;
                const sensitivityInPx = 5;

                if (Math.floor(xClick - xMove) > sensitivityInPx) {
                    $(this).carousel('next');
                }
                else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                    $(this).carousel('prev');
                }
            });
            $(this).on('touchend', function () {
                $(this).off('touchmove');
            });
        });

        $(".img-boxes").on("click", function () {
            var kani = $(this);
            $(this).addClass("isactive");
            $(".sc6-cta-btn-1").css("opacity", "0");
            setTimeout(function () {
                kani.removeClass("isactive");
                $(".sc6-cta-btn-1").css("opacity", "1");
            }, 500);
        });

        $(".img-container").on("click", function () {
            var kani = $(this);
            $(this).addClass("isactive");
            $(".follow-cta-btn").removeClass("isactive");
            setTimeout(function () {
                kani.removeClass("isactive");
                $(".follow-cta-btn").addClass("isactive");
            }, 500);
        });



        $(".read-it-btn").on("click", function () {
            $(this).addClass("active");
            $('.bell-container').addClass("hide");
            $(".see-it-btn").removeClass("active");
            $(".mobile-view-options").addClass("isactive");
            $(".read-it-container").addClass("isactive");
            $(".section-container").addClass("inactive");
            //$(".section-container").addClass("index");
            $(".scrollmagic-pin-spacer").addClass("inactive");
            setTimeout(function () {
                $(".section-container").addClass("index");
            }, 300);
        });

        $(".see-it-btn").on("click", function () {
            $(this).addClass("active");
            $('.bell-container').removeClass("hide");
            $(".read-it-btn").removeClass("active");
            $(".mobile-view-options").removeClass("isactive");
            $(".read-it-container").removeClass("isactive");
            $(".section-container").removeClass("inactive");
            $(".scrollmagic-pin-spacer").removeClass("inactive");

            setTimeout(function () {
                $([document.documentElement, document.body]).animate({ scrollTop: $('.section-container-3').offset().top }, 10);
            }, 5);
            setTimeout(function () {
                $([document.documentElement, document.body]).animate({ scrollTop: 0 }, 10);
            }, 5);

            setTimeout(function () {
                $(".section-container").removeClass("index");
            }, 300);
        });

        $(".item .scroll-down").on("click", function () {
            $([document.documentElement, document.body]).animate({ scrollTop: $('.section-container-1b').offset().top - 100 }, 500);
        });

        $(".item .arrow-i-down").on("click", function () {
            $([document.documentElement, document.body]).animate({ scrollTop: $('.section-container-2a').offset().top - 100 }, 500);
        });


        if (ww > 767) {
            $(".volume").on("click", function () {
                if ($(this).hasClass("on")) {
                    var vid = $(this).attr("data-vid");
                    $("video.hidden-xs.hidden-sm." + vid).prop('muted', true);
                    $(this).removeClass("on");
                    $(".volume").attr("aria-label", "sound off");
                    $(".volume .volume-on").removeClass("isactive");
                    $(".volume .volume-off").addClass("isactive");
                } else {
                    var vid = $(this).attr("data-vid");
                    $("video.hidden-xs.hidden-sm." + vid).prop('muted', false);
                    $(this).addClass("on");
                    $(".volume").attr("aria-label", "sound on");
                    $(".volume .volume-on").addClass("isactive");
                    $(".volume .volume-off").removeClass("isactive");
                }
            });

            $(".option-replay").on("click", function () {
                var vid = $(this).attr("data-vid");
                var video = $("video.hidden-xs.hidden-sm." + vid).get(0);
                video.pause();
                video.currentTime = 0;
                video.play();
                $(this).addClass("isclicked");
                setTimeout(function () { $(".option-replay").removeClass("isclicked"); }, 400);
            });
        } else {
            $(".volume").on("click", function () {
                if ($(this).hasClass("on")) {
                    var vid = $(this).attr("data-vid");
                    $("video.hidden-lg.hidden-md.impact-vid").prop('muted', true);
                    $(this).removeClass("on");
                    $(".volume").attr("aria-label", "sound off");
                    $(".volume .volume-on").removeClass("isactive");
                    $(".volume .volume-off").addClass("isactive");
                } else {
                    var vid = $(this).attr("data-vid");
                    $("video.hidden-lg.hidden-md.impact-vid").prop('muted', false);
                    $(this).addClass("on");
                    $(".volume").attr("aria-label", "sound on");
                    $(".volume .volume-on").addClass("isactive");
                    $(".volume .volume-off").removeClass("isactive");
                }
            });

            $(".option-replay").on("click", function () {
                var vid = $(this).attr("data-vid");
                var video = $("video.hidden-lg.hidden-md.impact-vid").get(0);
                video.pause();
                video.currentTime = 0;
                video.play();
                $(this).addClass("isclicked");
                setTimeout(function () { $(".option-replay").removeClass("isclicked"); }, 400);
            });
        }

        $(".section-container-8 .img-container").ready(function () {
            var cse = $(this).attr("data-case");
            var subtitle = $(this).attr("data-sub-title");
            var subtitlelink = $(this).attr("data-sub-title-link");
            var desc = $(this).attr("data-description");
            $(".section-container-8 .text-content .categoryTitle").html(cse);
            $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("aria-label", subtitle);
            $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("data-analytics-link-name", subtitle);
            $(".section-container-8 .text-content .SubsectionTitleTrigger").attr("href", subtitlelink);
            $(".section-container-8 .carousel .explore-container").attr("data-href", subtitlelink);
            $(".section-container-8 .text-content .SubsectionTitle").html(subtitle);
            $(".section-container-8 .text-content .Subsectiondescription").html(desc);
        });

        /** Initiate Text Animation**/
        toggleClassActive(".section-container-1 .panel-1 .title-1");

        /** Mouse Cursor Movement**/
        $(window).on('mousemove', function (e) {
            if ($('.section-container-3 .panel-1:hover').length != 0) {
                var xPos = e.pageX;
                var yPos = e.pageY;
                if ($('.section-container-3 .panel-1 .img-container:hover').length != 0) {
                    $('.follow-cta-btn').addClass("isactive");
                } else {
                    $('.follow-cta-btn').removeClass("isactive");
                }
                var ySc3 = $(".section-container-3 .panel-1").offset().top;
                var xSc3 = $(".section-container-3 .panel-1").offset().left;
                //console.log(xPos, yPos);
                $('.follow-cta-btn').css({
                    'top': yPos - ySc3,
                    'left': xPos - xSc3
                });
            }

            if ($('.sc-6:hover').length != 0) {
                var xPos = e.pageX;
                var yPos = e.pageY;
                var ySc3 = $(".sc-6").offset().top;
                var xSc3 = $(".sc-6").offset().left;
                // console.log(xPos, yPos);
                $('.sc6-cta-btn-1').css({
                    'top': yPos - ySc3,
                    'left': xPos - xSc3
                });
            }

            if ($('.carousel .zoom .explore-container:hover').length != 0) {
                var xPos = e.pageX;
                var yPos = e.pageY;
                var ySc3 = $(".carousel .zoom .explore-container").offset().top;
                var xSc3 = $(".carousel .zoom .explore-container").offset().left;
                // console.log(xPos, yPos);
                $('.cards-cta-btn-container').css({
                    'top': yPos - ySc3 - 30,
                    'left': xPos - xSc3 - 30
                });
            }

            if ($('.cards:hover').length != 0) {
                var xPos = e.pageX;
                var yPos = e.pageY;
                var ySc3 = 0;
                var xSc3 = 0;

                if ($('.img-container-1:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(1)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(1)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-1').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-2:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(2)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(2)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-2').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-3:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(3)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(3)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-3').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-4:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(4)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(4)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-4').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-5:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(5)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(5)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-5').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-6:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(6)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(6)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-6').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-7:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(7)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(7)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-7').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-8:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(8)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(8)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-8').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-9:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(9)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(9)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-9').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-10:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(10)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(10)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-10').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-11:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(11)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(11)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-11').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }

                if ($('.img-container-12:hover').length != 0) {
                    ySc3 = $(".cards .img-container:nth-child(12)").offset().top;
                    xSc3 = $(".cards .img-container:nth-child(12)").offset().left;
                    // console.log(xPos, yPos);
                    $('.cards .cards-cta-btn-12').css({
                        'top': yPos - ySc3 - 10,
                        'left': xPos - xSc3 - 10
                    });
                }
            }

        });

       
       
        
    

        
     

        // $('.cta-more-marquee-3').on('click',function(){
        // 	var anchor = $('#block-section-3b').offset();
        // 	$([document.documentElement, document.body]).animate({ scrollTop: anchor.top+5 }, 1500);
        // 	return false;
        // });

       
        // $('.cta-more-marquee-4').on('click',function(){
        // var anchor = $('.section-container-9a').offset();
        // $([document.documentElement, document.body]).animate({ scrollTop: anchor.top-70 }, 1500);
        // return false;
        // });

        $('.nav-bar-menu-5').on('click', function () {
            var anchor = $('.section-container-9a').offset();
            $([document.documentElement, document.body]).animate({ scrollTop: anchor.top - 70 }, 1500);
            return false;
        });

        //Swipe triggers
        if (ww <= 768) {
            $(".carousel .zoom").onSwipe(function (results) {
                if (results.right == true) {
                    console.log("Right")
                    $(".slide-left").trigger("click");
                }
                if (results.left == true) {
                    console.log("Left")
                    $(".slide-right").trigger("click");
                }
            });

            var slideTo = 0;
            $(" .carousel-inner").onSwipe(function (results) {

                if (results.right == true) {
                    slideTo--;
                    if (slideTo <= 0) {
                        slideTo = 0;
                    }
                    $(".carousel-indicators li[data-slide-to='" + slideTo + "']").trigger("click");
                }
                if (results.left == true) {
                    slideTo++;
                    if (slideTo >= 3) {
                        slideTo = 3;
                    }
                    $(".carousel-indicators li[data-slide-to='" + slideTo + "']").trigger("click");
                }
            });
        } else {
            $('.bell-container .bell').on('click', function () {
                if ($('.bell-container').hasClass("isactive")) {
                    $('.bell-container').removeClass("isactive");
                    $('.bell-container').addClass("isclosed");
                } else {
                    $('.bell-container').addClass("isactive");
                }
            });

            $('.bell-container.isactive .bell').on('mouseover', function () {
                if ($('.bell-container').hasClass("isclosed")) {
                } else {
                    $('.bell-container').addClass("isactive");
                }
            });

            $('.bell-container.isactive .bell').on('mouseleave', function () {
                $('.bell-container').removeClass("isclosed");
            });

            $('.bell-container-static .bell').on('click', function () {
                if ($('.bell-container-static').hasClass("isactive")) {
                    $('.bell-container-static').removeClass("isactive");
                    $('.bell-container-static').addClass("isclosed");
                } else {
                    $('.bell-container-static').addClass("isactive");
                }
            });

            $('.bell-container-static.isactive .bell').on('mouseover', function () {
                if ($('.bell-container-static').hasClass("isclosed")) {
                } else {
                    $('.bell-container-static').addClass("isactive");
                }
            });

            $('.bell-container.isactive .bell').on('mouseleave', function () {
                $('.bell-container-static').removeClass("isclosed");
            });
        }


    });

   

   
    function toggleClassActive(_target) {
        if ($(_target).hasClass("isactive")) {
            $(_target).removeClass("isactive");
        } else {
            $(_target).addClass("isactive");
        }
    }

    function addClassActive(_target) {
        $(_target).addClass("isactive");
    }

    function removeClassActive(_target) {
        $(_target).removeClass("isactive");
    }


    function addClassPlaying(_target) {
        $(_target).addClass("playing");
    }

    function removeClassPlaying(_target) {
        $(_target).removeClass("playing");
    }

    function playVideo(_target) {
        $(_target).get(0).currentTime = 0;
        $(_target).get(0).play();

        // $(_target).get(0).onended = function(e) {
        // $(_target).get(0).currentTime = 0;
        // };
    }


    


