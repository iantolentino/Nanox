$(function() {
  if($(window).scrollTop() > 150) {
      $(".header").addClass("scroll-active");
      $("#mobileLogo").addClass("visible");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("scroll-active");
    $("#mobileLogo").removeClass("visible");
  }
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".header").addClass("scroll-active");
            $("#mobileLogo").addClass("visible");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("scroll-active");
           $("#mobileLogo").removeClass("visible");
        }
    });
});

var swiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

$(document).ready(function(){
  $("#btnScrollUp").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

$("#btnMobileHeader").click(function(){
  // $("#mobileDisplay").toggleClass("active");
  // $(".header").addClass("scroll-active");
  // $("body").toggleClass("disable-scroll");

  if($(window).scrollTop() < 150) {
    $("#mobileDisplay").toggleClass("active");
    $(".header").toggleClass("scroll-active");
    $("body").toggleClass("disable-scroll");
  } else {
    $("#mobileDisplay").toggleClass("active");
    $(".header").addClass("scroll-active");
    $("body").toggleClass("disable-scroll");
  }

  // $("#mobileLogo").toggleClass("visible");
});

$(".header-mobile-link").click(function(){
  $("body").toggleClass("disable-scroll");
});

$(".hide-click").click(function(){
  $("#mobileDisplay").toggleClass("active");
  // $("#mobileLogo").toggleClass("visible");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 90; // Adjust this value as needed
      window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
      });
  });
});