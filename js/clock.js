const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const months = String(date.getMonth()).padStart(2, "0");
  const days = String(date.getDay()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const time = document.querySelector("#clock p:last-child");
  const today = document.querySelector("#clock p:first-child");
  today.innerText = `${months} / ${days}`;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
