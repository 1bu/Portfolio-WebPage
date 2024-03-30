const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal-container');

const mobileNav = document.getElementById("header-items-sm");
const openBar = document.getElementById("openBar");
const closeBar = document.getElementById("closeBar");

let currentIndex = 0;
let cards = [];
const projectCards = document.querySelectorAll(".project_");
console.log(projectCards);

open.addEventListener('click',()=>{
    modal.style.visibility = 'visible';
});

close.addEventListener('click', ()=>{
    modal.style.visibility = 'hidden';
});

openBar.addEventListener('click', ()=>{
    mobileNav.style.visibility = 'visible';    
    openBar.style.display = 'none';
    closeBar.style.display = 'inline';
});

closeBar.addEventListener('click', ()=>{
    mobileNav.style.visibility = 'hidden';    
    openBar.style.display = 'inline';
    closeBar.style.display = "none";
});
