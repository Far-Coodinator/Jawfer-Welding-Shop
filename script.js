const ps = document.querySelector('.security input')
const cpass = 'j123j'
const security = document.querySelector('#security')


const nav = document.querySelector('#navBar')
const gridMenu = document.querySelector('#grid')
const closeBtn = document.querySelector('#close-button');
const raillingMenu = document.querySelector('#open-railling')


// security script
document.querySelector('#security-button').addEventListener('click',()=>{
    const checkPS = ps.value.trim()
    if(checkPS===cpass){
        security.style.display = 'none'
        nav.style.display = 'block'
        gridMenu.style.display = 'grid'

    }
})


// for Railling -design opening box
document.querySelector("#iron-railling").addEventListener('click',()=>{
    raillingMenu.style.display ='block'  
    hideMenu()
})






// script for hide the menu 
function hideMenu(){
    closeBtn.style.display = 'block'
    gridMenu.style.display = 'none'
}
function showmenu(){
    closeBtn.style.display = 'none'
    gridMenu.style.display = 'grid'
    raillingMenu.style.display ='none'

}

// script for close the box what is open right now
closeBtn.addEventListener('click',()=>{
    showmenu()
})




// to show the close btn
let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (window.scrollY >= lastScrollY) {
      // User is scrolling down
      closeBtn.style.opacity = '0'; // Hides the nav bar (adjust height as needed)
    } else {
      // User is scrolling up
      closeBtn.style.opacity = '0.8'
    }
    lastScrollY = window.scrollY;
  });








//   disable the inspect

// Prevent common developer tools shortcuts and right-click
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'i' || event.key === 'I' || event.key === 'u' || event.key === 'U' || event.key === 'j' || event.key === 'J' || event.key === 's' || event.key === 'S')) {
        event.preventDefault();
        alert("Shortcut disabled");
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Right-click is disabled");
});


(function() {
    var element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            // This is triggered when the developer tools are opened
            alert('Developer tools are open. Actions may be restricted!');
        }
    });
    console.log(element);
})();
