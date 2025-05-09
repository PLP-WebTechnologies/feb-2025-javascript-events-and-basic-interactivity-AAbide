// Button click event
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
  clickBtn.textContent = 'Clicked!';
  clickBtn.style.backgroundColor = '#4CAF50';
});

// Hover event
const hoverBtn = document.getElementById('hoverBtn');
hoverBtn.addEventListener('mouseenter', () => hoverBtn.style.backgroundColor = 'orange');
hoverBtn.addEventListener('mouseleave', () => hoverBtn.style.backgroundColor = '');

// Keypress detection
document.addEventListener('keydown', (e) => {
  document.getElementById('keyInfo').textContent = `You pressed: ${e.key}`;
});

// Double click secret action
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert('Yippee!, You found the secret!');
});

// Image Gallery
const images = [
  'https://via.placeholder.com/300?text=Image+1',
  'https://via.placeholder.com/300?text=Image+2',
  'https://via.placeholder.com/300?text=Image+3'
];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');

document.getElementById('nextBtn').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImage.src = images[currentImage];
});

// Accordion functionality
const accBtns = document.querySelectorAll('.accordion-btn');
accBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Form Validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  let valid = true;

  // Email validation
  if (!email.value.includes('@')) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Password validation
  if (password.value.length < 8) {
    document.getElementById('passError').textContent = 'Minimum 8 characters required';
    valid = false;
  } else {
    document.getElementById('passError').textContent = '';
  }

  if (valid) alert('Form submitted successfully!');
});
