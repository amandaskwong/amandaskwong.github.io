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
    greeting.style.color = 'rgb(148, 193, 242)';
} if(hour >= 17) {
    greeting.textContent = 'Good evening!'
    greeting.style.color = 'rgb(198, 148, 242)';
}

// button click
const btn = document.getElementById('btn-alert');
btn.addEventListener("click", () => {
    alert('Drink some water!')
})

// button hover
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = 'hotpink'
})
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = ''
})

// list population
const list = document.getElementById('numbers')

for (let i = 1; i <= 12; i = i + 1) {
    // create new list element
    let li = document.createElement('li')
    // conditional print even or odd
    if(i % 2 == 0) {
        li.textContent = 'even'
    } else {
        li.textContent = 'odd'
    }
    // append element to list
    list.appendChild(li);
}