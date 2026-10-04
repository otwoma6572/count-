const days = document.getElementById("days");
const hours = document.getElementById("hours");
const min = document.getElementById("min");
const secs = document.getElementById("secs");

const formatTime = (time) => (time < 10 ? "0" + time : time);

const updateCountDown = (deadline) =>{
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;

  // calculating days , hours , min secs
  let calSecs = Math.floor(timeDifference/1000) % 60;
  let calMins = Math.floor(timeDifference/1000/60) %60;
  let calHours = Math.floor(timeDifference/1000/60/60) %24;
  let calDays = Math.floor(timeDifference/1000/60/60/24);

  days.textContent = formatTime(calDays);
  min.textContent = formatTime(calMins);
  hours.textContent = formatTime (calHours)
  secs.textContent = formatTime(calSecs);
  
}

const countDown = (targetDate) => {
  updateCountDown(targetDate);
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date ("2027-08-10T12:00:00");
countDown(targetDate);
document.getElementById('year').textContent = new Date().getFullYear();