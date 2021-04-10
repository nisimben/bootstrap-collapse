$(function() { 
    $("#sidebarCollapse , #dismiss").on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
    $(document).on('click', 'a[href^="#"]',function(){
      console.log(this);
      $('#sidebar, #content').removeClass('active');
      var id = $(this).attr('href');
      var $id = $(id);
      var pos = $id.offset().top;
      $('body, html').animate({scrollTop: pos},1000);

    })
  });