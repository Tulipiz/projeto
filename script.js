function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //se tiver light mode
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se não tiver light mode
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  //subistituir img
}
