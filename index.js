var readlineSync = require("readline-sync");
const chalk = require("chalk");
var rankholders = [{Name : "Shubham",
                    Score : 11}] // Scoreboard
var friends = ["Shubham"]; //Friends List
var score = 0;
var difficulty = 0;

var name = readlineSync.question("Please enter your name? \n\n"); //Players Name

//Just to sort rankholders based on their score
function compare(a, b){
  //Checking Score
  if (a.Score > b.Score){
    return -11;
  }
  else if(a.Score < b.Score){
    return 1;
  }
  else{
    return
  }
}

//Fucntion to display scoreboard
function scoreboard(rankholders){
  rankholders.sort(compare); //Sort the score board
  console.log("Scoreboard\n");

  for(var x = 0; x < rankholders.length; x++){
    console.log(rankholders[x].Name,"     ", rankholders[x].Score, "\n");
  }
  console.log("Please send me screenshot!!!") // To update scoreboard and friend list/array
}

//QnA begins from here
function askyourfriend(qsn, options, ans, iteration){
  difficulty++;
  console.log(chalk.bgGreen.bold.black("Question No ", iteration, "\n"))
  console.log(chalk.bgWhite.bold.red(qsn));  // Question
  var index = readlineSync.keyInSelect(options, "What do you think? ") //User Answer

  if(index == -1){ //Cancel Feature
    console.log(chalk.bgWhite.bold.blue("Dude got no chill!! \n"))
  }
  
  //Validating user's answer
  else if(index === ans){
    console.log(chalk.bold.blue("You are right ", name));
    score++;
    console.log(chalk.bgWhite.bold.blue("Score : ", score));
  }

  //If the answer isn't correct
  else{
    console.log(chalk.bold.red("No worries you can still do better!! \n"));
    console.log(chalk.bgWhite.bold.red("Score : ", score, "\n"))
  }
  if(difficulty % 5 == 0){
    console.log("\n\n",chalk.bgBlue.bold.white("              Hurray!!! Level UP!!       🎉✨ "), "\n\n");
  }
}

//Driver Code

function main(){
  
  // One can not play this came again n again
  if(friends.includes(name)){
    console.log(chalk.bgBlack.bold.yellow("Sorry! ",name, ". You can't play it twice."))
    return; //Returning nothing, pass the control back to function call
  }
  console.log(chalk.bgWhite.bold.red("Shubham and Neogcamp welcome you to Python Quiz "), "\n\n");
  // Top-Secret
  var myself = [
    {
      question : "Who developed the Python language?",
      options : ["Zim Den", "Guido van Rossum", "Niene Stom"],
      answer : 1
    },
    {
      question : "In which year was the Python language developed?",
      options : [1981, 1976, 1989],
      answer : 2
    },
    {
      question : " In which language is Python written?",
      options : ["Ruby", "English", "C"],
      answer : 2
    },
    {
      question : "Which one of the following is the correct extension of the Python file? ",
      options : [".pye", ".py", ".python"],
      answer : 1
    },
    {
      question : "In which year was the Python 3.0 version developed? ",
      options : [2009,2008,2005],
      answer : 0
    },
    {
    question : "What do we use to define a block of code in Python language?",
    options : ["none", "keys", "Indentation"],
    asnwer : 2
    },
    {
      question : " Which character is used in Python to make a single line comment? ",
      options : ["*/", "/", "#"],
      answer : 2
    },
    {
      question : "What is the method inside the class in python language?",
      options : ["function", "Object", "class"],
      answer : 0
    },
    {
      question : "Which of the following is not a keyword in Python language? ",
      options : ["val", "raise", "except"],
      answer : 0
    },
    {
      question : "Which of the following words cannot be a variable in python language?",
      options : ["try", "_except", "_var"],
      answer : 0
    },
    {
      question : "Which of the following operators is the correct option for power(ab)? ",
      options : ["a**b", "$$@r", "2*9"],
      answer : 0
    },
    {
      question : "Which one of the following has the same precedence level? ",
      options : ["Division Power", "Division and Multiplication"," Addition" ],

      answer : 1
    },
    {
      question : "Which one of the following has the highest precedence in the expression? ",
      options : ['Division','Parentheses','Power'],
      answer : 1
    },
    {
      question : "python is a compeletely what type of language?",
      options : ["magical", "Dynamic", "indent"],
      answer : 1,
    },
    {
      question : "Which of the following functions is a built-in function in python language?",
      options : ["int()", "print()","val()"],
      answer : 2
    }
  ];

  //Iterating over each QnA and passing it to the function "askyourfriend"
  for (var x = 1; x <= myself.length; x ++){
    askyourfriend(myself[x -1].question, myself[x -1].options, myself[x-1].answer, x)
  }

  //Clear all the previous code
  console.clear();

  //After successfull QnA session, Now append the user's name into the list
  friends.push(name);

  // Along with his/her name ans score
  rankholders.push({Name : name,
                    Score  : score});
  scoreboard(rankholders) //It's Display time
}

// Exectuion begins from here
main()