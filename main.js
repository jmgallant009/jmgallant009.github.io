//Nav Menu JS s
function hamburgerNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav_menu');
    console.log(hamburger, navMenu)
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}