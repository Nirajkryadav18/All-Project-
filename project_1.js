const quotes = [
  "Believe in yourself and all that you are.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Stay positive, work hard, make it happen.",
  "Don’t stop until you’re proud.",
  "Push yourself, because no one else is going to do it for you.",
  "The only limit is your mind.",
  "Great things never come from comfort zones.",
  "Success doesn’t come to you, you go to it.",
  "Your time is now.",
  "Work hard in silence, let success make the noise.",
  "Small steps every day lead to big results.",
  "Don’t wait for opportunity, create it.",
  "Failure is the first step towards success.",
  "Be stronger than your excuses.",
  "Stay focused and never give up.",
  "Consistency is the key to success.",
  "Start where you are, use what you have, do what you can."
];

const button=document.querySelector('button');
const quote =document.querySelector('h1')

button .addEventListener('click',()=>{  // this line code is ()=>{} this is collback function hai;
   const index=Math.floor(Math.random()*20);  // this line of random value ko dega;
   quote.textContent=quotes[index];  // this line of print the ane by one print know;
})