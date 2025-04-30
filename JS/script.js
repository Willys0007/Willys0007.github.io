
//Skapa variabler för hamburgar ikonen och menyn
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//Skapa en funktion som när man trycker på knappen kommer classen att synas. Detta relaterar till .active koden som skrevs i CSS:en
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
//Stänger menyn.
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
