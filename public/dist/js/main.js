$(() => {
  $(".toggle-nav").on("click", function() {
    $(this).toggleClass("opned");
    $(".links").toggleClass("nav-active");
  });
  // slide to top scrolling //
  $slideTop = $(".slide-up");

  $(".logo,.slide-up").click(function($e) {
    $e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  function checkScroll() {
    if ($(this).scrollTop() > 600) {
      $slideTop.fadeIn(500);
    } else {
      $slideTop.fadeOut(500);
    }
  }

  checkScroll();

  // the navigation bar rules
  $nav = $("#navigation");
  $nvChilds = $nav.find("li a");
  // console.log($nvChilds);
  $navHeight = $nav.outerHeight() + 2;
  // console.log($navHeight);
  $dtScroll = "";

  $nvChilds.on("click", function($e) {
    $dtScroll = $(this).data("scroll");
    if ($dtScroll) {
      $e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: $("." + $dtScroll).offset().top - $navHeight,
        },
        800
      );
    }
  });

  function activeLink() {
    $nvChilds.each(function() {
      $(".scroll").each(function() {
        if ($(window).scrollTop() >= $(this).offset().top - $navHeight - 5) {
          var $sectionActive = $(this);

          $nvChilds.each(function() {
            if ($(this).data("scroll")) {
              $sectionScrolled = $(this).data("scroll");

              if ($sectionActive.hasClass($sectionScrolled)) {
                $(this)
                  .addClass("active")
                  .parent()
                  .siblings()
                  .children("a")
                  .removeClass("active");
              }
            }
            // if($(this).attr("data-scroll") == atrId){
            //   console.log($(this));
            // }
          });
        }
      });
    });
  }

  activeLink();
  // window scroll rules and functions

  $(window).scroll(function() {
    checkScroll();
    activeLink();
  });

  // disable some buttons
  $(".disabled,.special-btn").click(function(e) {
    e.preventDefault();
  });

  // header chevron down scroll to business section
  $down = $(".sc-to-business");
  $toBusiness = $("." + $down.attr("data-scroll")).offset().top - $navHeight;

  $down.click(function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $toBusiness,
      },
      800
    );
  });

  // hide the loading image when the document is ready
  // LOADING PAGE
  setTimeout(() => {
    $("body.is_loading")
      .find(".__loading")
      .fadeOut(700);
  }, 1000);

  // nice scroll plugin
  $("body").niceScroll({
    cursorcolor: "#333456", // change cursor color in hex
    cursorwidth: "10px", // cursor width in pixel (you can also write "5px"
    // cursorborder: "2px solid red", // css definition for cursor border
    zindex: "auto" | [9658965], // change z-index for scrollbar div
    scrollspeed: 50, // scrolling speed
    // touchbehavior: true, // DEPRECATED!! use "touchemulate"
    autohidemode: false, // how hide the scrollbar works, possible values:
    cursorfixedheight: 105, // set fixed height for cursor in pixel
  });
});
