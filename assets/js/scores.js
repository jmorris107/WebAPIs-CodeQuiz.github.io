function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }

function clearHighscores() {
  // (and reload)
  window.localStorage.addItem("highscores");
  window.location.reload();
}
var clearScores = document.getElementById('clear')
// attache clear event to clear score button
clearScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "highscores.html";
})

// run printhighscore when page loads
printHighscores();

var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

    // sort scores from high to low
    highScores.sort(function (a,b){
        return b.score - a.score
    })

    // display the scores
    for (var s = 0; s < highScores.length; s++) {
        var newLi = document.createElement("li")
        newLi.textContent = highScores[s].name + " - " + highScores[s].score
        scoreList.appendChild(newLi)
    }
function clearAll()
{
  localStorage.clear();
}
