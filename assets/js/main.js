// choosing querySelector for hamburger-menu
// react on click action
// add class "change" and toggle

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
  });