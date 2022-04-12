    $(function() {
	  // Owl Carousel
	  var owl = $(".owl-carousel");
	  owl.owlCarousel({
	    items: 3,
	    margin: 30,
	    margin: 10,
	    loop: true,
	    autoplay: true,
	    nav: false,
	    dots: true,
	    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
      }

	  });
	});