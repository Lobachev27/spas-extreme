/*Хедер*/

$(document).ready(function () {
  $(".header__menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header").removeClass("active");
      $(".header-mobile").removeClass("active");
      $("body").removeClass("ov-hid");
    } else {
      $(".header__menu").addClass("active");
      $(".header").addClass("active");
      $(".header-mobile").addClass("active");
      $("body").addClass("ov-hid");
    }
  });
});

/*Слайдер город/дом/природа*/

$(document).ready(function () {
  swiperIntro = new Swiper(".intro__slider .swiper-container", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    simulateTouch: false,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }
  });
});

/*Слайдер со службами*/

$(document).ready(function () {
  swiperService = new Swiper(".service__slider .swiper-container", {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    simulateTouch: false,
    navigation: {
      nextEl: ".service__slider .swiper-button-next",
      prevEl: ".service__slider .swiper-button-prev",
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  });
});

/*Слайдер юные герои*/

$(document).ready(function () {
  swiperHero = new Swiper(".hero__slider .swiper-container", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    pagination: {
      el: ".hero__slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  });
});

/*Слайдер творчество*/

$(document).ready(function () {
  swiperCreation = new Swiper(".creation__slider .swiper-container", {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    pagination: {
      el: ".creation__slider .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 60,
      },
      1620: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 60,
      },
      1920: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 60,
      },
      2220: {
        slidesPerView: 7,
        slidesPerGroup: 7,
        spaceBetween: 60,
      },
      2520: {
        slidesPerView: 8,
        slidesPerGroup: 8,
        spaceBetween: 60,
      },
    }
  });
});

/*Слайдер галлерея на детальных страницах*/

$(document).ready(function () {
  swiperCreation = new Swiper(".gallery .swiper-container", {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    pagination: {
      el: ".gallery .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }
  });
});

/*Табы новости/мероприятия*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.news__container');
    tabContainers.hide().filter(':first').show();
    $('.news__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.news__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();

    var url_string = window.location.href;
    var id = url_string.split('id=')[1];
    if (id === "events") {
      $('.news__tab').filter(':last').click();
    }
  });

});

/*Input type file*/

$(document).ready(function() {

  (function() {

    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
      isIE = /msie/i.test( navigator.userAgent );

    $.fn.customFile = function() {

      return this.each(function() {

        var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
          $wrap = $('<div class="file-upload-wrapper">'),
          $input = $('<div class="file-upload-input"></div>'),
          // Button that will be used in non-IE browsers
          $button = $('<button type="button" class="btn btn-file file-upload-button">Выбрать файл</button>'),
          // Hack for IE
          $label = $('<label class="file-upload-button" for="'+ $file[0].id +'">Выбрать файл</label>');

        // Hide by shifting to the left so we
        // can still trigger events
        $file.css({
          position: 'absolute'
        });

        $wrap.insertAfter( $file )
          .append( $file, $input, ( isIE ? $label : $button ) );

        // Prevent focus
        $file.attr('tabIndex', -1);
        $button.attr('tabIndex', -1);

        $button.click(function () {
          $file.focus().click(); // Open dialog
        });

        $file.change(function() {

          var files = [], fileArr, filename;

          // If multiple is supported then extract
          // all filenames from the file array
          if ( multipleSupport ) {
            fileArr = $file[0].files;
            for ( var i = 0, len = fileArr.length; i < len; i++ ) {
              files.push( fileArr[i].name );
            }
            filename = files.join(', ');

            // If not supported then just take the value
            // and remove the path to just show the filename
          } else {
            filename = $file.val().split('\\').pop();
          }

          $input.text( filename ) // Set the value
            .attr('title', filename) // Show filename in title tootlip
            .focus(); // Regain focus

        });

        $input.on({
          blur: function() { $file.trigger('blur'); },
          keydown: function( e ) {
            if ( e.which === 13 ) { // Enter
              if ( !isIE ) { $file.trigger('click'); }
            } else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
              // On some browsers the value is read-only
              // with this trick we remove the old input and add
              // a clean clone with all the original events attached
              $file.replaceWith( $file = $file.clone( true ) );
              $file.trigger('change');
              $input.val('');
            } else if ( e.which === 9 ){ // TAB
              return;
            } else { // All other keys
              return false;
            }
          }
        });

      });

    };

    // Old browser fallback
    if ( !multipleSupport ) {
      $( document ).on('change', 'input.customfile', function() {

        var $this = $(this),
          // Create a unique ID so we
          // can attach the label to the input
          uniqId = 'customfile_'+ (new Date()).getTime(),
          $wrap = $this.parent(),

          // Filter empty input
          $inputs = $wrap.siblings().find('.file-upload-input')
            .filter(function(){ return !this.value }),

          $file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

        // 1ms timeout so it runs after all other events
        // that modify the value have triggered
        setTimeout(function() {
          // Add a new input
          if ( $this.val() ) {
            // Check for empty fields to prevent
            // creating new inputs when changing files
            if ( !$inputs.length ) {
              $wrap.after( $file );
              $file.customFile();
            }
            // Remove and reorganize inputs
          } else {
            $inputs.parent().remove();
            // Move the input so it's always last on the list
            $wrap.appendTo( $wrap.parent() );
            $wrap.find('input').focus();
          }
        }, 1);

      });
    }

  }());

  $('input[type=file]').customFile();

});

/*Модальные окна*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.popup__close').click(function(){
    $(this).closest('.popup').removeClass('show');
    $('body').removeClass('ov-hid');
  });

  $(document).mouseup(function (e){
    var el = $(".popup__wrapper");
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      el.closest('.popup').removeClass('show');
      $('body').removeClass('ov-hid');
    }
  });
});

/*Табы звезда спасения*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.salvation__container');
    tabContainers.hide().filter(':first').show();
    $('.salvation__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.salvation__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Табы детальная темы*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.themes-detail__container');
    tabContainers.hide().filter(':first').show();
    $('.themes-detail__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.themes-detail__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Слайдер темы на детальной странице*/

$(document).ready(function () {
  swiperTheme = new Swiper(".themes-detail__slider .swiper-container", {
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    pagination: {
      el: ".themes-detail__slider .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
});

/*Ссылки фильтрации в бибблиотеке*/

$(document).ready(function() {
  $(".library__nav-link").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

/*Видео*/

$(document).ready(function() {
  $(".video-play-icon").on("click", function(e) {
    var video = jQuery(this).parents(".video-custom-play").find("video")[0];
    if (video.paused === false) {
      video.pause();
      $(this).parents(".video-custom-play").removeClass("is-video-playing");
    } else {
      video.play();
      $(this).parents(".video-custom-play").addClass("is-video-playing");
    }
    return false;
  });
});