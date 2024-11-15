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
} if(hour >= 12 && hour < 17) {
    greeting.textContent = 'Good afternoon!'
} if(hour >= 17) {
    greeting.textContent = 'Good evening!'
}