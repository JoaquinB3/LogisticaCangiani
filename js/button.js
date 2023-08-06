const button = document.getElementById("hamburger-btn");
const menuResponsive = document.querySelector(".menu-responsive");
console.log(menuResponsive);

let open = false;

button.addEventListener("click",()=>{
  open = !open;
  if(open){
    button.children[0].style.transform = "rotate(45deg)";
    button.children[1].style.opacity = 0;
    button.children[2].style.transform = "rotate(-45deg)";
    menuResponsive.classList.add("menu-responsive-active");
  }else{
    button.children[0].style.transform = "rotate(0)";
    button.children[1].style.opacity = 1;
    button.children[2].style.transform = "rotate(0)";
    menuResponsive.classList.remove("menu-responsive-active");
  }
})

