
  const accordionItems = document.querySelectorAll(".accordion");

  accordionItems.forEach((item) => {
    const accordionButton = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");

    accordionButton.addEventListener("click", function () {
      content.classList.toggle("accordion-content-active");
      if (accordionButton.innerHTML === "+") {
        accordionButton.innerHTML = "-";
      } else {
        accordionButton.innerHTML = "+";
      }
    });
  });
