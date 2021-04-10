// started with the quote API and date display
var currentTimeEl = document.querySelector("#currentDay");
currentTimeEl.textContent = moment().format("dddd, MMMM Do YYYY");
var inApiEl = document.querySelector("#inApi");
var outApiEL = document.querySelector("#outApi");
var numRandom = Math.floor(Math.random() * 100);
function quoteAPI() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var quote = response[numRandom];
      var div = document.createElement("div");
      div.textContent = "💡  " + quote.text;
      inApiEl.append(div);
    });
}
quoteAPI();
// finished with the quote API and date display//

// Adding an activity to roster
var formEl = document.querySelector("#add-act");
var activitiesEl = document.querySelector("#activity-list");


var createActivity = function(event) {
  event.preventDefault();
// get user input 
  var activityNameInput = document.querySelector("input[name='act-name']").value;
  var activityScore = document.getElementById("range").value;

// outer layer holder 
  var actHolderEl = document.getElementById("actHolder");
  actHolderEl = document.createElement("li");
  actHolderEl.className = "activity list-group-item list-group-item-primary rounded p-2 m-2 d-flex justify-content-between d-flex align-items-center";

// first container for input 
  var eachInputEl = document.getElementById("eachInput");
  eachInputEl = document.createElement("span");
  eachInputEl.textContent = activityNameInput;
  actHolderEl.appendChild(eachInputEl)
// second container for scores 
  var eachScoreEl = document.getElementById("eachScore");
  eachScoreEl = document.createElement("span");
  eachScoreEl.textContent = activityScore + " / 10";
  actHolderEl.appendChild(eachScoreEl);
// delete button 
  var deleteBtnEl = document.getElementById("deleteBtn");
  deleteBtnEl = document.createElement("button");
  deleteBtnEl.className = "btn btn-outline-danger btn-sm"
  deleteBtnEl.textContent = "Delete";
  actHolderEl.appendChild(deleteBtnEl);

  // add the holder back to the activitiesEl
  activitiesEl.appendChild(actHolderEl);
};

formEl.addEventListener("submit", createActivity);

// this doesn't work :(

// var saveBtn = document.getElementById("save-activities")

// function computeScore() {
//   var allScores = document.querySelectorAll("#activity-score");
//   scoresArray = Array.from(allScores);
//   console.log(scoresArray);
// }

// saveBtn.addEventListener("click", computeScore);





// started with the achievement img API
function imgAPI() {
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=achievement&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response)
      outApiEL.innerHTML = '';
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      outApiEL.appendChild(gifImg);
    })
}
imgAPI();
// Finished with the achievement img API//

// started scrolling to top button function
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// finished scrolling to top button function//

