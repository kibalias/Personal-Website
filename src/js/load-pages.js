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

//load portfolio pages
function loadWork(val){
    console.log(val);
    if(val == 1){
        window.open('src/templates/mafumafu-interface-design.html');
    } else {
        window.open('src/templates/misc/under-construction.html');
    }
}

//redirect to github repository
function redirect_to_github(d){
    var val = d.getAttribute('data-value');
    console.log(val);
    if(val=='vetcares'){
        window.open('https://github.com/kibalias/VetCares');
    } else if(val=='kemrie'){
        window.open('https://github.com/kibalias/Kemrie-Barcenas-Website');
    } else if(val=='icbb'){
        window.open('https://github.com/kibalias/I-CBB-App');
    } else if(val=='pmms'){
        window.open('https://github.com/kibalias/PMMS');
    } else if(val=='alexandria'){
        window.open('https://github.com/kibalias/Alexandria');
    }
}