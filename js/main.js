const menuButton = document.getElementById('js_menu_modal_button');
const closeButton = document.getElementById('js_menu_close_button');
const menuModal = document.getElementById('js_menu_modal');
menuButton.addEventListener('click', () => {
  menuModal.classList.add('active');
})
closeButton.addEventListener('click', () => {
  menuModal.classList.remove('active');
})

const contactButtons = Array.from(document.getElementsByClassName('js_contact_button'));
const closeContactButton = document.getElementById('js_contact_close_button');
const contactModal = document.getElementById('js_contact_modal');
contactButtons.forEach(b => b.addEventListener('click', () => {
  contactModal.classList.add('active');
}))
closeContactButton.addEventListener('click', () => {
  contactModal.classList.remove('active');
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const element=document.querySelector(this.getAttribute('href'));
    const y = element.getBoundingClientRect().top + window.scrollY - 90;

    window.scrollTo({top: y, behavior: 'smooth'});
  });
});

const navbar = document.getElementById('js_navbar');
document.addEventListener('scroll', () => {
  menuModal.classList.remove('active');
  navbar.classList.toggle('active', window.scrollY > 200);
})
