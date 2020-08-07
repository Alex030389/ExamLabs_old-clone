const thankYou = document.getElementById('thankYou');
let modalThanks = document.querySelector('.modal-thanks');
let closeElement = document.querySelector('.close-element');

if (thankYou) {
    thankYou.addEventListener('click', e => {
        e.preventDefault();
        modalThanks.classList.add('modal-thanks--active');
        body.classList.add('body--modal');
    });    
}

if (closeElement) {
    closeElement.addEventListener('click', () => {
        modalThanks.classList.remove('modal-thanks--active');
        body.classList.remove('body--modal');
    });    
}

if (window) {
    window.addEventListener('click', e => {
        let target = e.target;
    
        if (target === modalThanks) {
            modalThanks.classList.remove('modal-thanks--active');
            body.classList.remove('body--modal');
        }
    });    
}


