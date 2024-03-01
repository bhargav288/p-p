document.addEventListener('DOMContentLoaded', function () {
    var button1 = document.getElementById("SaveTheDate");

    button1.addEventListener('click', buttonClick);

    function buttonClick() {
        window.location.href = "https://calendar.google.com/calendar/u/0/r?pli=1";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    button.addEventListener('click', changeColor);

    function changeColor() {
        button.style.backgroundColor = 'rgb(252, 65, 140)'; // You can set your desired color here
    }
});



function viewmap() {
    window.location.href = "https://maps.app.goo.gl/V1u7J6aoHXso5HqU7";
}

function viewmap_sangeeth() {
    window.location.href = "https://maps.app.goo.gl/qi8WTVQQJq6XrE1ZA";
}

function viewmap_pellikuturu() {
    window.location.href = "https://maps.app.goo.gl/9oLRQG2mgSERWhTZ6";
}

function viewmap_tietheknot() {
    window.location.href = "https://maps.app.goo.gl/hQrYwJPPboXZNSxn9";
}
function viewmap_reception() {
    window.location.href = "https://maps.app.goo.gl/vL92WceNofCrnH2d7";
}

function live_link() {
    window.location.href = "https://youtu.be/vpWJ-WuTFEM?si=TiDjYfqqYkMk458g";
}
