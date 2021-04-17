var counter =0;
var score =0;
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
function Start() {
var fiveMinutes = 60 *5
display = document.querySelector('#time');
startTimer(fiveMinutes, display);
var random = Math.floor(Math.random() * 10);
var random1 = Math.floor(Math.random() * 10);
var random2 = Math.floor(Math.random() * 10);
var random3 = Math.floor(Math.random() * 10);
$.getJSON("game.json", function(json) {
     window.answer1 = [json[random].first,json[random].second,json[random].third,json[random].fourth]
    window.link1 = json[random].Link
    window.answer2 = [json[random1].first,json[random1].second,json[random1].third,json[random1].fourth]
    window.link2 = json[random1].link
    window.answer3 = [json[random2].first,json[random2].second,json[random2].third,json[random2].fourth]
    window.link3 = json[random3].link
    window.answer4 =  [json[random3].first,json[random3].second,json[random3].third,json[random3].fourth]
    window.link4 = json[random3].link
    var mix = [json[random].first,json[random].second,json[random].third,json[random].Link,json[random1].first,json[random1].second,json[random1].third,json[random1].Link,json[random2].first,json[random2].second,json[random2].third,json[random2].Link,json[random3].first,json[random3].second,json[random3].third,json[random3].Link]
    var mixed = shuffle(mix);
    var lives =3;
    let list = "";
    let i = 0;
    let check =[]
    mixed.map(() => {
        list += "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +
            mixed[i] +
            "</div>" ;
        i += 1;
    });
     $("#start").addClass("hidden");
    $(".game").append(list);
    $(".card").click(function() {
        if( $(this).css("background-color")=="rgb(128, 128, 128)")
        {
            check.push(this.innerHTML)
             $(this).css("background-color", "yellow");
        }
        else if ( $(this).css("background-color")=="rgb(255, 255, 0)")
        {
            $(this).css("background-color", "grey");
             check.pop(this.innerHTML)
        }   
        if(check.length==4)
        {
            var check1 =checkanswer1(check,answer1)
            var check2 =checkanswer2(check,answer2)
            var check3 =checkanswer2(check,answer3)
            var check4 =checkanswer2(check,answer4)
            if(check1 || check2 || check3 || check4) 
            {
                correct();
                check=[];
                score = score+1;
                $("#score").text(score)
            }
            else
            {
                incorrect();
                check=[];
                if(score>1)
                {
                    lives=lives-1
                    $("#lives").text(lives)
                }
            }
        }
        if(score==4)
        {
             guesslink1()
        }
        if(lives==0)
        {
             guesslink1()
        }       
});
});
}
function checkanswer1(check,answer1)
{
    var count =0;
    for(var i =0; i<check.length; i++)
    {
        if(answer1.includes(check[i]))
        {
                count=count+1;
        }

    }
    if(count==4)
        {
            return true
        }
        return false;
}
function checkanswer2(check,answer2)
{
    var count =0;
    for(var i =0; i<check.length; i++)
    {
        if(answer2.includes(check[i]))
        {
                count=count+1;
                console.log(count)
        }

    }
    if(count==4)
        {
            return true
        }
        return false;
}
function checkanswer3(check,answer3)
{
    var count =0;
    for(var i =0; i<check.length; i++)
    {
        if(answer3.includes(check[i]))
        {
                count=count+1;
                console.log(count)
        }

    }
    if(count==4)
        {
            return true
        }
        return false;
}
function checkanswer4(check,answer4)
{
    var count =0;
    for(var i =0; i<check.length; i++)
    {
        if(answer4.includes(check[i]))
        {
                count=count+1;
                console.log(count)
        }

    }
    if(count==4)
        {
            return true
        }
        return false;
}
function correct()
{
                for(var i =0; i<17; i++)
                {
                    if($(".card").eq(i).css("background-color")=="rgb(255, 255, 0)")
                    {
                         $(".card").eq(i).css("background-color","green")
                          $(".game").prepend( $(".card").eq(i));
                    }
                }
}
function incorrect()
{
     setTimeout(function(){
          for(var i =0; i<17; i++)
                {
                    if($(".card").eq(i).css("background-color")=="rgb(255, 255, 0)")
                    {
                          $(".card").eq(i).css("background-color","grey")
                    }
                }
          }, 300);
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(timer==0)
        {
             guesslink1()
        }
    }, 1000);
}

function guesslink1()
{
$(".game").empty()
     $(".game").append( "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer1[0] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer1[1] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer1[2] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer1[3] +"</div>"+
      "<input type='text' id='myInput'>"+
    "<button type='button' onclick='checklink1();'>Get Value</button>");


}
 function checklink1(){
            var inputVal = document.getElementById("myInput").value;
            if(inputVal==link1)
            {
                score=score+1
                $("#score").text(score)
            }
            guesslink2()
        }
function guesslink2()
{
$(".game").empty()
     $(".game").append( "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer2[0] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer2[1] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer2[2] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer2[3] +"</div>"+
      "<input type='text' id='myInput'>"+
    "<button type='button' onclick='checklink2();'>Get Value</button>");
}
 function checklink2(){
            var inputVal = document.getElementById("myInput").value;
            if(inputVal==link1)
            {
                score=score+1
                $("#score").text(score)
            }
            guesslink3()
        }
function guesslink3()
{
$(".game").empty()
     $(".game").append( "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer3[0] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer3[1] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer3[2] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer3[3] +"</div>"+
      "<input type='text' id='myInput'>"+
    "<button type='button' onclick='checklink3();'>Get Value</button>");
}
 function checklink3(){
            var inputVal = document.getElementById("myInput").value;
            if(inputVal==link1)
            {
                score=score+1
                $("#score").text(score)
            }
            guesslink4()
        }


function guesslink4()
{
$(".game").empty()
     $(".game").append( "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer4[0] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer4[1] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer4[2] +"</div>"+
     "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +answer4[3] +"</div>"+
      "<input type='text' id='myInput'>"+
    "<button type='button' onclick='checklink4();'>Get Value</button>");
}
 function checklink4(){
            var inputVal = document.getElementById("myInput").value;
            if(inputVal==link1)
            {
                score=score+1
                $("#score").text(score)
            }
        }