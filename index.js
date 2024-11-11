const ourItemDiv = document.querySelectorAll(".price");
const ourItemDivtwo = document.querySelectorAll(".pricetwo");
const ourItemDivthree = document.querySelectorAll(".pricethree");
const ourItem = document.querySelectorAll(".accordion-content");
const ourItemm = document.querySelectorAll(".accordion-contenttwo");
const ourItemmm = document.querySelectorAll(".accordion-contentthree");

ourItemDiv.forEach((element) => {
  element.addEventListener("click", () => {
    const accordionItem = element.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");

    ourItem.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
      }
    });
    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = "0";
    }
  });
});

ourItemDivtwo.forEach((element) => {
  element.addEventListener("click", () => {
    const accordionItem = element.parentElement;
    const accordionContent = accordionItem.querySelector(
      ".accordion-contenttwo"
    );

    ourItemm.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
      }
    });
    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = "0";
    }
  });
});

ourItemDivthree.forEach((element) => {
  element.addEventListener("click", () => {
    const accordionItem = element.parentElement;
    const accordionContent = accordionItem.querySelector(
      ".accordion-contentthree"
    );

    ourItemmm.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
      }
    });
    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = "0";
    }
  });
});
