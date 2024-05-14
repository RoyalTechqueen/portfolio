window.addEventListener('scroll', function() {
    let header = 
    document.getElementById('header');
    if (this.window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const menuToggle = document.querySelector('#menu-toggle')
const menu = document.querySelector('.menu')

const openIcon = document.querySelector('.open');
const closeIcon = document.querySelector('.close');

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('isopen');
    menu.classList.toggle('active');
})

window.onscroll = function(){
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    }
    else{
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById("back-to-top").addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
});

