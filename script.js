document.getElementById('year').textContent = new Date().getFullYear();


// Optional: smooth scrolling
const links = document.querySelectorAll('nav a');
links.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if(target) {
window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
}
});
});
