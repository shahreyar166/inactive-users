const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
    // please write your code here
    var newTime = new Date().getTime();
    var newTime = Math.round(newTime / 60 * 1000);
    if (newTime - user.lastActivity > 1) {
        inactiveFirstStage()
    } else if (newTime - user.lastActivity > 3) {
        inactiveSecondStage()
    } if (newTime - user.lastActivity > 5) {
        inactiveThirdStage()
    }
}, 1000);