$(document).ready(function(){

    $("#quiz").hide();
                                        //need unanswered, timer 120 secs, 
    $("#start").click(function(){
             $("#quiz").show();
             $("#start").hide();
             // $("#start").on(.click = function=timer);
    // $ document.getElementById("#start").on(.click = function(timer);
    
});
})

$("#start").click(function(){

// Countdown Timer

    var startAt = 60;
    var number = startAt;

    function run() {
    counter = setInterval(decrement1, 1000);
    }
    function decrement1() {
        number--;
        $("#showTime").html('<div>' + number + '</div>');
        if (number === 0) {
            stop();
            alert ("Time is up!")
        }
    }
    function stop(){
        clearInterval(counter); 
    }

    run();

});


 
// scoring code starts here

window.onload = init;function init() {
        document.getElementById('done')
        .onclick = validate;
}
            function validate() {
              var radios = document.getElementById("quiz").getElementsByTagName("INPUT");
              var right = 0;
              var wrong = 0;

                
                for(var i=0; i < radios.length; i++) {
                  if(radios[i].checked == true){

                    if(radios[i].value === "x") {
                      right++;      
                    } else if (radios[i].value ==="a"|| radios[i].value ==="b" || radios[i].value === "c"){
                      wrong++;
                    }
                    
                    //if the score isnt in right or wrong, put it in unanswered; ttl ten questions
                    }else {
                    unanswered = 10-right- wrong; 
                    }

                } 
                var score = (100*right/(wrong+right)).toFixed(1);
                document.getElementById("score").innerHTML = 'Correct: '+ right +'<br/>Incorrect: ' + wrong +'<br/>Unanswered: ' + unanswered;

            }
                
            



             
                                    
