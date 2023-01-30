setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

  document.getElementById("current").innerHTML = currentTime;
}
function setalarm() {
  hours = document.querySelector("#hours");
  minutes = document.querySelector("#minutes");
  AMPMs = document.querySelector("#AMPM");
  hour = hours.value;
  minute = minutes.value;
  AMPM = AMPMs.value;
  let alarmTime = hour + ":" + minute + ":" + "00" + " " + AMPM;
  // ,{1},{2},{3},{1,2},{2,3},{1,3} and {1,2,3}--These are the subsets of 123
  // 1-Hour
  // 2-minutes
  // 3-ampm

  // Given only 
// only hours-{hours},{hours,minutes},{hours,AMPM},-{hours,minutes,AMPM}
// only minutes-{minutes},{hours,minutes},{minutes,AMPM}-{hours,minutes,AMPM}
// only ampm-{AMPM},{minutes,AMPM},{hours,AMPM}-{hours,minutes,AMPM}

// 1st set-{hour+":Minutes:00 AM/PM"}
// 2nd set-{"Hour:"+minute+":00 AM/PM"}
// 3rd set-{"Hour:Minutes:00"+AMPM}
// 4th set-{hour+":"+minute+":"+"00 AM/PM"}
// 5th set-{"Hour:"+minute+":00"+AMPM"}
// 6th set-{hour+":Minutes:00"+AMPM"}
// 7th set-{hour + ":" + minute + ":" + "00" + " " + AMPM;}

// 1st set-10:Minutes:00 AM/PM
// 2nd set-Hour:13:00 AM/PM
// 3rd set-Hour:Minutes:00 AM
// 4th set-01:02:00 AM/PM
// 5th set-Hour:01:00 AM
// 6th set-01:Minutes:00 AM
// 7th set-02:02:00 PM

//Match  10+":Minutes:00 AM/PM" and 10:Minutes:00 AM/PM
//Match "Hour:"+13+":00 AM/PM" and Hour:13:00 AM/PM 
//Match "Hour:Minutes:00"+AM and Hour:Minutes:00 AM
//Match  01+":"+02+":"+"00 AM/PM" and 01:02:00 AM/PM
//Match "Hour:"+01+":00"+AM and Hour:01:00 AM 
//Match  01+":Minutes:00"+AM and 01:Minutes:00 AM
//Match  02 + ":" + 02 + ":" + "00" + " " + PM and 02:02:00 PM
let st1="10:Minutes:00 AM/PM";
let st2="Hour:13:00 AM/PM";
let st3="Hour:Minutes:00 AM";
let st4="01:02:00 AM/PM";
let st5="Hour:01:00 AM";
let st6="01:Minutes:00 AM";
let st7="02:02:00 PM";
let st8="10:Minutes:00 AM/PM";
let st9="Hour:13:00 AM/PM";
let st10="Hour:Minutes:00 AM";
let st11="01:02:00 AM/PM";
let st12="Hour:01:00 AM";
let st13="01:Minutes:00 AM";
let st14="02:02:00 PM";
if(alarmTime==hour+":Minutes:00 AM/PM"|| alarmTime=="Hour:"+minute+":00 AM/PM"||alarmTime=="Hour:Minutes:00"+AMPM||alarmTime==hour+":"+minute+":"+"00 AM/PM"||alarmTime== "Hour:"+minute+":00"+AMPM||alarmTime==hour+":Minutes:00"+AMPM||alarmTime==alarmTime=="Hour:Minutes:00 AM/PM"){
  console.log(alarmTime)

document.getElementById("notext").style.display="flex"
// document.getElementById("notext").style.marginLeft="block"

}
else{
  document.getElementById("notext").style.display="none"
    document.getElementById("set").style.display = "none";
    document.getElementById("calarm").style.display = "block";
    function currtime() {
      let ctime = document.getElementById("current").innerText;
      if (ctime == alarmTime) {
        var audio = new Audio("beep.mp3");
        audio.play();

        if (ctime != alarmTime) {
          audio.pause();
        }
      }
    }
  

  currtime();
  setInterval(currtime, 1000);
}}
function clearalarm() {
  window.location.reload();
}