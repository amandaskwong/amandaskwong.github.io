console.log('hi');

// footer year
const footerYear = document.getElementById('year');
const getDate = new Date();
footerYear.textContent = getDate.getFullYear();

// print date to console
console.log(getDate.toString())

