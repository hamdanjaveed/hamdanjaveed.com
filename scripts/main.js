import { goToPage, attachStatefulEventListeners } from 'pageLoader'

document.addEventListener("DOMContentLoaded", function(e) {
    attachStatefulEventListeners(document.getElementsByClassName('sidebar')[0]);
    goToPage('html/projects.html');
});
