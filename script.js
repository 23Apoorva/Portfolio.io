
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname) {
     
       for (tabcontent of tabcontents) {
            tabcontent.classList.remove('active-tab')
      }
      
      document.getElementById(tabname).classList.add('active-tab')
}


// ------------------------side menu -------------------------------


let sideMenu = document.getElementById('sidemenu');

function openmenu() {
      sideMenu.style.right = '0';
}

function closemenu() {
      sideMenu.style.right = '-200px';
}