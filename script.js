let clickedText = null;
let arrows = document.querySelectorAll(".arrowDown");

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("textP")) {
    if (clickedText && clickedText !== event.target) {
      clickedText.style.fontWeight = '400';
      clickedText.classList.remove("active");
      clickedText.querySelector(".pokliku").style.display = "none";
    } else if (clickedText === event.target) { // Dodane sprawdzenie, czy kliknięto ten sam element
      event.target.style.fontWeight = '400';
      event.target.classList.remove("active");
      event.target.querySelector(".pokliku").style.display = "none";
      clickedText = null;
      return; // Przerwanie działania funkcji po ukryciu elementu
    }

    arrows.forEach((arrow) => {
      arrow.style.transform = "scaleY(1)";
    });

    let arrow = event.target.querySelector(".arrowDown");
    arrow.style.transform = "scaleY(-1)";

    event.target.style.fontWeight = '700';
    event.target.classList.add("active");
    event.target.querySelector(".pokliku").style.display = "block";

    clickedText = event.target;
  }
});
