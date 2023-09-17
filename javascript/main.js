const cookieName = 'cookieconsent';
const cookieValue = 'dismissed';

function dismiss() {
    const date = new Date();
    //Der Keks ist für 180 haltbar (Tage x Stunden x Minuten x Sekunden x Millisekunden)
    date.setTime(date.getTime() + (180 * 24 * 60 * 60 *1000));
    //Keks setzen
    document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;

    document.querySelector('.js-cookie-banner').remove();
}

//Knopf
const buttonElement = document.querySelector('.js-cookie-dismiss');
if (buttonElement) {
    buttonElement.addEventListener('click', dismiss);
}