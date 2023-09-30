var hours = 0;
var minutes = 0;
var seconds = 0;
var interval = null;

document.addEventListener('DOMContentLoaded',function() {
    //adding actionlistener for hours input tag change 
    document.getElementById('hours').addEventListener('change', e => {
        hours = +e.target.value;
        if(hours!=0 || minutes !=0 || seconds!=0){
            document.getElementById('setTimerBtn').classList.remove("disable");
        }
    });
     //adding actionlistener for minutes input tag change 
    document.getElementById('minutes').addEventListener('change', e => {
        minutes = +e.target.value;
        if(hours!=0 || minutes !=0 || seconds!=0){
            document.getElementById('setTimerBtn').classList.remove("disable");
        }
    });
     //adding actionlistener for seconds input tag change 
    document.getElementById('seconds').addEventListener('change', e => {
        seconds = +e.target.value;
        if(hours!=0 || minutes !=0 || seconds!=0){
            document.getElementById('setTimerBtn').classList.remove("disable");
        }
    });

   
    // //adding actionlistener for set timer button click event
    document.getElementById('setTimerBtn').addEventListener('click', () => {
        var timeInSeconds = (hours * 60 * 60) +
            (minutes * 60) +
            seconds;
    
            let createdTimer = document.createElement("div");
            const alarmAudio = document.getElementById("alarm-audio");
            createdTimer.class = "newTimer";
        var displayTime = () => {
            var displayHours = Math.floor(timeInSeconds / (60 * 60));
            var remainder = timeInSeconds - (displayHours * 60 * 60);
            var displayMinutes = Math.floor(remainder / 60);
            var displaySeconds = remainder - (displayMinutes * 60);
            document.getElementById("noTimersText").style.display = "none";
            
            createdTimer.class = "activerTimers";
            createdTimer.innerHTML = "<span>Time Left: </span>" + "<span>" + displayHours + " hh : " + displayMinutes + " mm : " + displaySeconds + " ss" + "</span>" + '<button class="deleteTimer setBtn">Delete</button>';
            document.getElementById("currentTimers").classList.add("show");
        };
        // display the timer to the page, refreshing for every second using setInterval;
        document.getElementById("currentTimers").append(createdTimer);
        interval = setInterval(() => {
            displayTime();
            timeInSeconds -= 1;
            if (timeInSeconds < 0) {
                console.log("hiiiii");
                clearInterval(interval);
                
                //Initialize alarm sound
                    alarmAudio.src = "alarmAudio.mp3";
                    alarmAudio.load();
                    alarmAudio.play();
            }
            //deleting the timer
            var removeBtn = document.querySelectorAll(".deleteTimer");

            removeBtn.forEach((btn) => {
                btn.addEventListener('click', function(){
                    alarmAudio.pause();
                btn.parentElement.remove(); 
                });
            })

        }, 1000);
        
        
    });




    

});


