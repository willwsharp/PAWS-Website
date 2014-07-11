$(document).ready(function() {
    $menuOpt = $('.menu > li > a');
    $submenuOpt = $('#submenu li a');
    $content = $('.contentPanes');
    $submenuContent = $('.submenuContent');
    $bottomLegal = $('.disclaimers a');
    $submenu = $('#submenu');
    $pullOutImg = $('#pullOutImg');
    $hoverPullOutImg = $('#hoverPullOutImg');
    $invertPullOutImg = $('#invertPullOutImg');
    $pullInImg = $('#pullInImg');

    var prevMenu = 0;
    var prevItem = 0;
    var prevSubItem = 0;
    var showCurrent = function(menu, item) {
        var itemToShow = item;
        var selectedMenu = menu;
        //var selectedResourceSubmenu = menu - 8;
        var legalTemp = 0;

        changeSelectedMenu(selectedMenu);

        if (selectedMenu === 3) {
            if ($submenu.hasClass('show')) {
                if ($submenuOpt.hasClass('selectedSubmenu')) {
                    $pullInImg.addClass('hide');
                    $pullInImg.removeClass('show');
                    $invertPullOutImg.addClass('show');
                    $invertPullOutImg.removeClass('hide');
                    $submenu.removeClass('show');
                    $submenu.addClass('hide');
                    return;
                }
                $invertPullOutImg.addClass('hide');
                $invertPullOutImg.removeClass('show');
                $pullInImg.addClass('hide');
                $pullInImg.removeClass('show');
                $pullOutImg.addClass('show');
                $pullOutImg.removeClass('hide');
                $hoverPullOutImg.addClass('show');
                $hoverPullOutImg.removeClass('hide');
                $submenu.removeClass('show');
                $submenu.addClass('hide');
                $menuOpt.removeClass('selectedMenu');
                $menuOpt.eq(prevMenu).addClass('selectedMenu');
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
        else if (selectedMenu < 8) {
            $invertPullOutImg.addClass('hide');
            $invertPullOutImg.removeClass('show');
            $pullInImg.addClass('hide');
            $pullInImg.removeClass('show');
            $pullOutImg.addClass('show');
            $pullOutImg.removeClass('hide');
            $hoverPullOutImg.addClass('show');
            $hoverPullOutImg.removeClass('hide');
            $submenu.removeClass('show');
            $submenu.addClass('hide');
            $submenuOpt.removeClass('selectedSubmenu');
        }
        else if (selectedMenu >= 8) {
            $pullInImg.addClass('hide');
            $pullInImg.removeClass('show');
            $invertPullOutImg.addClass('show');
            $invertPullOutImg.removeClass('hide');
            $submenu.removeClass('show');
            $submenu.addClass('hide');
        }

        if (selectedMenu === 6 || selectedMenu === 7) {
            legalTemp = selectedMenu - 6;
            $bottomLegal.removeClass('selectedLegal');
            $bottomLegal.eq(legalTemp).addClass('selectedLegal');
            $menuOpt.removeClass('selectedMenu');
        }
        else {
            $bottomLegal.removeClass('selectedLegal');
        }

        if (itemToShow === prevItem)
            return;
        $content.removeClass('rollOut');
        $content.removeClass('contentHide');
        $content.eq(prevItem).addClass('rollOut');

        $content.eq(prevItem).removeClass('rollIn');
        //TODO - improve the way this works
        $content.eq(prevItem).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $content.eq(prevItem).removeClass('contentShow');
            $content.eq(itemToShow).addClass('contentShow');
            $content.eq(itemToShow).addClass('rollIn');
            $content.eq(itemToShow).removeClass('rollOut');
            prevItem = item;
            prevMenu = menu;
        });
    };

    var changeSelectedMenu = function(menu) {
        var selectedMenu = menu;

        if (selectedMenu < 8) {
            $menuOpt.removeClass('selectedMenu');
            $menuOpt.eq(selectedMenu).addClass('selectedMenu');
        }
        else if (selectedMenu >= 8) {
            selectedMenu = selectedMenu - 8;
            $submenuOpt.removeClass('selectedSubmenu');
            $submenuOpt.eq(selectedMenu).addClass('selectedSubmenu');
        }
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
        //showCurrent(0, 0);
        showCurrent(8, 8);
    });

    $('#estatePlButton').on('click', function() {
        showCurrent(9, 9);
    });

    $('#probateButton').on('click', function() {
        showCurrent(10, 10);
    });

    $('#guardButton').on('click', function() {
        showCurrent(11, 11);
    });

    $('#businessButton').on('click', function() {
        showCurrent(12, 12);
    });

    $('#realEstateButton').on('click', function() {
        showCurrent(13, 13);
    });

    $('#appsButton').on('click', function() {
        showCurrent(14, 14);
    });
});
