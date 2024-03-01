const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal-container');

open.addEventListener('click',()=>{
    modal.style.visibility = 'visible'
});

close.addEventListener('click', ()=>{
    modal.style.visibility = 'hidden'
})