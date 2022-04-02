const hamburger = document.querySelector(".hamburger-menu")
const siteNav = document.querySelector(".site-nav")

// some petty functions
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active")
  siteNav.classList.toggle("active")
})
