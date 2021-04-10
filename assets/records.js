//Container where scores will be displayed
var recordsDisplay = document.querySelector("#records-display");
var savedRecords = JSON.parse(localStorage.getItem("savedRecords")) || []

//Function where scores and date will be taken from local storage and displayed on page

savingRecords = event => {

  setTimeout(function(){ 
  var savedRecords = JSON.parse(localStorage.getItem("savedRecords")) || []

  event.preventDefault()

  //When score is computed save the date and score to local storage
  
  var scoreRecords = {
    saveDate: localStorage.getItem("date"),
    saveScore: localStorage.getItem("dailyScore")
  };

  savedRecords.push(scoreRecords);

  savedRecords.splice(30);

  localStorage.setItem("savedRecords", JSON.stringify(savedRecords))
  }, 1000);
}

//Retrieve scores array from local storage and return each as a success, danger, or neutral card to create the records page
recordsDisplay.innerHTML = savedRecords.map(record => {
  if (record.saveScore > 50) {
    return `                
    <div class="card border-success m-3 " style="max-width: 18rem;">
    <div class="card-header">${record.saveDate}</div>
    <div class="card-body text-success">
        <h5 class="card-title">${record.saveScore}</h5>
        <p class="card-text">What a succesful day
        !</p>
    </div>
    </div>`
  }
}).join("")





