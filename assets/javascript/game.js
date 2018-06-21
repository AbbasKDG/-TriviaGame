$("#timer").hide();
x=0;
var start=false;
$('#qsid').hide();
$('#ansid').hide();
$(".results").hide();
$('#options').hide();


    
   





///values initialized and timer activated

function Initialize(){
    if (start==false)
    var start=true
    var x=30
    $('#start').hide();
    
    $('#qsid').show();
    $('#ansid').show();
    //push all question statements
    $('#options').show();
    //push all option buttons
    $('#timer').show();
    $("#timer").html(x);

var questions=["What does HTML stand for?",
"Who is making the Web standards?",
 "Choose the correct HTML element for the largest heading:", 
 "What is the correct HTML element for inserting a line break?",
 "Choose the correct HTML element to define important text"];
var answers=[
    ["Hyperlinks and Text Markup Language","Hyper Text Markup Language","Home Tool Markup Language"],
    ["The World Wide Web Consortium","Mozilla","Google","Microsoft"],
    ["heading","h6","head","h1"],
    ["br","break","lb"],
    ["strong","i","b","important"]
    
]
//var Ans=["Hyperlinks and Text Markup Language", 
//"The World Wide Web Consortium","<h1>","<br>","<strong>"]
// answers[0][1], answers[1][0], answers[2][3], answers[3][0], answers[4][0]

$("#qsid").append("<h5>"+questions[0]+"</h5>");
$("#qsid").append("<button>"+answers[0][0]+"</button>");
$("#qsid").append("<button id="+"corr"+">"+answers[0][1]+"</button>");
$("#qsid").append("<button>"+answers[0][2]+"</button>");


$("#qsid").append("<h5>"+questions[1]+"</h5>");
$("#qsid").append("<buttonid="+"corr"+">"+answers[1][0]+"</button>");
$("#qsid").append("<button>"+answers[1][1]+"</button>");
$("#qsid").append("<button>"+answers[1][2]+"</button>");
$("#qsid").append("<button>"+answers[1][3]+"</button>");

$("#qsid").append("<h5>"+questions[2]+"</h5>");
$("#qsid").append("<button>"+answers[2][0]+"</button>");
$("#qsid").append("<button>"+answers[2][1]+"</button>");
$("#qsid").append("<button>"+answers[2][2]+"</button>");
$("#qsid").append("<button id="+"corr"+">"+answers[2][3]+"</button>");


$("#qsid").append("<h5>"+questions[3]+"</h5>");
$("#qsid").append("<button id="+"corr"+">"+answers[3][0]+"</button>");
$("#qsid").append("<button>"+answers[3][1]+"</button>");
$("#qsid").append("<button>"+answers[3][2]+"</button>");



$("#qsid").append("<h5>"+questions[4]+"</h5>");
$("#qsid").append("<button id="+"corr"+">"+answers[4][0]+"</button>");
$("#qsid").append("<button>"+answers[4][1]+"</button>");
$("#qsid").append("<button>"+answers[4][2]+"</button>");
$("#qsid").append("<button>"+answers[4][3]+"</button>");









  /*  for(i=0;i<questions.length;i++){
        // Print Qestions
        $("#qsid").append(questions[i]);
        // Print Ans Buttons
        for(j=0;questions.length;j++){

        $("#qsid").append("<button>"+answers[i][j]+"</button>");
        }

    } */
    


    //all events must occur inside the setInterval condition
    
    if(x>0  ){
        Time=setInterval(function(){ 

           // $("Qsec").on("click", function () {}

            


            if(x===0){
                
                
        
                clearInterval(Time);
                //declare
                $("#qsid").hide();
                $(".container").hide();
                $("#corr").hide();
                $(".Qsec").hide();
                $("#ansid").hide();
                $("#timer").hide();
                $(".results").show();
                $("#correct").html(corr);
                $("#wrong").html(incorr);
                $("#unans").html(5-corr-incorr);
                alert(Correct+" correct, "+Wrong+" wrong and "+(5-Correct-Wrong)+" were unanswered!")


                
            
                
            }
            $("#timer").html(x)
            x=x-1
        }, 100);

       // if QsShown===false
    
    }
    
    

}



//on click - hide start - call first question -


//document.ready - call initialization/reset function 

$(document).ready(function() {
   
    
    //Start button initializes function
   $('#start').on("click", function() {
    
    

    Initialize();
    });

  
    
});