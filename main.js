let header = document.querySelector(".header");
let cols = document.querySelectorAll(".col");

document.addEventListener("scroll", () => {
  let height = pageYOffset;
  if (height > 10) {
    header.classList.add("header-onscroll");
  } else {
    header.classList.remove("header-onscroll");
  }
});

const appearOptions = {
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

cols.forEach((col) => {
  appearOnScroll.observe(col);
});
