$(document).ready(function(){
    
  $("a[href*='http://']:not([href*='"+location.hostname+"'])").attr("target","_blank");  
  
  $('#content').scrollParallax({speed: -0.75, axis: 'y'});
  //$('#footer').scrollParallax({speed: 0.5, axis: 'y'});
  
  //|
  //| gather the x,y coordinates for each arrow
  //|
  var arrowsX = new Array();
  var arrowsY = new Array();
  var i = 0;
  $(".arrow").each( function(){
    var arrowX = $(this).css("left").replace('px','');
    var arrowY = $(this).css("top").replace('px','');
    arrowsX[i] = (arrowX);
    arrowsY[i++] = (arrowY);
  });
    
  $(window).scroll(function(){
    
    var scrollDistance = $(window).scrollTop();
    var i = 0;
    $(".arrow").each(function(){
      //|
      //| on scroll, for each arrow do this:
      //|
      
      var p1x = parseInt(arrowsX[i]) - parseInt(scrollDistance);
      var p1y = parseInt(arrowsY[i]) - parseInt(scrollDistance);
      
      var p2x = parseInt(arrowsX[i]) - parseInt(scrollDistance);
      var p2y = parseInt(arrowsY[i]);
      
      var p3x = parseInt(arrowsX[i]) - parseInt(scrollDistance);
      var p3y = parseInt(arrowsY[i]) + parseInt(scrollDistance);
      
      var p4x = parseInt(arrowsX[i]) + parseInt(scrollDistance);
      var p4y = parseInt(arrowsY[i]) - parseInt(scrollDistance);
      
      var p5x = parseInt(arrowsX[i]) + parseInt(scrollDistance);
      var p5y = parseInt(arrowsY[i]);
      
      var p6x = parseInt(arrowsX[i]) + parseInt(scrollDistance);
      var p6y = parseInt(arrowsY[i]) + parseInt(scrollDistance);
      
      if ($(this).hasClass("px1")) $(this).stop().animate({ left: p1x, top: p1y}, 100, function() {});
      if ($(this).hasClass("px2")) $(this).stop().animate({ left: p2x, top: p2y}, 250, function() {});
      if ($(this).hasClass("px3")) $(this).stop().animate({ left: p3x, top: p3y}, 400, function() {});
      if ($(this).hasClass("px4")) $(this).stop().animate({ left: p4x, top: p4y}, 400, function() {});
      if ($(this).hasClass("px5")) $(this).stop().animate({ left: p5x, top: p5y}, 250, function() {});
      if ($(this).hasClass("px6")) $(this).stop().animate({ left: p6x, top: p6y}, 100, function() {});
      
      i++;
    });
    
    newFooter = 0 + scrollDistance*0.25;
    $("#footerImage").css("bottom", "-" + newFooter + "px");
    
  });
      
});