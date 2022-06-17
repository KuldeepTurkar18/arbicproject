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

$(document).ready(function(){
  var height = [];

  $('.our-work-section .card').each(function(){
    height.push($(this).height());
  });

  var maxheight = Math.max.apply(null,height);

  $('.our-work-section .card').height(maxheight);

});