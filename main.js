//Nav Menu JS 

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerNav() {
    var x = document.getElementById("nav_menu");
    if (x.className === "nav_menu") {
      x.className += " responsive";
    } else {
      x.className = "nav_menu";
    }
}