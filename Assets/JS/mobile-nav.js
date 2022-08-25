const hamburger = document.querySelector('.nav .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-list .nav-items');
const nav_item = document.querySelectorAll('.nav .nav-list .nav-items ul li a');
const nav = document.querySelector('.nav.container');
const logo = document.querySelector('.nav .nav-logo');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

nav_item.forEach(item=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})

logo.addEventListener('click', ()=>{
    if(hamburger.classList.contains('active') && mobile_menu.classList.contains('active')) {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    }
})

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    
    if(scroll_position > 150)
    {
        nav.style.height = '10vh';
        logo.style.width = '130px';
    } else
    {
        nav.style.height = '20vh';
        logo.style.width = '250px';
    }
})