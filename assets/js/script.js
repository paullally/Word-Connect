
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
    var answer1 = [json[random].first,json[random].second,json[random].third,json[random].fourth]
    var answer2 = [json[random1].first,json[random1].second,json[random1].third,json[random1].fourth]
    var answer3 = [json[random2].first,json[random2].second,json[random2].third,json[random2].fourth]
    var answer4 =  [json[random3].first,json[random3].second,json[random3].third,json[random3].fourth]
    var mix = [json[random].first,json[random].second,json[random].third,json[random].Link,json[random1].first,json[random1].second,json[random1].third,json[random1].Link,json[random2].first,json[random2].second,json[random2].third,json[random2].Link,json[random3].first,json[random3].second,json[random3].third,json[random3].Link]
    var mixed = shuffle(mix);
    var score =0;
    var lives =3;
    let skill_list = "";
    let i = 0;
    let check =[]
    mixed.map(() => {
        skill_list += "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +
            mixed[i] +
            "</div>" ;
        i += 1;

    });
     $("#start").addClass("hidden");
    $(".test").append(skill_list);
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
            endgame()
        }
        if(lives==0)
        {
            endgame()
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
                          $(".test").prepend( $(".card").eq(i));
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
            endgame()
        }
    }, 1000);
}

function endgame()
{
     $(".test").addClass("hidden");
}