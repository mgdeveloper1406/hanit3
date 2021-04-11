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
var saveBtn = document.getElementById("save-activities")
var scoresArray = []; 
var scoreCardContainerEl = document.querySelector("scoreCardContainer");

var createActivity = function(event) {
  event.preventDefault();
// get user input 
  var activityNameInput = document.querySelector("input[name='act-name']").value;
  var activityScore = document.getElementById("range").value;
  if (!activityNameInput) {
    alert("You need to fill out the activity!");
    return false;
  }
  // in case where user did not input, alert the user

// outer layer holder 
  var actHolderEl = document.createElement("li");
  actHolderEl.className = "activity list-group-item list-group-item-primary rounded p-2 m-2 d-flex justify-content-between d-flex align-items-center ";

// first container for input 
  var eachInputEl = document.createElement("span");
  eachInputEl.textContent = activityNameInput;
  // something to fix is: so the sentence is too long, the word is covering the score section =[
  actHolderEl.appendChild(eachInputEl)
// second container for scores 
  var eachScoreEl = document.createElement("span");
  eachScoreEl.className = "position-absolute top-50 start-50 translate-middle";
  eachScoreEl.textContent = activityScore + " / 10";
  actHolderEl.appendChild(eachScoreEl);
// delete button 
  var deleteBtnEl = document.createElement("button");
  deleteBtnEl.className = "btn btn-outline-danger btn-sm"
  deleteBtnEl.textContent = "Delete";
  actHolderEl.appendChild(deleteBtnEl);

  // add the holder back to the activitiesEl
  activitiesEl.appendChild(actHolderEl);

  // using an array to store each of the score, I think it would be easier when we try to delete a score 
  scoresArray.push(activityScore);

  //Clear input after it is added to task list
  document.querySelector("input[name='act-name']").value="";

};


var createScoreCard = function(event) {
  event.preventDefault();
  var scoreCardHolderEl = document.createElement("div");
  scoreCardHolderEl.className = "card border-success m-3";
  scoreCardHolderEl.style = "max-width: 18rem;";
  // card holder 

  var scoreCardHeaderEl = document.createElement("div");
  scoreCardHeaderEl.className = "card-header";
  scoreCardHeaderEl.textContent = currentTimeEl;
  scoreCardHolderEl.appendChild(scoreCardHeaderEl);
  // put card header in holder 

  var scoreCardBodyEl = document.createElement("div");
  scoreCardBodyEl.className = "card-body text-primary";

  var scoreCardScoreEl = document.createElement("h5");
  scoreCardScoreEl.className = "card-title";
  scoreCardScoreEl.textContent = scoreSumEl;
  scoreCardBodyEl.appendChild(scoreCardScoreEl);
  // put card score in card body 

  scoreCardHolderEl.appendChild(scoreCardBodyEl)
  // put card body in holder 
  scoreCardContainerEl.appendChild(scoreCardHolderEl)
  // put holder back in container that points to scoreCardContainer id in the HTML
}

function computeScore() {
  var scoreSumEl = document.getElementById("scoreSum")
  scoreSumEl.textContent = scoresArray.reduceRight(function(a,b){return parseInt(a)+parseInt(b);});
  ScoreSumEl.textContent = finalScore
  // translate the string in the array into int, add them together and assign them back to #scoreSum section

}

localStorage.setItem("dailyScore", finalScore);
localStorage.setItem("date", moment().format("MMM Do YYYY"));

formEl.addEventListener("submit", createActivity);
// formEl is selected to #add-act, when user click submit, the createActivity function will be called 
saveBtn.addEventListener("click", createScoreCard);
// create a score card when the user click the save activities button 
saveBtn.addEventListener("click", computeScore);
// saveBtn is selected to #add-act, when the user clicks save activities, the function computeScore will be called


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

