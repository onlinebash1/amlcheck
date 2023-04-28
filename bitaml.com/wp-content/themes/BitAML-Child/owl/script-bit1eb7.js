// Add your custom JS here.
jQuery(window).scroll(function (e) {
  // add/remove class to navbar when scrolling to hide/show
  var scroll = jQuery(window).scrollTop();
  if (scroll >= 105) {
    jQuery('.nav-top').addClass("navbar-hide");
    jQuery('.nav-bottom').css('top', '0');
  } else {
    jQuery('.nav-top').removeClass("navbar-hide");
    jQuery('.nav-bottom').css('top', '3.5rem');
  }
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    jQuery('.nav-bottom').css('top', '0');
  }
});


jQuery(document).ready(function () {

  jQuery(".home .learn-more-card ").each(function (i, element) {
    var row = jQuery(element);
    var rowContent = row.find(".card-content");
    var i;
    for (i = 0; i < rowContent.length; i++) {
      jQuery(rowContent[0]).expander({
        collapseTimer: 0,
        expandText: 'Learn More <span class="fa fa-chevron-right" aria-hidden="true"></span>',
        moreClass: 'read-more',
        lessClass: 'read-less',
        expandEffect: 'fadeIn',
        expandSpeed: 250,
        collapseEffect: 'fadeOut',
        collapseSpeed: 200,
        userCollapseText: 'Close <img src="' + themeURL + '/wp-content/uploads/2020/08/close-img.png">',
        beforeExpand: function () {
          jQuery(row[0]).addClass('expanded');
        },
        afterExpand: function () {

        },
        onCollapse: function (byUser) {
          jQuery(row[0]).removeClass('expanded');
        }
      });
    }
  });


  // var owl = jQuery('.owl-carousel');
  var sync1 = jQuery("#hero-title-slider");
  sync1.on('initialized.owl.carousel', function (property) {
    console.log('hello');
    var current = property.item.index;
    var src = jQuery(property.target).find(".owl-item").eq(current)
    var inner = src[0].innerHTML;
    var imageUrl = jQuery(inner).children().attr('js-src');
    jQuery('#jsImage').attr('src', imageUrl);
    // console.log(imageUrl);
  })
  sync1.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    autoplay: true,
    animateOut: 'animate__animated animate__fadeOutDown',
    animateIn: 'animate__animated animate__fadeInUp',
    smartSpeed: 450
  })
    .on('changed.owl.carousel', function (property) {

      var current = property.item.index;
      var src = jQuery(property.target).find(".owl-item").eq(current)
      var inner = src[0].innerHTML;
      var imageUrl = jQuery(inner).children().attr('js-src');
      // jQuery('#jsImage').attr('src', imageUrl);
      jQuery('#imageContainer').html('\
        <div class="animate__animated animate__fadeInUp delay">\
          <img id="jsImage" src="'+ imageUrl + '" class="ml-auto w-100 d-block" alt=""> \
        </div>');
    })
});


var wpcf7Elm = document.querySelector('.wpcf7');
wpcf7Elm.addEventListener('wpcf7submit', function (event) {

  // jQuery('.select2').select2('val', '');
  jQuery("select").val(null);
  jQuery("select").trigger("change");

}, false);

