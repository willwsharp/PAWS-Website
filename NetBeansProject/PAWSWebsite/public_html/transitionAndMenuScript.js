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
            if ($submenu.hasClass('show')) {
                $pullInImg.addClass('hide');
                $pullInImg.removeClass('show');
                $pullOutImg.addClass('show');
                $pullOutImg.removeClass('hide');
                $hoverPullOutImg.addClass('show');
                $hoverPullOutImg.removeClass('hide');
                $submenu.removeClass('show');
                $submenu.addClass('hide');
                $menuOpt.removeClass('selectedMenu');
                return;
            }
            else {
                $pullOutImg.addClass('hide');
                $pullOutImg.removeClass('show');
                $hoverPullOutImg.addClass('hide');
                $hoverPullOutImg.removeClass('show');
                $pullInImg.removeClass('hide');
                $pullInImg.addClass('show');
                $submenu.removeClass('hide');
                $submenu.addClass('show');
                return;
            }
        }
        else {
            $pullInImg.addClass('hide');
            $pullInImg.removeClass('show');
            $pullOutImg.addClass('show');
            $pullOutImg.removeClass('hide');
            $hoverPullOutImg.addClass('show');
            $hoverPullOutImg.removeClass('hide');
            $submenu.removeClass('show');
            $submenu.addClass('hide');
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
        $content.removeClass('hide');
        $content.eq(prevItem).addClass('rollOut');
        $content.eq(prevItem).addClass('hide');

        $content.eq(prevItem).removeClass('rollIn');
        $content.eq(prevItem).removeClass('show');

        $content.eq(itemToShow).addClass('show');
        $content.eq(itemToShow).addClass('rollIn');
        $content.eq(itemToShow).removeClass('rollOut');
        $content.eq(itemToShow).removeClass('hide');

        if (removeAttr === 0)
            $content.removeClass('initialContent');
        removeAttr = 1;

        prevItem = item;

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
