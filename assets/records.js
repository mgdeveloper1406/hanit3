//Container where scores will be displayed
var recordsDisplay = document.querySelector("#records-display");

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

  localStorage.setItem("savedRecords", JSON.stringify(savedRecords))
  }, 1000);
}




