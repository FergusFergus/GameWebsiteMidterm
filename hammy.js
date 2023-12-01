const menuBtn = document.getElementById('hamburger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {

    if (!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true
    }
    else{
        menuBtn.classList.remove('open')
        menuOpen = false 
    }
})


const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});