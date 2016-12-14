$(document).ready(function(){

    $("#quiz").hide();
                                        //need unanswered, timer 120 secs, 
    $("#start").click(function(){
             $("#quiz").show();
             $("#start").hide();
    // $ document.getElementById("#start").on(.click = function(timer);
    
});
})

  function _timer(callback){
    var time = 1;     //  The default time of the timer
    var mode = 0;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval){
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0){
            status = 1;
            timer_id = setInterval(function(){
                switch(mode){
                    default:
                      if(time){
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                      }
                      break;
                    
                    case 1:
                      if(time < 86400){
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                      }
                    break;
                }
            }, 
            interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function(){
        if(status == 1){
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec){
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // This returns the current value of the timer
    this.getTime = function(){
        return time;
    }
    
    // This returns the status of the timer running (1) or stoped (1)
    this.getStatus = function(){
        return status;
    }
    
    // This will render the time variable to hour:minute:second format
    function generateTime(){
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
    }
  }

 
// scoring code starts here

// window.onload = init;function init() {
//         document.getElementById('btn').onclick = validate;
// }
//             function validate() {
//               var radios = document.getElementById("quiz").getElementsByTagName("INPUT");
//               var right = 0;
//               var wrong = 0;
//               var unanswered = 0; 
//               //   for (var i = 1; i < 11; i++) {
//               //     var answers = $("#q"+i+" input").attr("value");
//               //     console.log(answers);
//               //   }

                
//                 for(var i=0; i < radios.length; i++) {
//                   if(radios[i].checked == true){

//                     if(radios[i].value === "x") {
//                       right++;      
//                     } else if (radios[i].value ==="a"|| radios[i].value ==="b" || radios[i].value === "c"){
//                       wrong++;
//                     }
                    
//                     }else {
//                     unanswered++;
//                     }

//                 } 
//                 var score = (100*right/(wrong+right)).toFixed(1);
//                 document.getElementById("score").innerHTML = 'Correct: '+ right +'<br/>Incorrect: ' + wrong +'<br/>Unanswered: ' + unanswered;
//             }
                
            



             
                                    
