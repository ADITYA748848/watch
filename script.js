const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // Start from 90deg to align with default rotation
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Ensure there is no snap back when resetting at 60 seconds
function removeTransition() {
    secondHand.style.transition = 'none';
}

function addTransition() {
    secondHand.style.transition = 'all 0.05s cubic-bezier(0.4, 2.3, 0.3, 1)';
}

setInterval(setClock, 1000); // Update the clock every second
setClock(); // Initialize the clock on load

secondHand.addEventListener('transitionend', removeTransition); // Fixes snap when it resets at 60 seconds
