$(document).ready(function() {
      		$menuOpt = $('.menu > li > a');
      		$content = $('.contentPanes');
                $bottomLegal = $('.disclaimers a');
      		var prevItem = 0;
      		var removeAttr = 0;
	  //console.log($content);
      var showCurrent = function(menu, item) {
      var itemToShow = item;
      var selectedMenu = menu;
      var legalTemp = 0;
            
      $menuOpt.removeClass('selectedMenu');
      $menuOpt.eq(selectedMenu).addClass('selectedMenu');
      
      if(selectedMenu === 6 || selectedMenu === 7) {
          legalTemp = selectedMenu - 6;
          console.log($bottomLegal.eq(legalTemp));
          $bottomLegal.removeClass('selectedLegal');
          $bottomLegal.eq(legalTemp).addClass('selectedLegal');
          $menuOpt.removeClass('selectedMenu');
      }
      else {
          $bottomLegal.removeClass('selectedLegal');
      }
      
      $content.removeClass('rollOut');
      $content.removeClass('hide');
      $content.eq(prevItem).addClass('rollOut');
      $content.eq(prevItem).addClass('hide');

      $content.eq(prevItem).removeClass('rollIn');
      $content.eq(prevItem).removeClass('show');
      
      $content.eq(itemToShow).addClass('show');
      $content.eq(itemToShow).addClass('rollIn');
      $content.eq(itemToShow).removeClass('rollOut');
      $content.eq(itemToShow).removeClass('hide');

      if (removeAttr === 0) $content.removeClass('initialContent');
      removeAttr = 1;
      
      prevItem = item;

      };
      
      $('#HomeButton').on('click', function() {
      	showCurrent(0, 0);
      });
      
      $('#AboutPatricia').on('click', function() {
	showCurrent(1, 1);
      });
      
      $('#ServicesButton').on('click', function() {
	  	showCurrent(2, 2);
	  });
      
      $('#ResourcesButton').on('click', function() {
	  	showCurrent(3, 3);
	  });
      
      $('#GIButton').on('click', function() {
	  	showCurrent(4, 4);
	  });
      
      $('#ContactButton').on('click', function() {
	  	showCurrent(5, 5);
	  });
          
      $('#disclaimer').on('click', function() {
                showCurrent(6, 6);
          });
      $('#privacyInfo').on('click', function() {
                showCurrent(7, 7);
          });
      
      });
