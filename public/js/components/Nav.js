
window.addEventListener("load", navbar);

function open_menu (e) {
    var navbar = document.querySelector("#navbar");
    navbar.style.transform = "translateX(" + 0 + "vw)";
    navbar.style.transition = "0.45s ease-out";
}

function close_menu (e) {
    var navbar = document.querySelector("#navbar");
    navbar.style.transform = "translateX(-" + 100 + "vw)";
    navbar.style.transition = "0.3s ease-in";
}

// update the time on the facebook messenger every second
      window.addEventListener("load", function() {
          setInterval(function () {
          var hours = new Date().getHours();
          var minutes = new Date().getMinutes();
          var timeOfDay;
          // its afternoon or evening or even night
          if (hours > 12) {
              timeOfDay = " pm"
          }
          // its morning
          else if (hours < 12) {
              timeOfDay = " am";
          }
          // keep as the 12-hour format; not the 24 hour that it forces.
          if (hours > 12) {
              hours = Math.round(hours - 12);
          }
          // keep minutes as 2 digits
          if (minutes < 10) {
              minutes = "0" + minutes;
          }
          document.querySelector("#facebook-messenger-time").innerHTML = hours + ":" + minutes + timeOfDay;
          document.querySelector("#time-of-day").innerHTML = hours + ":" + minutes + timeOfDay;
          }, 1000);
      })