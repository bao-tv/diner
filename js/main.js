

// ?count up number
$('.counter__number').counterUp({
    delay: 10,
    time: 3000
  });


// wow scoll animation
new WOW().init(); 


// boootstrap slide

$('.carousel-item').carousel()

// myBtnMenu
// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtnMenu").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("bannerMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
  
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
      
//     for (let i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

