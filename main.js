const btnClose = document.querySelector(".btn-close");
const btnOpen = document.querySelector(".btn-open");
const socials = document.querySelector(".socials"),
  creator = document.querySelector(".creator");

const closeFunction = () => {
  creator.style.display = "block";
  socials.style.display = "none";
};
const openFunction = () => {
  creator.style.display = "none";
  socials.style.display = "flex";
};

btnClose.addEventListener("click", closeFunction);

btnOpen.addEventListener("click", openFunction);
