document.addEventListener('DOMContentLoaded', function () {
 const words = ['slpro', 'dk', 'bfl'];
 let currentWordIndex = 0;
 const typingSpeed = 150; // Speed of typing (ms per character)
 const erasingSpeed = 100; // Speed of erasing (ms per character)
 const delayBetweenWords = 2000; // Delay between typing the next word
 const dynamicText = document.getElementById('dynamic-text');
 const cursor = document.getElementById('cursor');
 
 function startBlinkingCursor() {
     setInterval(() => {
         cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
     }, 500); // Cursor blinking interval
 }
 // Type out the current word
 function typeWord(word) {
     let charIndex = 0;
     dynamicText.textContent = '';

     const typeInterval = setInterval(() => {
         if (charIndex < word.length) {
             dynamicText.textContent += word.charAt(charIndex);
             charIndex++;
         } else {
             clearInterval(typeInterval);
             setTimeout(() => eraseWord(), delayBetweenWords);
         }
     }, typingSpeed);
 }

 // Erase the current word
 function eraseWord() {
     let charIndex = dynamicText.textContent.length;

     const eraseInterval = setInterval(() => {
         if (charIndex > 0) {
             dynamicText.textContent = dynamicText.textContent.slice(0, --charIndex);
         } else {
             clearInterval(eraseInterval);
             currentWordIndex = (currentWordIndex + 1) % words.length;
             setTimeout(() => typeWord(words[currentWordIndex]), 500);
         }
     }, erasingSpeed);
 }

 // blinking cursor
 function startTypingEffect() {
     typeWord(words[currentWordIndex]);
     startBlinkingCursor();

 }

 startTypingEffect();



// ----------------------------------------------------

const input = document.getElementById('checkbox');
const img1 = document.getElementById('information-img1');
const img2 = document.getElementById('information-img2');
console.log(input);
z = 0;

input.addEventListener("click", function() {
    console.log('clicked');
    input.classList.toggle('checked');
    if(z == 0){
        z = 1;
        img1.style.zIndex = 5;
        img2.style.zIndex = 7;
    } else {
        z = 0 ;
        img1.style.zIndex = 7;
        img2.style.zIndex = 5;
    }
});
});









