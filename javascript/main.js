console.log('hi');

// footer year
const footerYear = document.getElementById('year');
const getDate = new Date();
footerYear.textContent = getDate.getFullYear();

// print date to console
console.log(getDate.toString())

// greeting
const greeting = document.getElementById('greeting')
const hour = getDate.getHours();

if(hour <= 11) {
    greeting.textContent = 'Good morning!'
    greeting.style.color = 'rgb(170, 239, 240)'
} if(hour >= 12 && hour < 17) {
    greeting.textContent = 'Good afternoon!'
    greeting.textContent.style.color = 'rgb(148, 193, 242)';
} if(hour >= 17) {
    greeting.textContent = 'Good evening!'
    greeting.style.color = 'rgb(198, 148, 242)';
}

