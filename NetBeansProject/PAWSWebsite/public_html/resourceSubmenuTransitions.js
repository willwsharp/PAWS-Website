$(document).ready(function() {
      		$submenuOpt = $('#submenu li');
      		$content = $('.contentPanes');
                $bottomLegal = $('.disclaimers a');
      		var prevItem = 0;
      		var removeAttr = 0;
      var showCurrentSubmenu = function(menu, item) {
      var itemToShow = item;
      var selectedMenu = menu;
      var legalTemp = 0;
            
      $submenuOpt.removeClass('selectedMenu');
      $submenuOpt.eq(selectedMenu).addClass('selectedMenu');
      
      if(selectedMenu === 7 || selectedMenu === 8) {
          legalTemp = selectedMenu - 7;
          console.log($bottomLegal.eq(legalTemp));
          $bottomLegal.removeClass('selectedLegal');
          $bottomLegal.eq(legalTemp).addClass('selectedLegal');
          $submenuOpt.removeClass('selectedMenu');
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
      	showCurrentSubmenu(0, 0);
      });
      
      $('#AboutPatricia').on('click', function() {
	showCurrentSubmenu(1, 1);
      });
      
      $('#ServicesButton').on('click', function() {
	  	showCurrentSubmenu(2, 2);
	  });
      
      $('#ResourcesButton').on('click', function() {
	  	showCurrentSubmenu(3, 3);
	  });
      
      $('#GIButton').on('click', function() {
	  	showCurrentSubmenu(4, 4);
	  });
      
      $('#ContactButton').on('click', function() {
	  	showCurrentSubmenu(5, 5);
	  });
          
      $('#disclaimer').on('click', function() {
                showCurrentSubmenu(6, 6);
          });
      $('#privacyInfo').on('click', function() {
                showCurrentSubmenu(7, 7);
          });
      
      });
