x = 0;
y = 0;

draw_apple = "";
speak_data = "";
apple = "";
to_number = "";
screen_width = 0;
screen_height = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  clear();
}

function clear(){
  cavas.background("pink");
}
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 to_number = Number(content);
 if(Number.isInteger(to_number)){
   draw_apple = "set";
 }
 else{
  document.getElementById("status").innerHTML = "The speech has been not recognized number";
 }

}

function preload(){
  apple = loadImage("https://i.postimg.cc/cCbFTN25/apple.png");
}

function setup() {
  screen_width = window.innerWidth;
  console.log(screen_width);
  screen_height = window.innerHeight;
  console.log(screen_height);
  canvas = createCanvas(screen_width-75,screen_height-125);
}

function draw() {
  if(draw_apple == "set")
  {
    for(i = 1; i <= to_number; i++){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*585);
      console.log(x);
      console.log(y);
      image(apple, x, y, 50, 50);
      console.log("image drawn");
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
      draw_apple = "";
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    to_number = 0;
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
