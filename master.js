let portfolioBox = document.getElementById("portfolio-box");
async function getData(datLink) {
  try {
    const fetchData = await fetch(datLink);
    const data = await fetchData.json();
    return data;
  } catch (error) {
    console.log(Error(error));
  }
}
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
