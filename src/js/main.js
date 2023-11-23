// open mobile menu once menu bar is clicked/tapped
// var mobile_menu = document.getElementById('menu-btn');
var mobile_menu = document.getElementById('mobile-btn');
var mobile_menu_placeholder = document.getElementById('mobile-menu');
let menuOpen = false;

mobile_menu.addEventListener('click', function() {
    if(!menuOpen) {
        mobile_menu.classList.add('mobile-open');
        mobile_menu_placeholder.classList.add('opened');
        //mobile_menu_placeholder.classList.remove('hidden');
        //mobile_menu_placeholder.classList.add('grid');
        menuOpen = true;
    } else {
        mobile_menu.classList.remove('mobile-open');
        mobile_menu_placeholder.classList.remove('opened');
        //mobile_menu_placeholder.classList.remove('grid');
        //mobile_menu_placeholder.classList.add('hidden');
        menuOpen = false;
    }
});


/* mobile_menu.addEventListener('click', function(){
    mobile_menu_placeholder.classList.remove('hidden');
    mobile_menu_placeholder.classList.add('absolute');
});

close_menu.addEventListener('click', function(){
    mobile_menu_placeholder.classList.add('hidden');
    mobile_menu_placeholder.classList.remove('absolute');
});
*/ 