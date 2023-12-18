var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://monsterhunter.tools/img/projects/monsterhunter.tools/assets/img/highlights/mhr-monster-gaismagorm-gallery-fromTheDarkness-21_25-8_40-0_554-m_cG0bu9Jus.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var monsterImageJS = document.getElementById('monsterImage');

    if (time == partytime) {
        image = "https://www.godisageek.com/wp-content/uploads/Monster-Hunter-Rise-Rathalos-3.png";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "https://imgix.bustle.com/uploads/image/2021/3/30/60668f6f-a609-4d15-9d24-e870b101d19d-5s1f121mjpa61.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "https://static.wikia.nocookie.net/alpheapedia/images/a/ab/Shara_ishvalda.jpg/revision/latest?cb=20210926173106";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://i.redd.it/fo17w6hdijx71.jpg";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "https://static.wikia.nocookie.net/alpheapedia/images/9/91/Deviljho.jpg/revision/latest?cb=20210916030038";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "https://cdna.artstation.com/p/assets/images/images/033/450/132/large/zaekyn-bazelgeuse-4.jpg?1609656695";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    monsterImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);