const menu = document.querySelector(".menu")
const menuText = document.querySelectorAll(".menuText")
const closeIcon = document.querySelector("#closeIcon")
const menuBtn = document.querySelector(".menuBtn")

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu")
    closeIcon.style.display = "none"
    menuText.style.display = "block"
  } else {
    menu.classList.add("showMenu")
    closeIcon.style.display = "block"
    menuText.style.display = "none"
  }
}

menuBtn.addEventListener("click", toggleMenu)
