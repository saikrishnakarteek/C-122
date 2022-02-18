 x = 0;
 y = 0;
 draw_circle = "";
 draw_rect = "";
 

  

var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

 function start(){

    document.getElementById("status").innerHTML = "The system is listening to you, please speak.";
     recognition.start();
 }


    recognition.onresult = function(event) {

        console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "This speech is recognized as " +content;
     
      if(content == "circle") {
           x = Math.floor(Math.random()*900);
           y = Math.floor(Math.random()*600);

           document.getElementById("status").innerHTML = "The system has startd drawing the cricle";
           draw_circle = "set";
      }
  
      if(content == "rectangle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML = "The system has startd drawing the rectangle";
        draw_rect = "set";
   }
    }

    function setup() {
        canvas = createCanvas(900,600);
    }

      
    function draw(){
        if (draw_circle == "set"){
            radius= Math.floor(Math.random()*100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML = "The circle has been drawn";
            draw_circle = "";
        }
        if (draw_rect == "set"){
            rect(x,y,70,50);
            document.getElementById("status").innerHTML = "The rectangle has been drawn";
            draw_rect = "";
        }
    }
