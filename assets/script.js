var slider = document.getElementById("range");

slider.oninput = function () {
  output.innerHTML = this.value;
};

// started with the quote API and date display
var currentTimeEl = document.querySelector("#currentDay");
currentTimeEl.textContent = moment().format("dddd, MMMM Do YYYY");
var responseContainerEl = document.querySelector("#api");
var numRandom = Math.floor(Math.random() * 100);
function quoteAPI() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var quote = response[numRandom];
      var div = document.createElement("div");
      div.textContent = quote.text;
      responseContainerEl.append(div);
    });
}
quoteAPI();
// finished with the quote API and date display
