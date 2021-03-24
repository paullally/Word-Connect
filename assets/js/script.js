
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
    var random = Math.floor(Math.random() * 10);
var random1 = Math.floor(Math.random() * 10);
var random2 = Math.floor(Math.random() * 10);
var random3 = Math.floor(Math.random() * 10);
$.getJSON("game.json", function(json) {
    var answer1 = [json[random].first,json[random].second,json[random].third,json[random].fourth]
    var answer2 = [json[random1].first,json[random1].second,json[random1].third,json[random1].Link]
    var answer3 = [json[random2].first,json[random2].second,json[random2].third,json[random2].Link]
    var answer4 =  [json[random3].first,json[random3].second,json[random3].third,json[random3].Link]
    console.log(answer1)
    var mix = [json[random].first,json[random].second,json[random].third,json[random].Link,json[random1].first,json[random1].second,json[random1].third,json[random1].Link,json[random2].first,json[random2].second,json[random2].third,json[random2].Link,json[random3].first,json[random3].second,json[random3].third,json[random3].Link]
    var mixed = shuffle(mix);
    let skill_list = "";
    let i = 0;
    mixed.map(() => {
        skill_list += "<div class='col-lg-3 col-md-3 col-sm-3 col-xs-3 my-3 card'>" +
            mixed[i] +
            "</div>" ;
        i += 1;

    });
     $("#start").addClass("hidden");
    $(".test").append(skill_list);
    let check =[]
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
        console.log(check.length)
        console.log(check)
        if(check.length==4)
        {
            $(".card").css("background-color", "grey");
            let count =0;
            for(var i =0; i<check.length; i++)
            {
                    if(answer1.includes(check[i]))
                    {
                        count=count+1
                    }
            }
            if(count==4)
            {
                console.log("correct")
            }
        }
        
});
});
}
