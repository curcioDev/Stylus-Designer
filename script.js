function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  img.setAttribute(
    "src",
    html.classList.contains("light")
      ? "assets/logo-light.png"
      : "assets/logo.png"
  )
}
