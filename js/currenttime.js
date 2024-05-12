function updateClock() {
    var now = new Date();
    var phoenixTime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() - 7, now.getUTCMinutes(), now.getUTCSeconds());
    var netherlandsTime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() + 2, now.getUTCMinutes(), now.getUTCSeconds());

    document.getElementById("phoenixTime").textContent = phoenixTime.toLocaleTimeString();
    document.getElementById("netherlandsTime").textContent = netherlandsTime.toLocaleTimeString();
    
    // Adding the countdown display function
    updateCountdown(phoenixTime);

    setTimeout(updateClock, 1000);
}

function updateCountdown(phoenixTime) {
    const targetDate = new Date(phoenixTime.getFullYear(), 5, 28); // June 28th of the current year
    const timeDifference = targetDate - phoenixTime;
    if (timeDifference > 0) {
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").textContent = daysLeft + " day(s) left in the academy";
    } else {
        document.getElementById("countdown").textContent = "The date has passed";
    }
}

function setup() {
    updateClock();  // Start the clock
    window.addEventListener('unload', function() {
        console.log('Unloading the page...');
        // Any additional cleanup tasks can be added here
    });
}
