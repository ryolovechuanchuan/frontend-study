const date = document.getElementById('date');
const time = document.getElementById('time');
const show = document.getElementById('showmessage');

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

setInterval(() => {}, 1000);

function updateClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, 0);
  const todaydate = now.getDate().toString().padStart(2, 0);

  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  date.innerText = `${year}-${month}-${todaydate} `;
  time.innerText = `${hours}:${minutes}:${seconds}`;

  if (hours < 12) {
    show.innerText = 'Good Morning';
  } else if (hours < 18) {
    show.innerText = 'Good Afternoon';
  } else if (hours < 24) {
    show.innerHTML = 'Good Evening';
  }
}

updateClock();
setInterval(updateClock, 1000);
