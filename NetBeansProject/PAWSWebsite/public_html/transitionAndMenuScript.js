$(document).ready(function() {
    $menuOpt = $('.menu > li > a');
    $submenuOpt = $('#submenu li');
    $content = $('.contentPanes');
    $submenuContent = $('.submenuContent');
    $bottomLegal = $('.disclaimers a');
    $submenu = $('#submenu');
    $pullOutImg = $('#pullOutImg');
    $hoverPullOutImg = $('#hoverPullOutImg');
    $pullInImg = $('#pullInImg');

    var prevItem = 0;
    var removeAttr = 0;
    var showCurrent = function(menu, item) {
        var itemToShow = item;
        var selectedMenu = menu;
        var legalTemp = 0;

        $menuOpt.removeClass('selectedMenu');
        $menuOpt.eq(selectedMenu).addClass('selectedMenu');

        if (selectedMenu === 3) {
            if ($submenu.hasClass('contentShow')) {
                $pullInImg.addClass('contentHide');
                $pullInImg.removeClass('contentShow');
                $pullOutImg.addClass('contentShow');
                $pullOutImg.removeClass('contentHide');
                $hoverPullOutImg.addClass('contentShow');
                $hoverPullOutImg.removeClass('contentHide');
                $submenu.removeClass('contentShow');
                $submenu.addClass('contentHide');
                $menuOpt.removeClass('selectedMenu');
                return;
            }
            else {
                $pullOutImg.addClass('contentHide');
                $pullOutImg.removeClass('contentShow');
                $hoverPullOutImg.addClass('contentHide');
                $hoverPullOutImg.removeClass('contentShow');
                $pullInImg.removeClass('contentHide');
                $pullInImg.addClass('contentShow');
                $submenu.removeClass('contentHide');
                $submenu.addClass('contentShow');
                return;
            }
        }
        else {
            $pullInImg.addClass('contentHide');
            $pullInImg.removeClass('contentShow');
            $pullOutImg.addClass('contentShow');
            $pullOutImg.removeClass('contentHide');
            $hoverPullOutImg.addClass('contentShow');
            $hoverPullOutImg.removeClass('contentHide');
            $submenu.removeClass('contentShow');
            $submenu.addClass('contentHide');
        }

        if (selectedMenu === 6 || selectedMenu === 7) {
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
        $content.removeClass('contentHide');
        $content.eq(prevItem).addClass('rollOut');
        
        //console.log($content.eq(prevItem).attr("class"));
        
        $content.eq(prevItem).removeClass('rollIn');
        console.log('1');
        $content.eq(prevItem).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $content.eq(prevItem).removeClass('contentShow');
            console.log('2');
            $content.eq(itemToShow).addClass('contentShow');
            $content.eq(itemToShow).addClass('rollIn');
            $content.eq(itemToShow).removeClass('rollOut');
            prevItem = item;
        });
        console.log('3');
    };

    var showCurrentSubmenu = function(submenu, item) {
        var itemToShow = item;
        var selectedSubmenu = submenu;
        
        console.log($submenuOpt);
        
        $submenuOpt.removeClass('selectedSubmenu');
        $submenuOpt.eq(selectedSubmenu).addClass('selectedSubmenu');

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

    $('#generalButton').on('click', function() {
        showCurrentSubmenu(0, 0);
    });

    $('#estatePlButton').on('click', function() {
        showCurrentSubmenu(1, 1);
    });

    $('#probateButton').on('click', function() {
        showCurrentSubmenu(2, 2);
    });

    $('#guardButton').on('click', function() {
        showCurrentSubmenu(3, 3);
    });

    $('#businessButton').on('click', function() {
        showCurrentSubmenu(4, 4);
    });

    $('#realEstateButton').on('click', function() {
        showCurrentSubmenu(5, 5);
    });

    $('#appsButton').on('click', function() {
        showCurrentSubmenu(6, 6);
    });
});
