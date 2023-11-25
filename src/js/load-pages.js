// Ajax functions to load html files inside the div in index.html
$(function(){
    $(".about-placeholder").load('src/templates/about.html'); 
    $(".portfolio-placeholder").load('src/templates/portfolio.html'); 
    $(".contact-placeholder").load('src/templates/contact.html'); 
});

$(function(){
    $(".warning").load('../misc/under-development.html'); 
});

//load portfolio pages
function loadWork(val){
    console.log(val);
    var pagelinks = ['src/templates/projects/mafumafu-interface-design.html', 
                    'src/templates/projects/kemrie-interface-design.html',
                    'src/templates/projects/icbb-interface-design.html',
                    'src/templates/projects/alexandria-interface-design.html',
                    'src/templates/misc/under-construction.html',
                ]
    try {
        if(val != null){
            window.open(pagelinks[val-1]);
        }
    }
    catch {
        alert('Non-existing or cannot locate page!');
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
    } else {
        window.open('src/templates/misc/404.html');
    }
}