const countItems = document.querySelector(".count");
const countDec = document.querySelector(".decrease");
const countInc = document.querySelector(".increase svg");
const selectedImg = document.querySelectorAll(".select-img img");
const mainImg = document.querySelector(".first-img");
const cartNumber = document.querySelector(".cart-nb");

countDec.addEventListener("click", () => {
  countItems.innerHTML > 0 ? (countItems.innerHTML -= 1) : 0;
  if (countItems.innerHTML > 0) {
    cartNumber.style.display = "block";
    cartNumber.innerHTML = countItems.innerHTML;
  } else {
    cartNumber.style.display = "none";
  }
});

countInc.addEventListener("click", () => {
  countItems.innerHTML = Number(countItems.innerHTML) + 1;
  if (countItems.innerHTML > 0) {
    cartNumber.style.display = "block";
    cartNumber.innerHTML = countItems.innerHTML;
  }
});

selectedImg.forEach((img) => {
  img.addEventListener("mouseover", () => {
    const number = String(img.src).slice(-15, -14);
    mainImg.src = `/images/image-product-${number}.jpg`;
  });
});
