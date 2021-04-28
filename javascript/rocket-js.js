// JavaScript Document

var timer = null;
var countdownNumber = 10
var x = document.getElementById("sequence1");
var y = document.getElementById("sequence2");
var z = document.getElementById("sequence3");


//change state function

var changeState = function (state) {
    document.body.className = 'body-state' +state;
    clearInterval(timer);
// if statement for state 2 - starting countdown
        if (state == 2) {
            timer = setInterval(function () {
            document.getElementById ('countdown').innerHTML = countdownNumber;
            countdownNumber = countdownNumber -1;
            }, 500);
            var launch = function () {   
    if (countdownNumber > 6) { 
                            x.style.display = "block";
                            y.style.display = "none";
                            z.style.display = "none"; 
                            alert('wtf');}
//sequence 2   
    else if (countdownNumber < 6 && countdownNumber > 3){
                 
                            x.style.display = "none";
                            y.style.display = "block";
                            z.style.display = "none";} 
//sequence 3    
    else if (countdownNumber < 3 && countdownNumber > -2){           
                            x.style.display = "none";
                            y.style.display = "none";
                            z.style.display = "block";} }}
    

}
// condition countdown number Bowie Style




//success launch
            

//    if (countdownNumber <= -2) {
 //               changeState(3);}

 //   else if (state == 3) {
 //           var success = setTimeout(function()
  //              { var randomNumber = Math.round (math.random()*10);
   //             },2000);}

// failed launch
                                 
 //  console.log('Random Number:', randomNumber)
            
 //   if (randomNumber > 5) {changeState(4);}

 //   else {changeState(5); }, 2000);}