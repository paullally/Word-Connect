//global scope variables
var score =0,lives =3,timer;
//function to end game by emptying the game container and adding html to display score and play again button
function gameover()
{
    $(".game").empty();
      timer=0;
    $(".game").append("<h1 class=' col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center my-5 bounce-in-top'>Game Over</h1><br><br>"+
    "<h1 class='text-center my-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 bounce-in-top'>You Scored: "+score+"</h1>"+"<br><br>"+
    "<button type='button' class='btn my-5 bounce-in-top' onclick='Startgame()'>Play Again</button>");
}
//compares the link input to the actaul link if its correct score gets added calls end game function since it its the last check 
 function checklink4(){
            let inputVal = document.getElementById("myInput").value;
            if(inputVal.toUpperCase().includes(link4.toUpperCase()))
            {
                score=score+1;
                $("#score").text(score);
            }
            gameover();
        }
//this empties the game container then displays the 4 words connected and an input box to guess the link once guess is input it will check answer
function guesslink4()
{
$(".game").empty();
$(".game").hide();
     $(".game").append( "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3 card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer4[0] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer4[1] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer4[2] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer4[3] +"</div>"+
     "<form class='form-inline my-5'>"+
        "<div class='form-group my-5'>"+
        "<input type='text' class='form-control' id='myInput'>"+
        "</div>"+
        "<button type='button'  class='btn'  onclick='checklink4();'>Check</button>"+
        "</form>");
     $(".game").fadeIn();
}
//compares the link input to the actaul link if its correct score gets added calls the next check function
 function checklink3(){
            let inputVal = document.getElementById("myInput").value;
            if(inputVal.toUpperCase().includes(link3.toUpperCase()))
            {
                score=score+1;
                $("#score").text(score);
            }
            guesslink4();
        }
        //this empties the game container then displays the 4 words connected and an input box to guess the link once guess is input it will check answer
function guesslink3()
{
$(".game").empty();
$(".game").hide();
     $(".game").append( "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer3[0] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer3[1] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer3[2] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer3[3] +"</div>"+
    "<form class='form-inline my-5'>"+
        "<div class='form-group my-5'>"+
        "<input type='text' class='form-control' id='myInput'>"+
        "</div>"+
        "<button type='button'  class='btn'  onclick='checklink3();'>Check</button>"+
        "</form>");
    $(".game").fadeIn();
}
//same function as other checks
 function checklink2(){
            let inputVal = document.getElementById("myInput").value;
            if(inputVal.toUpperCase().includes(link2.toUpperCase()))
            {
                score=score+1;
                $("#score").text(score);
            }
            guesslink3();
        }
        //same function as other guess
function guesslink2()
{
$(".game").empty();
$(".game").hide();
     $(".game").append( "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer2[0] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer2[1] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer2[2] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer2[3] +"</div>"+
      "<form class='form-inline my-5'>"+
        "<div class='form-group my-5'>"+
        "<input type='text' class='form-control' id='myInput'>"+
        "</div>"+
        "<button type='button'  class='btn'  onclick='checklink2();'>Check</button>"+
        "</form>");
    $(".game").fadeIn();
}
//same as other checks 
 function checklink1(){
            let inputVal = document.getElementById("myInput").value;
            if(inputVal.toUpperCase().includes(link1.toUpperCase()))
            {

                score=score+1;
                $("#score").text(score);
            }
            guesslink2();
        }
    //same as other guesses
function guesslink1()
{
    $(".game").fadeOut(1000);
    setTimeout(function(){
        $(".game").empty();
     $(".game").append( "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer1[0] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer1[1] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer1[2] +"</div>"+
     "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 my-3  card d-flex justify-content-center text-center z-depth-5 flip-in-hor-bottom'>" +answer1[3] +"</div>"+
      "<form class='form-inline my-5'>"+
        "<div class='form-group my-5'>"+
        "<input type='text' class='form-control' id='myInput'>"+
        "</div>"+
        "<button type='button'  class='btn'  onclick='checklink1();'>Check</button>"+
        "</form>");
    $(".game").fadeIn();
         }, 1000);
         
}
//this is called when the answer is correct it will change the tile colours to green and add them to the top of the game with an animation
function correct()
{
                for(let i =0; i<17; i++)
                {
                    if($(".card").eq(i).css("background-color")=="rgb(4, 139, 168)")
                    {
                         $(".card").eq(i).css("background-color","rgb(153, 194, 77)");
                          $(".card").eq(i).addClass( "slide-in-top" );
                          $(".game").prepend( $(".card").eq(i));
                    }
                }
}
//this function is called when answer is incorrect it will change the highlighted tiles back to normal colour 
function incorrect()
{
     setTimeout(function(){
          for(let i =0; i<17; i++)
                {
                    if($(".card").eq(i).css("background-color")=="rgb(4, 139, 168)")
                    {
                          $(".card").eq(i).css("background-color","rgb(255, 255, 255)");
                    }
                }
          }, 300);
}
// compares the users answer to the answer stored in the variables
function checkanswer1(check,answer1)
{
    let count =0;
    for(let i =0; i<check.length; i++)
    {
        if(answer1.includes(check[i]))
        {
                count=count+1;
        }

    }
    if(count==4)
        {
            return true;
        }
        return false;
}
// compares the users answer to the answer stored in the variables
function checkanswer2(check,answer2)
{
    let count =0;
    for(let i =0; i<check.length; i++)
    {
        if(answer2.includes(check[i]))
        {
                count=count+1;
        }
    }
    if(count==4)
        {
            return true;
        }
        return false;
}
// compares the users answer to the answer stored in the variables
function checkanswer3(check,answer3)
{
    let count =0;
    for(let i =0; i<check.length; i++)
    {
        if(answer3.includes(check[i]))
        {
                count=count+1;
        }
    }
    if(count==4)
        {
            return true;
        }
        return false;
}
// compares the users answer to the answer stored in the variables
function checkanswer4(check,answer4)
{
    let count =0;
    for(let i =0; i<check.length; i++)
    {
        if(answer4.includes(check[i]))
        {
                count=count+1;
        }

    }
    if(count==4)
        {
            return true;
        }
        return false;
}
// mixes the words list around 
function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));

        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

  /*
function that creates 4 random numbers that are not equal then has two other functions inside
*/
function Start() 
{
 $(".game").empty();

 let random = Math.floor(Math.random() * 20);
 let random1 = Math.floor(Math.random() * 20);
 let random2 = Math.floor(Math.random() * 20);
 let random3 = Math.floor(Math.random() * 20);
 
for(let i = 0; i<1000; i++)
{
    if(random == random1 || random == random2|| random == random3 )
    {
     random = Math.floor(Math.random() * 20);
     random1 = Math.floor(Math.random() * 20);
     random2 = Math.floor(Math.random() * 20);
     random3 = Math.floor(Math.random() * 20);
    
    }
    
    else if(random1 == random || random1 == random2|| random1 == random3)
    {
         random = Math.floor(Math.random() * 20);
         random1 = Math.floor(Math.random() * 20);
         random2 = Math.floor(Math.random() * 20);
         random3 = Math.floor(Math.random() * 20);
         
    }
    else if(random2 == random || random2 == random1|| random2 == random3)
    {
         random = Math.floor(Math.random() * 20);
         random1 = Math.floor(Math.random() * 20);
         random2 = Math.floor(Math.random() * 20);
         random3 = Math.floor(Math.random() * 20);
         
    }
    else if(random3 == random || random3 == random1|| random3 == random2)
    {
         random = Math.floor(Math.random() * 20);
         random1 = Math.floor(Math.random() * 20);
         random2 = Math.floor(Math.random() * 20);
         random3 = Math.floor(Math.random() * 20);
        
    }
    else
    {
        break;
        
    }
   
}
// this function opens the json file where all the words and links are stored picks 4 random ones and shuffles them around it also stores the answers and links respectivly to be able to check answers
$.getJSON("game.json", function(json) {
    window.answer1 = [json[random].first,json[random].second,json[random].third,json[random].fourth];
    window.link1 = json[random].Link;
    window.answer2 = [json[random1].first,json[random1].second,json[random1].third,json[random1].fourth];
    window.link2 = json[random1].Link;
    window.answer3 = [json[random2].first,json[random2].second,json[random2].third,json[random2].fourth];
    window.link3 = json[random2].Link;
    window.answer4 =  [json[random3].first,json[random3].second,json[random3].third,json[random3].fourth];
    window.link4 = json[random3].Link;
    const mix = [json[random].first,json[random].second,json[random].third,json[random].fourth,json[random1].first,json[random1].second,json[random1].third,json[random1].fourth,json[random2].first,json[random2].second,json[random2].third,json[random2].fourth,json[random3].first,json[random3].second,json[random3].third,json[random3].fourth];
    const mixed = shuffle(mix);
    let list = "";
    let i = 0;
    let check =[];
    mixed.map(() => {
        list += "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-2 card my-4 d-flex justify-content-center text-center z-depth-5 swirl-in-fwd'>" +
            mixed[i] +
            "</div>" ;
        i += 1;
    });
     $("#start").hide();
    $(".game").append(list);
    /*
function to change the colour of the cards on click to yellow and pushes the cards 
    a list once there is four it will call the check answers function that compares the list to the correct answers which are stored in the global variables above.
    once compared it will call the correct or incorrect function.
    it also have a check to see if your score is more then two which would impliement the lives part of the game and reduce lives if you get answer wrong
*/
    $(".card").click(function() {
        if( $(this).css("background-color")=="rgb(255, 255, 255)")
        {
            check.push(this.innerHTML);
             $(this).css("background-color", "rgb(4, 139, 168)");
        }
        else if ( $(this).css("background-color")=="rgb(4, 139, 168)")
        {
            $(this).css("background-color", "rgb(255, 255, 255)");
             check.pop(this.innerHTML);
        }   
        if(check.length==4)
        {
            const check1 =checkanswer1(check,answer1);
            const check2 =checkanswer2(check,answer2);
            const check3 =checkanswer2(check,answer3);
            const check4 =checkanswer2(check,answer4);
            if(check1 || check2 || check3 || check4) 
            {
                correct();
                check=[];
                score = score+1;
                $("#score").text(score);
            }
            else
            {
                incorrect();
                check=[];
                if(score>1)
                {
                    if(lives==3)
                    {
                         lives=lives-1;
                         $(".3").css("color", "rgb(0, 0, 0)");
                    }
                    else if(lives==2)
                    {
                        
                         lives=lives-1;
                         $(".2").css("color", "rgb(0, 0, 0)");
                    }
                    else
                    {
                          lives=lives-1;
                         $(".1").css("color", "rgb(0, 0, 0)");                    
                    }
                   
                }
            }
        }      
});
});
}
// this is the timer function that will start to count down and if your time is out or run out of lives or hit the max score it will call the gueslink function 
function startTimer(duration, display) {
    timer = duration;
    let minutes, seconds;
    let test= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0|| score==4||lives==0) {
           clearInterval(test);
           guesslink1();
        }
    }, 1000);
}
//this function calls the start timer function and sets the heart colours to red
function Startgame()
{
    score=0;
    lives=3;
     $(".1").css("color", "rgb(255, 0, 0)"); 
     $(".2").css("color", "rgb(255, 0, 0)"); 
     $(".3").css("color", "rgb(255, 0, 0)"); 
      $("#score").text(score);
    var fiveMinutes = 60 * 5;
    var display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    Start();
}
// this is the smart scroll for my navbar it hids nav on scroll down and shows it on scroll up 
if ($('.smart-scroll').length > 0) { 
    let last_scroll_top = 0;
    $(window).on('scroll', function() {
        let scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
//enter key would reset game if pressed on input added this to stop issues
$(window).keydown(function(event){
    if (event.keyCode === 13) {
        event.preventDefault();

    }
    
});


// this is the form submission it will connect to the google sheet and post the form data to it through the google sheet api
const scriptURL = 'https://script.google.com/macros/s/AKfycbw1SsCEX4L-RWIsgLhFg7jccwWq4_0esKMr1m__o3l2OPcKzMRWZAZqQLzivjeeFJ07/exec';
            const form = document.forms['google-sheet'];
            form.addEventListener('submit', e => {
              e.preventDefault();
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => setTimeout(function(){ document.getElementById('reply').classList.remove("hidden"); document.getElementById('myForm').classList.add("hidden")}, 1))
                .catch(error => console.error('Error!', error.message));
            });


        