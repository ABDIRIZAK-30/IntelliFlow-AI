const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeToggleMobile=document.getElementById("darkModeToggleMobile");
const htmlElement = document.documentElement; // Or any parent element you want to apply the dark class to

darkModeToggle.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

darkModeToggleMobile.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



const menuIcon=document.querySelector("#menu-icon");
const mobileMenu=document.querySelector("#mobile-menu");
menuIcon.addEventListener("click",toggleMenu);
function toggleMenu(){
  mobileMenu.classList.toggle("hidden");
  
}

// Load the theme from local storage on page load
window.onload = function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");
  }
};


function switcheswith() {
  const Startups = document.querySelector("#Startups");
  const webapps = document.querySelector("#WebApps");
  const eccommerce = document.querySelector("#Ecommerce");
  const enterprice = document.querySelector("#Enterprice");

  function hideOthers(except) {
    const sections = ["#Start", "#Web", "#Ecomm", "#Enter"];
    sections.forEach((selector) => {
      const element = document.querySelector(selector);
      if (selector !== except) {
        element.classList.add("hidden");
      }
    });

    const buttons = [Startups, webapps, eccommerce, enterprice];
    buttons.forEach((button) => {
      if (button !== except) {
        button.style.backgroundColor = "black";
      }else {
        button.style.backgroundColor = "blue";
      }
    });
  }

  Startups.addEventListener('click', function () {
    hideOthers("#Start");
    const start = document.querySelector("#Start");
    start.classList.toggle("hidden");
    Startups.style.backgroundColor = start.classList.contains("hidden") ? "black" : "blue";
  });

  webapps.addEventListener('click', function () {
    hideOthers("#Web");
    const web = document.querySelector("#Web");
    web.classList.toggle("hidden");
    webapps.style.backgroundColor = web.classList.contains("hidden") ? "black" : "blue";
  });

  eccommerce.addEventListener('click', function () {
    hideOthers("#Ecomm");
    const ecommerce = document.querySelector("#Ecomm");
    ecommerce.classList.toggle("hidden");
    eccommerce.style.backgroundColor = ecommerce.classList.contains("hidden") ? "black" : "blue";
  });

  enterprice.addEventListener('click', function () {
    hideOthers("#Enter");
    const enter = document.querySelector("#Enter");
    enter.classList.toggle("hidden");
    enterprice.style.backgroundColor = enter.classList.contains("hidden") ? "black" : "blue";
  });
}

// Call the function to attach event listeners
switcheswith();



const more=document.querySelector("#more")
const moreMenu=document.querySelector("#more-menu")
more.addEventListener("click",function(){
  moreMenu.classList.toggle("hidden");
  more.classList.toggle("bg-blue-500");
  more.classList.toggle("text-white");
  more.classList.toggle("bg-black");
  more.classList.toggle("text-blue-500");


  moreMenu.style.display="none";
  more.style.backgroundColor="transparent";
  window.onclick=function(event){
    if (event.target !== more) {
      moreMenu.style.display = "none";
      more.style.backgroundColor = "transparent";

    } else {
      moreMenu.style.display = "block";
      more.style.color = "black";
    }
  }
  
})






