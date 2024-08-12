function startAnimation(button) {
    if (button.classList.contains('done')) {
        
    }

    const buttonText = button.querySelector('.button-text');
    buttonText.style.display = 'none';

    button.classList.add('show-cart');
    const cardLink = button.closest('.card-link');

    setTimeout(() => {
        button.classList.add('show-box');
    }, 1000);

    setTimeout(() => {
        button.classList.add('move-right');
    }, 2500);

    setTimeout(() => {
        button.classList.remove('show-cart', 'show-box', 'move-right');
        button.classList.add('done');
    }, 4000);
}
