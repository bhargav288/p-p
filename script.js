document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById("SaveTheDate");
  
    button.addEventListener('click', buttonClick);
  
    function buttonClick() {
        window.location.href = "https://calendar.google.com/calendar/u/0/r?pli=1";
    }
  });
  