// INDEX PAGE SLIDER

$('.productsSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: false,
  dots:true,
  speed:800,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa fa-solid fa-arrow-left left_arrow"></i>',
  nextArrow:'<i class="fa fa-solid fa-arrow-right right_arrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// $('.productsSlider').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });


$('.cardsSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: false,
  dots:true,
  speed:800,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa fa-solid fa-angle-left left_Arrow"></i>',
  nextArrow:'<i class="fa fa-solid fa-angle-right right_Arrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// SHOPPING PAGE SLIDER

$('.ShoppingPageSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots:true,
  speed:800,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa fa-solid fa-angle-left left_Shopping"></i>',
  nextArrow:'<i class="fa fa-solid fa-angle-right right_Shopping"></i>',
});


// PRODUCTS PAGE SLIDER

$('.ProductPageSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.smallImgsSlider'
});
$('.smallImgsSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.ProductPageSlider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
});

// PRODUCT 2
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}