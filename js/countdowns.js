// Global var
var today = new Date().getTime();

// Africa Day
function Countdown_AfricaDay() {
  var countDownDate = new Date("May 25, 2019 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("DAYS_AFRICADAY").innerHTML = days + "";
    document.getElementById("HOURS_AFRICADAY").innerHTML = hours + "";
    document.getElementById("MINUTES_AFRICADAY").innerHTML = minutes + "";
    document.getElementById("SECONDS_AFRICADAY").innerHTML = seconds + "";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("DAYS_AFRICADAY").innerHTML = "X";
      document.getElementById("HOURS_AFRICADAY").innerHTML = "X";
      document.getElementById("MINUTES_AFRICADAY").innerHTML = "X";
      document.getElementById("SECONDS_AFRICADAY").innerHTML = "X";
    }
  }, 1000);
}
// All Souls Day
function Countdown_AllSoulsDay() {
  var countDownDate = new Date("Nov 2, 2019 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("DAYS_ALLSOULSDAY").innerHTML = days + "";
    document.getElementById("HOURS_ALLSOULSDAY").innerHTML = hours + "";
    document.getElementById("MINUTES_ALLSOULSDAY").innerHTML = minutes + "";
    document.getElementById("SECONDS_ALLSOULSDAY").innerHTML = seconds + "";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("DAYS_ALLSOULSDAY").innerHTML = "X";
      document.getElementById("HOURS_ALLSOULSDAY").innerHTML = "X";
      document.getElementById("MINUTES_ALLSOULSDAY").innerHTML = "X";
      document.getElementById("SECONDS_ALLSOULSDAY").innerHTML = "X";
    }
  }, 1000);
}
// April Fools Day
function Countdown_AprilFoolsDay() {
  var countDownDate = new Date("Apr 1, 2019 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("DAYS_APRILFOOLSDAY").innerHTML = days + "";
    document.getElementById("HOURS_APRILFOOLSDAY").innerHTML = hours + "";
    document.getElementById("MINUTES_APRILFOOLSDAY").innerHTML = minutes + "";
    document.getElementById("SECONDS_APRILFOOLSDAY").innerHTML = seconds + "";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("DAYS_APRILFOOLSDAY").innerHTML = "X";
      document.getElementById("HOURS_APRILFOOLSDAY").innerHTML = "X";
      document.getElementById("MINUTES_APRILFOOLSDAY").innerHTML = "X";
      document.getElementById("SECONDS_APRILFOOLSDAY").innerHTML = "X";
    }
  }, 1000);
}
