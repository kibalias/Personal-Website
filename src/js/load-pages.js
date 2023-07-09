// Ajax functions to load html files inside the div in index.html
$(function(){
    $(".about-placeholder").load('src/templates/about.html'); 
});

$(function(){
    $(".portfolio-placeholder").load('src/templates/portfolio.html'); 
});

$(function(){
    $(".contact-placeholder").load('src/templates/contact.html'); 
});


// open mobile menu once menu bar is clicked/tapped
var mobile_menu = document.getElementById('menu-btn');
var close_menu = document.getElementById('close-btn');
var mobile_menu_placeholder = document.getElementById('mobile-menu');

mobile_menu.addEventListener('click', function(){
    mobile_menu_placeholder.classList.remove('hidden');
    mobile_menu_placeholder.classList.add('absolute');
});

close_menu.addEventListener('click', function(){
    mobile_menu_placeholder.classList.add('hidden');
    mobile_menu_placeholder.classList.remove('absolute');
});