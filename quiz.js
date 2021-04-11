var score = 0;
var readlineSync =  require ("readline-sync");
var username = readlineSync.question("what is your name ?");
 console.log(" HELLO  "+ username  + " !");
 console.log('welcome to the quiz  lets see how much you know about me ') 

var questions = [{
  question : "which city am i from?  ",
    answer : "nagpur"
}, {
  question: "do i like sunrises or sunsets?   ",
   answer : "sunsets"
}, {
  question : " would i choose cricket or football  ",
   answer : "football"
},{
  question : "what is my fav computer game?  ",
   answer : "valorant" 
 }
];

function play (question,answer){ 
  var useranswer = readlineSync.question(question);

  if (useranswer == answer) {
  score = score + 1;
  console.log("correct")
  console.log( score );
  }
  else {
    score = score -1;
  console.log( "wrong");
  }
  console.log("current score" + score);
}
 
   for (var i=0; i< questions.length; i++){
    var currentquestion = questions[i];
    play (currentquestion.question,currentquestion.answer)
   }
   console.log(" yay your score is " + score);
   console.log("thanks for playing")