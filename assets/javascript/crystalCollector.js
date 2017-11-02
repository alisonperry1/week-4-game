$(document).ready(function() {
var yourMatchingNumber = 0;
var randomNum = randomNumGen();
var wins = 0;
var losses = 0;
var crystals;
function randomNumCrystals() {
return {
pink: {
points: Math.floor(Math.random() * 12) + 1,
imageUrl: "assets/images/pink.png"
},
blue: {
points: Math.floor(Math.random() * 12) + 1,
imageUrl: "assets/images/blue.png"
},
purple: {
points: Math.floor(Math.random() * 12) + 1,
imageUrl: "assets/images/purple.png"
},
clear: {
points: Math.floor(Math.random() * 12) + 1,
imageUrl: "assets/images/clear.png"
}
};
}
function randomNumGen() {
return Math.floor(Math.random() * 100) + 10;
}
function setGame() {
yourMatchingNumber = 0;
crystals = randomNumCrystals();
randomNum = randomNumGen();
$("#random-area").text(randomNum);
}
function updateDom(didUserWin) {
$("#win-area").empty();
if (didUserWin === true) {
$("#win-area").append($("<p>").text("Winner"));
  setGame();
  renderMatchingNumber();
  }
  else if (didUserWin === false) {
  
  $("#win-area").append($("<p>").text("Loser"));
    setGame();
    renderMatchingNumber();
    }
    
    var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
        var pWins = $("<p>").text("Wins: ");
          var pLosses = $("<p>").text("Losses: ");
            pWins.append(wSpan);
            pLosses.append(lSpan);
            $("#win-area").append(pWins);
            $("#win-area").append(pLosses);
            }
            
            function renderCrystals() {
            for (var key in crystals) {
            var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
              var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
              crystalDiv.append(crystalImg);
              $("#crystal-area").append(crystalDiv);
              }
              }
              
              function updateMatchingNumber(crystal) {
              
              yourMatchingNumber += crystals[crystal.attr("data-name")].points;
              }
              
              function renderMatchingNumber() {
              var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
                $("#score-area").html();
                $("#score-area").html(scoreNumDiv);
                }
                
                setGame();
                updateDom();
                renderCrystals();
                renderMatchingNumber();
                
                $(".crystals-button").on("click", function(event) {
                
                updateMatchingNumber($(this));
                renderMatchingNumber();
                
                if (yourMatchingNumber === randomNum) {
                
                wins++;
                setGame();
                updateDom(true);
                }
                
                else if (yourMatchingNumber > randomNum) {
                
                losses++;
                setGame();
                updateDom(false);
                }
                });
                });