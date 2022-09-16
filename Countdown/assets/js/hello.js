console.log("js are you there?")

function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }
  // Countdown Initialization

  //set variable for the end of the countdown (deadline)
  let deadline = new Date ("October 31,2022 13:00:00");

  // set variable to select the h1
  let countdown = document.getElementById("countdown");

  countdown.innerHTML = " ";

  function setCountdown () {
    let now = new Date ();
    let timeleft = deadline.getTime() - now.getTime();


    let daysleft = convertToDaysLeft(timeleft);
    let hoursleft = convertToHoursLeft(timeleft);
    let minutesleft = convertToMinutesLeft(timeleft);
    let secondsleft =convertToSecondsLeft(timeleft);

    countdown.innerHTML = formatCountdownText(daysleft, hoursleft, minutesleft, secondsleft);

  }

  setInterval(setCountdown, 1000)