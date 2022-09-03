const ham = document.querySelector(".ham");
const dropBtn = document.querySelectorAll('.drop-btn')
const MB_Nav=document.querySelector(".mobile-nav")
const dropdownContent = document.querySelectorAll(".dropdown-content")
const heroImg = document.querySelector('#hero-img')
ham.addEventListener("click", (e) => {
 MB_Nav.classList.add("show");
  // document.querySelector("body").style.background = "#777";
    heroImg.classList.add('darken-img')
    document.querySelector("body").classList.add('lock')
    document.querySelector('.overlay').style.display ='block'
});
document.querySelector("#close").addEventListener("click", (e) => {
  MB_Nav.classList.remove("show");
        document.querySelector("body").classList.remove('lock')
  heroImg.classList.remove('darken-img')
    document.querySelector('.overlay').style.display ='none'
});
