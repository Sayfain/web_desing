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

console.log(window.scrollX);
document.addEventListener("scroll", (e) => {
  if (window.scrollX > 400) {
    window.scroll(0, 0);
  }
});
