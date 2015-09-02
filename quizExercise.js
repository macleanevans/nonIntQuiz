

var quiz = [
  {question : "Who is the only person that has won the Heisman twice?",
   answers : ["Archie Griffin", "Fred Flintstone", "Kanye West"],
   correct : "archie griffin"
 },
   {question : "Who is the rich man on Gilligan's Island?",
   answers : ["Archie Griffin", "Mr. Howell", "Kanye West"],
   correct : "mr. howell"
 },
   {question : "Who is the best guitarist?",
   answers : ["Archie Griffin", "Fred Flintstone", "Jimi Hendrix"],
   correct : "jimi hendrix"
 }]

function runQuiz() {
  for (var i = 0; i < quiz.length; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(quiz[i].answers[j]);
    }
    var answer = (prompt(quiz[i].question));
    if (answer.toLowerCase() === quiz[i].correct) {
      console.log("You win");
    } else {
      console.log("You lose");
    }
  }
}
 
