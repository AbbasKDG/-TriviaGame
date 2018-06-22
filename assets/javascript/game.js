
var questions=["What does HTML stand for?",
"Who is making the Web standards?",
 "Choose the correct HTML element for the largest heading:", 
 "What is the correct HTML element for inserting a line break?",
 "Choose the correct HTML element to define important text"];
var options=[
    ["Hyperlinks and Text Markup Language","Hyper Text Markup Language",
    "Home Tool Markup Language"],
    ["The World Wide Web Consortium","Mozilla","Google","Microsoft"],
    ["heading","h6","head","h1"],
    ["br","break","lb"],
    ["strong","i","b","bold"]
    
]

var answer=[
    "Hyper Text Markup Language","The World Wide Web Consortium",
    "h1","br","strong"]


var timer=30;
var correct= 0;
var incorrect= 0;

function results() {
    clearInterval(timer);
    $("#Game").html("");
    $("#board h4").remove();
    $("#Game").append("<h3> Correct: " + this.correct + "</h3>");
    $("#Game").append("<h3> Incorrect: " + this.incorrect + "</h3>");
    $("#Game").append("<h3> Left: " + (questions.length - this.incorrect - this.correct) + "</h3>");

}


$(document).on("click", "#gameOver", function(event){
    gameOver();
  });


  function Timer() {
      timer--;
      
  	$("#timer").html(timer);

  	if (timer===0) {
  		
        gameOver();

  	}
  }

  

    function gameOver() {
        clearInterval(Count);
        
        $.each($("input[name='answer:0']:checked"), function() {
            if ($(this).val() == answer[0]) {
                console.log(this);
                  correct++;
            } else {
                incorrect++;
            }

        });
        $.each($("input[name='answer:1']:checked"), function() {
            if ($(this).val() == answer[1]) {
                console.log(this);
                correct++;
            } else {
                incorrect++;
            }

        });
        $.each($("input[name='answer:2']:checked"), function() {
            if ($(this).val() == answer[2]) {
                console.log(this);
                correct++;
            } else {
                incorrect++;
            }

        });
        $.each($("input[name='answer:3']:checked"), function() {
            if ($(this).val() == answer[3]) {
                console.log(this);
                correct++;
            } else {
                incorrect++;
            }

        });
        $.each($("input[name='answer:4']:checked"), function() {
            if ($(this).val() == answer[4]) {
                console.log(this);
                correct++;
            } else {
                incorrect++;
            }

        });
  		this.results();
  	}


      function start() {
      
        $(".jumbotron").addClass("scroll");
        $('#board').prepend('<h2>Time Remaining: <span id="timer">30</span> Seconds</h2>');
        $("#start").remove();
        
  
        for (var i = 0; i < questions.length; i++) {
          $("#Game").append('<h2>' + questions[i] + '</h2>');
        for (var j = 0; j < options[i].length; j++){
          $("#Game").append('<input type="radio" name ="answer' + ':' + i + '"value="' + options[i][j] + '">' + options[i][j]);
          console.log()
          
            }
            
      }
            
      $("#Game").append("<div><button class='submit' id='gameOver'>Submit</button></div>");
  
            Count = setInterval(Timer, 1000);
          
        
        }
  	  

        
        
        $(document).on("click", "#start", function(event){
            start();
          });
        
        


