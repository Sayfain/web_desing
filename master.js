import { getData } from "./javascript/getData.js";

let portfolioBox = document.getElementById("portfolio-box");
const data = getData("./portfolioItemsImgs.json");

data.then((data) => {
  data.forEach((item) => {
    portfolioBox.innerHTML += `
        <div class="portfolio-item">
            <img src="${item.img}" alt="portfolio_img" />
            <div class="portfolio-item-text">
                <h3>${item.title}</h3>
                <p>
                ${item.text}
                </p>
            </div>
        </div>
        `;
  });
});
const upButton = document.getElementById("up-button");
const pageHeight = document.documentElement.scrollHeight;

const handleScroll = () => {
  if (window.scrollY > pageHeight / 2) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("scroll", handleScroll);
upButton.addEventListener("click", scrollToTop);
