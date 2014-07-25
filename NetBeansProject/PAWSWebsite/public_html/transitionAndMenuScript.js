$(document).ready(function() {
    $menuOpt = $('.menu > li > a');
    $submenuOpt = $('#submenu li a');
    $aboutSubmenuOpt = $('#aboutSubmenu li a');
    $content = $('.contentPanes');
    $submenuContent = $('.submenuContent');
    $bottomLegal = $('.disclaimers a');
    $submenu = $('#submenu');
    $aboutSubmenu = $('#aboutSubmenu');
    $pullOutImg = $('#pullOutImg');
    $hoverPullOutImg = $('#hoverPullOutImg');
    $invertPullOutImg = $('#invertPullOutImg');
    $pullInImg = $('#pullInImg');
    $aboutPullOutImg = $('#aboutPullOutImg');
    $aboutHoverPullOutImg = $('#aboutHoverPullOutImg');
    $aboutInvertPullOutImg = $('#aboutInvertPullOutImg');
    $aboutPullInImg = $('#aboutPullInImg');


    var prevMenu = 0;
    var prevItem = 0;
    //var selectedMenu = 0;
    var showCurrent = function(menu, item) {
        var itemToShow = item;
        var selectedMenu = menu;

        //console.log(selectedMenu);
        changeSelectedMenu(menu);
        if (selectedMenu === 1) {
            resourceSubmenuHide();
            aboutSubmenuFunctions();
            return;
        }
        else if (selectedMenu === 3) {
            aboutSubmenuHide();
            resourceSubmenuFunctions();
            return;
        }
        else if (selectedMenu < 8) {
            $submenuOpt.removeClass('selectedSubmenu');
            $aboutSubmenuOpt.removeClass('selectedSubmenu');
            hideSubmenus();
            changeSelectedMenu(menu);
        }
        else if (selectedMenu >= 8 && selectedMenu < 15) {
            $aboutSubmenuOpt.removeClass('selectedSubmenu');
            resWhiteInHide();
            resWhiteOutShow();
            resSubmenuClassHide();
        }
        else if (selectedMenu >= 15) {
            $submenuOpt.removeClass('selectedSubmenu');
            aboutWhiteInHide();
            aboutWhiteOutShow();
            aboutSubmenuClassHide();
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

    var changeSelectedMenu = function(selectedMenu) {
        if (selectedMenu < 8) {
            if (selectedMenu === 6 || selectedMenu === 7) {
                legalTemp = selectedMenu - 6;
                $bottomLegal.removeClass('selectedLegal');
                $bottomLegal.eq(legalTemp).addClass('selectedLegal');
                $menuOpt.removeClass('selectedMenu');
            }
            else {
                $bottomLegal.removeClass('selectedLegal');
            }
            $menuOpt.removeClass('selectedMenu');
            $menuOpt.eq(selectedMenu).addClass('selectedMenu');
        }
        else if (selectedMenu >= 8 && selectedMenu < 15) {
            selectedMenu = selectedMenu - 8;
            $submenuOpt.removeClass('selectedSubmenu');
            $submenuOpt.eq(selectedMenu).addClass('selectedSubmenu');
        }
        else if (selectedMenu > 14) {
            selectedMenu = selectedMenu - 15;
            $aboutSubmenuOpt.removeClass('selectedSubmenu');
            $aboutSubmenuOpt.eq(selectedMenu).addClass('selectedSubmenu');
        }
    };

    var resourceSubmenuFunctions = function() {
        if ($submenu.hasClass('show')) {
            if ($submenuOpt.hasClass('selectedSubmenu')) {
                //console.log('resource: 1');
                resBlueOutHide();
                resWhiteInHide();
                resWhiteOutShow();
                resSubmenuClassHide();
            }
            else {
                //console.log('resource: 2');
                resourceSubmenuHide_Selected();
                interMenuFunctions();
            }
        }
        else {
            //console.log('open resource submenu');
            resourceSubmenuShow();
        }
    };

    var aboutSubmenuFunctions = function() {
        if ($aboutSubmenu.hasClass('show')) {
            if ($aboutSubmenuOpt.hasClass('selectedSubmenu')) {
                //console.log('about: 1');
                aboutBlueOutHide();
                aboutWhiteInHide();
                aboutWhiteOutShow();
                aboutSubmenuClassHide();
            }
            else {
                //console.log('about: 2');
                aboutSubmenuHide_Selected();
                interMenuFunctions();
            }
        }
        else {
            //console.log('about: 3');
            aboutSubmenuShow();
        }
    };

    var hideSubmenus = function() {
        resourceSubmenuHide();
        aboutSubmenuHide();
    };

    var interMenuFunctions = function() {
        var primaryMenu = prevMenu;
        //console.log("prevMenu: " + prevMenu);
        if (prevMenu >= 8 && prevMenu < 15) {
            primaryMenu = 3;
            aboutSubmenuHide();
            $menuOpt.removeClass('selectedMenu');
            $menuOpt.eq(primaryMenu).addClass('selectedMenu');
            resourceSubmenuHide_Selected();
        }
        else if (prevMenu >= 15) {
            primaryMenu = 1;
            resourceSubmenuHide();
            $menuOpt.removeClass('selectedMenu');
            $menuOpt.eq(primaryMenu).addClass('selectedMenu');
            aboutSubmenuHide_Selected();
        }
        else {
            $submenuOpt.removeClass('selectedSubmenu');
            $aboutSubmenuOpt.removeClass('selectedSubmenu');
            hideSubmenus();
            changeSelectedMenu(prevMenu);
        }
        //console.log("primaryMenu: " + primaryMenu);
    };

    var resourceSubmenuHide = function() {
        resWhiteOutHide();
        resWhiteInHide();
        resBlueOutShow();
        resHoverShow();
        resSubmenuClassHide();
    };

    var resourceSubmenuHide_Selected = function() {
        resWhiteOutShow();
        resBlueOutHide();
        resWhiteInHide();
        resHoverHide();
        resSubmenuClassHide();
    };

    var resourceSubmenuShow = function() {
        resBlueOutHide();
        resHoverHide();
        resWhiteInShow();
        resSubmenuClassShow();
    };

    var aboutSubmenuHide = function() {
        aboutWhiteOutHide();
        aboutBlueOutShow();
        aboutWhiteInHide();
        aboutHoverShow();
        aboutSubmenuClassHide();
    };

    var aboutSubmenuHide_Selected = function() {
        aboutWhiteOutShow();
        aboutBlueOutHide();
        aboutWhiteInHide();
        aboutHoverHide();
        aboutSubmenuClassHide();
    };

    var aboutSubmenuShow = function() {
        aboutBlueOutShow();
        aboutHoverHide();
        aboutWhiteInShow();
        aboutSubmenuClassShow();
    };

    var resSubmenuClassShow = function() {
        $submenu.addClass('show');
        $submenu.removeClass('hide');
    };
    var resSubmenuClassHide = function() {
        $submenu.addClass('hide');
        $submenu.removeClass('show');
    };
    var aboutSubmenuClassShow = function() {
        $aboutSubmenu.addClass('show');
        $aboutSubmenu.removeClass('hide');
    };
    var aboutSubmenuClassHide = function() {
        $aboutSubmenu.addClass('hide');
        $aboutSubmenu.removeClass('show');
    };

    var resBlueOutShow = function() {
        $pullOutImg.addClass('show');
        $pullOutImg.removeClass('hide');
    };
    var resBlueOutHide = function() {
        $pullOutImg.addClass('hide');
        $pullOutImg.removeClass('show');
    };
    var resWhiteInShow = function() {
        $pullInImg.addClass('show');
        $pullInImg.removeClass('hide');
    };
    var resWhiteInHide = function() {
        $pullInImg.addClass('hide');
        $pullInImg.removeClass('show');
    };
    var resWhiteOutShow = function() {
        $invertPullOutImg.addClass('show');
        $invertPullOutImg.removeClass('hide');
    };
    var resWhiteOutHide = function() {
        $invertPullOutImg.addClass('hide');
        $invertPullOutImg.removeClass('show');
    };
    var resHoverShow = function() {
        $hoverPullOutImg.addClass('show');
        $hoverPullOutImg.removeClass('hide');
    };
    var resHoverHide = function() {
        $hoverPullOutImg.addClass('hide');
        $hoverPullOutImg.removeClass('show');
    };

    var aboutBlueOutShow = function() {
        $aboutPullOutImg.addClass('show');
        $aboutPullOutImg.removeClass('hide');
    };
    var aboutBlueOutHide = function() {
        $aboutPullOutImg.addClass('hide');
        $aboutPullOutImg.removeClass('show');
    };
    var aboutWhiteInShow = function() {
        $aboutPullInImg.addClass('show');
        $aboutPullInImg.removeClass('hide');
    };
    var aboutWhiteInHide = function() {
        $aboutPullInImg.addClass('hide');
        $aboutPullInImg.removeClass('show');
    };
    var aboutWhiteOutShow = function() {
        $aboutInvertPullOutImg.addClass('show');
        $aboutInvertPullOutImg.removeClass('hide');
    };
    var aboutWhiteOutHide = function() {
        $aboutInvertPullOutImg.addClass('hide');
        $aboutInvertPullOutImg.removeClass('show');
    };
    var aboutHoverShow = function() {
        $aboutHoverPullOutImg.addClass('show');
        $aboutHoverPullOutImg.removeClass('hide');
    };
    var aboutHoverHide = function() {
        $aboutHoverPullOutImg.addClass('hide');
        $aboutHoverPullOutImg.removeClass('show');
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

    $('#bioButton').on('click', function() {
        showCurrent(15, 15);
    });

    $('#accoaButton').on('click', function() {
        showCurrent(16, 16);
    });
});
