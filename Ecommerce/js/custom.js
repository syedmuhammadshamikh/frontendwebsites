$('.subbanner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
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
          slidesToScroll: 1,
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


  $('.shopPageSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:'<i class="fa fa-solid fa-angle-left left_arrow"></i>',
    nextArrow:'<i class="fa fa-solid fa-angle-right right_arrow"></i>',
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
          slidesToShow: 2,
          slidesToScroll: 2
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

  $('.trendingitemsSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:'<i class="fa-solid fa-caret-left leftCaret"></i>',
    nextArrow:'<i class="fa-solid fa-caret-right rightCaret"></i></i>',
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
          slidesToShow: 2,
          slidesToScroll: 2
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

  $('.bigSliderImg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow:'<i class="fa-solid fa-caret-left left"></i>',
    nextArrow:'<i class="fa-solid fa-caret-right right"></i></i>',
    verticalSwiping: false,
    centerMode: false,
    asNavFor: '.smallSliderImgs'
  });
  $('.smallSliderImgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.bigSliderImg',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    centerMode: false,
  });