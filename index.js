// $('project-btn').on('click',function(){
//     $('p-section').slideup().slidedown().animate({opacity:0.5})
// })

// window.addEventListener('scroll',()=> {
//   $('.about').slideUp().slideDown(h )
// })


// function myfunction(){
//   $('.blue').slideUp().slideDown();
// };

window.addEventListener('scroll', reveal);
function reveal(){
var reveals = $('.reveal');
for(i = 0; i < reveals.length; i ++){
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowHeight - revealpoint){
        reveals[i].classList.add('active')
    }else{
        reveals[i].classList.remove('active')
    }
}

}