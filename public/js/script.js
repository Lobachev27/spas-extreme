$(document).ready(function(){$(".header__menu").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".header").removeClass("active"),$(".header-mobile").removeClass("active"),$("body").removeClass("ov-hid")):($(".header__menu").addClass("active"),$(".header").addClass("active"),$(".header-mobile").addClass("active"),$("body").addClass("ov-hid"))})}),$(document).ready(function(){swiperIntro=new Swiper(".intro__slider .swiper-container",{loop:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,centeredSlides:!0,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,watchOverflow:!0,simulateTouch:!1,autoplay:{delay:3e3,stopOnLastSlide:!0,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}})}),$(document).ready(function(){swiperService=new Swiper(".service__slider .swiper-container",{loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,watchOverflow:!0,simulateTouch:!1,navigation:{nextEl:".service__slider .swiper-button-next",prevEl:".service__slider .swiper-button-prev"},breakpoints:{540:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5,spaceBetween:30}}})}),$(document).ready(function(){swiperHero=new Swiper(".hero__slider .swiper-container",{loop:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,watchOverflow:!0,pagination:{el:".hero__slider .swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2},992:{slidesPerView:3,slidesPerGroup:3}}})}),$(document).ready(function(){swiperCreation=new Swiper(".creation__slider .swiper-container",{loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,watchOverflow:!0,pagination:{el:".creation__slider .swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{540:{slidesPerView:2,slidesPerGroup:2},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:40},992:{slidesPerView:3,slidesPerGroup:3},1200:{slidesPerView:4,slidesPerGroup:4,spaceBetween:60},1620:{slidesPerView:5,slidesPerGroup:5,spaceBetween:60},1920:{slidesPerView:6,slidesPerGroup:6,spaceBetween:60},2220:{slidesPerView:7,slidesPerGroup:7,spaceBetween:60},2520:{slidesPerView:8,slidesPerGroup:8,spaceBetween:60}}})}),$(document).ready(function(){swiperCreation=new Swiper(".gallery .swiper-container",{loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:20,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,watchOverflow:!0,pagination:{el:".gallery .swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{540:{slidesPerView:2,slidesPerGroup:2},768:{slidesPerView:2,slidesPerGroup:2}}})}),$(document).ready(function(){$(function(){var e=$(".news__container");e.hide().filter(":first").show(),$(".news__tab").click(function(){return e.hide(),e.filter(this.hash).show(),$(".news__tab").removeClass("active"),$(this).addClass("active"),!1}).filter(":first").click(),"events"===window.location.href.split("id=")[1]&&$(".news__tab").filter(":last").click()})}),$(document).ready(function(){var n,t;n=void 0!==$("<input/>")[0].multiple,t=/msie/i.test(navigator.userAgent),$.fn.customFile=function(){return this.each(function(){var a=$(this).addClass("custom-file-upload-hidden"),e=$('<div class="file-upload-wrapper">'),o=$('<div class="file-upload-input"></div>'),i=$('<button type="button" class="btn btn-file file-upload-button">Выбрать файл</button>'),s=$('<label class="file-upload-button" for="'+a[0].id+'">Выбрать файл</label>');a.css({position:"absolute"}),e.insertAfter(a).append(a,o,t?s:i),a.attr("tabIndex",-1),i.attr("tabIndex",-1),i.click(function(){a.focus().click()}),a.change(function(){var e,i=[];if(n){for(var s,t=0,r=(s=a[0].files).length;t<r;t++)i.push(s[t].name);e=i.join(", ")}else e=a.val().split("\\").pop();o.text(e).attr("title",e).focus()}),o.on({blur:function(){a.trigger("blur")},keydown:function(e){if(13===e.which)t||a.trigger("click");else if(8===e.which||46===e.which)a.replaceWith(a=a.clone(!0)),a.trigger("change"),o.val("");else if(9!==e.which)return!1}})})},n||$(document).on("change","input.customfile",function(){var e=$(this),i="customfile_"+(new Date).getTime(),s=e.parent(),t=s.siblings().find(".file-upload-input").filter(function(){return!this.value}),r=$('<input type="file" id="'+i+'" name="'+e.attr("name")+'"/>');setTimeout(function(){e.val()?t.length||(s.after(r),r.customFile()):(t.parent().remove(),s.appendTo(s.parent()),s.find("input").focus())},1)}),$("input[type=file]").customFile()}),$(document).ready(function(){$(".js-popup").click(function(e){e.preventDefault();e=$(this).attr("href");$(e).addClass("show"),$("body").addClass("ov-hid")}),$(".popup__close").click(function(){$(this).closest(".popup").removeClass("show"),$("body").removeClass("ov-hid"),$(".popup-video__iframe").attr("src","")}),$(document).mouseup(function(e){var i=$(".popup__wrapper");i.is(e.target)||0!==i.has(e.target).length||(i.closest(".popup").removeClass("show"),$("body").removeClass("ov-hid"),$(".popup-video__iframe").attr("src",""))})}),$(function(){var e;$(".video-iframe").on("click",".btn-play",function(){console.log($(this).attr("data-src")),e=$(this).data("src"),$(".popup-video__iframe").attr("src",e)})}),$(document).ready(function(){$(function(){var e=$(".salvation__container");e.hide().filter(":first").show(),$(".salvation__tab").click(function(){return e.hide(),e.filter(this.hash).show(),$(".salvation__tab").removeClass("active"),$(this).addClass("active"),!1}).filter(":first").click()})}),$(document).ready(function(){$(function(){var e=$(".themes-detail__container");e.hide().filter(":first").show(),$(".themes-detail__tab").click(function(){return e.hide(),e.filter(this.hash).show(),$(".themes-detail__tab").removeClass("active"),$(this).addClass("active"),!1}).filter(":first").click()})}),$(document).ready(function(){swiperTheme=new Swiper(".themes-detail__slider .swiper-container",{loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:40,autoHeight:!0,grabCursor:!0,watchSlidesProgress:!0,watchSlidesVisibility:!0,watchOverflow:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,pagination:{el:".themes-detail__slider .swiper-pagination",dynamicBullets:!0,clickable:!0}})}),$(document).ready(function(){$(".library__nav-link").on("click",function(){$(this).addClass("active").siblings().removeClass("active")})}),$(document).ready(function(){$(".video-play-icon").on("click",function(e){var i=jQuery(this).parents(".video-custom-play").find("video")[0];return!1===i.paused?(i.pause(),$(this).parents(".video-custom-play").removeClass("is-video-playing")):(i.play(),$(this).parents(".video-custom-play").addClass("is-video-playing")),!1})});