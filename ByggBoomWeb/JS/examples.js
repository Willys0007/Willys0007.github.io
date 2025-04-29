const buttons = document.querySelectorAll("[data-carousel-button]") //spara knapparna med den attributen - alltså next och prev

buttons.forEach(button => { //Loppa igenom varje knapp
  button.addEventListener("click", () => { //kolla ifall någon trycker på knappen 
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 //Om knappen trycks gå antingen backåt eller framåt.
    const slides = button
      .closest("[data-carousel]") //Klättrar upp bland elementen till den hittar Data-carousel
      .querySelector("[data-slides]") //spara det elementet som innehåller slidsen

    const activeSlide = slides.querySelector("[data-active]") //I kombination med attributen active kollar den om sliden är aktiv
    let newIndex = [...slides.children].indexOf(activeSlide) + offset //arrayen newIndex tar indexen av den nuvarande sliden och lägger till 1 eller minus 1 beroende på prev eller next 
    if (newIndex < 0) newIndex = slides.children.length - 1 //ifall den är på första sliden och användaren trycker på tillbaka kommer den hoppa till sista
    if (newIndex >= slides.children.length) newIndex = 0 //Samma men ifall den är på sista

    slides.children[newIndex].dataset.active = true //kolla vilken slide den är på och ge den attributen active
    delete activeSlide.dataset.active //ta bort active från den tidigare sliden
  })
})