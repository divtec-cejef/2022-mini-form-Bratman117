/**
 * @author Michaël Demars
 * @since 2022.09.20
 */

const listeBackground = document.getElementById('background');

listeBackground.addEventListener('change', function () {
    const image = listeBackground.value
    document.body.style.backgroundImage = `url(./img/backgrounds/${image})`
})

const formulaire = document.querySelector('form');
const btCreer = document.querySelector('[type="submit"]');

formulaire.addEventListener('submit', function (event) {
    event.preventDefault();
    btCreer.classList.add('animate__animated', 'animate__tada');
})

btCreer.addEventListener('animationend', function () {
    alert('Compte créé avec succès !');
    formulaire.reset();
    btCreer.classList.remove('animate__animated', 'animate__tada');
});