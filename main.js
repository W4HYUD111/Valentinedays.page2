console.log('Hello World!');
const messages = [
  "Are you sure?",
  "Really sure??",
  "Please don't do this…",
  "You're breaking my heart 🥺",
  "Think about it!",
  "You will regret this… 😭",
  "I will cry forever… 😢",
  "Okay fine, I give up...",
  "Just kidding! Say YES! ❤️"
];

let messageIndex = 0;
let noButtonClicks = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  // Ubah teks tombol "No"
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Perbesar tombol "Yes"
  let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;

  // Gerakkan tombol "No" ke posisi acak
  let newX = Math.random() * (window.innerWidth - 150);
  let newY = Math.random() * (window.innerHeight - 100);
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;

  noButtonClicks++;
}

function handleYesClick() {
  // Animasi transisi sebelum pindah halaman
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 500);
}
function handleYesClick() {
  window.location.href = "yes_page.html"; // Arahkan ke halaman Yes
}