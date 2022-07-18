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

$(document).ready(function() {

  $('#serviceform').submit(function(e) {
    e.preventDefault();
    var first_Id = $('#id-num').val();
    var code = $('#code').val();
    var recode = $('#recode').val();

    $(".error").remove();

    if (first_Id.length < 1) {
      $('#id-num').after('<span class="error text-danger">This field is required</span>');
    }

    if (code.length < 0) {
      $('#code').after('<span class="error text-danger">This field is required</span>');
    }

    if (recode.length < 0) {
      $('#recode').after('<span class="error text-danger">This field is required</span>');
    }

	if (code != recode) {
		 $('#recode').after('<span class="error text-danger">**Password not match </span>');
	      // recode = false;
	      // return false;
	 }

	$('#loaderIcon').css('visibility', 'visible');       
    $('#loaderIcon').show().delay(2000).fadeOut();

  });
	$("#code,#recode").keypress(function (e) {
	   if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
	});
});

// $(document).ready(function(){
//   var height = [];

//   $('.our-work-section .card').each(function(){
//     height.push($(this).height());
//   });

//   var maxheight = Math.max.apply(null,height);

//   $('.our-work-section .card').height(maxheight);

// });

var text = $('.text-overflow'),
     btn = $('.btn-overflow'),
       h = text[0].scrollHeight; 

if(h > 120) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function(e) 
{
  e.stopPropagation();

  if (btn.hasClass('less')) {
      btn.removeClass('less');
      btn.addClass('more');
      btn.text('Show less');

      text.animate({'height': h});
  } else {
      btn.addClass('less');
      btn.removeClass('more');
      btn.text('Show more');
      text.animate({'height': '120px'});
  }  
});


jQuery(document).ready(function($){

  $('.slides').slick({
  centerMode: true,
  slidesToShow: 5,
  autoplay:true,
  infinite: true,
    arrows: true,
    dots: false,
     slidesToScroll: 1,
    appendArrows: '.slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><span class="sr-text">Previous</span><img class="prev" aria-hidden="true" width="25px" src="https://assets.codepen.io/588944/noun-arrow-1920806-1a1a1a.svg" /></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="sr-text">Next</span><img class="next" aria-hidden="true" width="25px" src="https://assets.codepen.io/588944/noun-arrow-1920806-1a1a1a.svg" /></button>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
});
  
   $('.slick-current').addClass('active');    
  $('.slick-current').next('.slick-slide').addClass('next1');
  $('.slick-current').prev('.slick-slide').addClass('prev1');
  $('.slick-slide.next1').next('.slick-slide').addClass('next2');
  $('.slick-slide.prev1').prev('.slick-slide').addClass('prev2');
  
  // On before slide change
$('.slides').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide){
  let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
  $('.slick-slide').removeClass('active').removeClass('next1').removeClass('next2').removeClass('prev1').removeClass('prev2');
  $(selectors).addClass('active');
  $('.slick-slide.active').next('.slick-slide').addClass('next1');
  $('.slick-slide.active').prev('.slick-slide').addClass('prev1');
  $('.slick-slide.next1').next('.slick-slide').addClass('next2');
  $('.slick-slide.prev1').prev('.slick-slide').addClass('prev2');
});

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slides').slick('slickGoTo', slideno - 1);
 });
  
  
  });