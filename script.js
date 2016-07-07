var counter = 1;
var arrayOfIcons = ["devicon-python-plain","devicon-github-plain","devicon-apache-line","devicon-atom-original","devicon-ruby-plain","devicon-java-plain", "devicon-chrome-plain", "devicon-firefox-plain", "devicon-jquery-plain", "devicon-rails-plain"];
var userAnswers = [];
var correctAnswers = ["python", "github", "apache", "atom", "ruby", "java", "chrome", "firefox", "jquery", "rails"];

function startGame() {
  document.getElementById("beforeGame").style.display = "none";
  document.getElementById("inGame").style.display = "inline";
  document.getElementById("guessbox").focus();
}

function submit() {
  userAnswers.push(document.getElementById("guessbox").value.replace(/\s+/g, '').toLowerCase());
  if (counter >= arrayOfIcons.length) {
    endGame();
  }
  document.getElementById("guessbox").value = "";
  document.getElementById("guessbox").focus();
  document.getElementById("image").className = arrayOfIcons[counter];
  counter++;
}

function endGame() {
  var score = 0;
  var missedAnswers = [];
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] == correctAnswers[i]) {
      score++;
    } else {
      missedAnswers.push(" " + correctAnswers[i]);
    }
  }
  document.getElementById("score").innerHTML = score + " / " + correctAnswers.length;
  if (score < correctAnswers.length) {
    document.getElementById("missed").innerHTML = "(In case you were wondering, you missed: " + missedAnswers + ")";
  }
  document.getElementById("inGame").style.display = "none";
  document.getElementById("afterGame").style.display = "inline";
}

document.getElementById("playBtn").onclick = function() {startGame()};
document.getElementById("submitBtn").onclick = function() {submit()};
document.getElementById("guessbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submitBtn").click();
    }
});
