(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });



  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
      });
  });


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }


})(window.jQuery);


// //Tokenomics

// am4core.useTheme(am4themes_animated);

// var chart = am4core.create("chartdiv", am4charts.PieChart3D);
// chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

// chart.data = [
//   {
//     allocation: "Team",
//     LYR: 3100000000
//   },
//   {
//     allocation: "Development",
//     LYR: 1000000000
//   },
//   {
//     allocation: "Marketing & Partnership",
//     LYR: 1500000000
//   },
//   {
//     allocation: "Reserve",
//     LYR: 1500000000
//   },
//   {
//     allocation: "DEX Liquidity",
//     LYR: 2000000000
//   },
//   {
//     allocation: "Staking Rewards",
//     LYR: 2385000000
//   }
// ];

// chart.innerRadius = am4core.percent(40);
// chart.depth = 120;

// chart.legend = new am4charts.Legend();
// chart.legend.position = "bottom";

// var series = chart.series.push(new am4charts.PieSeries3D());
// series.dataFields.value = "LYR";
// series.dataFields.depthValue = "LYR";
// series.dataFields.category = "allocation";
// series.slices.template.cornerRadius = 5;
// series.colors.step = 3;


am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart3D);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Add data
chart.data = [
  {
    "allocation": "Team",
    "LYR": 3100000000
  },
  {
    "allocation": "Development",
    "LYR": 1000000000
  },
  {
    "allocation": "Marketing & Partnership",
    "LYR": 1500000000
  },
  {
    "allocation": "Reserve",
    "LYR": 1500000000
  },
  {
    "allocation": "DEX Liquidity",
    "LYR": 2000000000
  },
  {
    "allocation": "Staking Rewards",
    "LYR": 2385000000
  }
];

chart.legend = new am4charts.Legend();
chart.legend.position = "bottom";

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries3D());
pieSeries.dataFields.value = "LYR";
pieSeries.dataFields.category = "allocation";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;

chart.responsive.enabled = true;


