function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  let img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute("source", "./assets/avatar.png")
  }else{
    img.setAttribute("source", "./assets/avatar-light.png")
  }

}