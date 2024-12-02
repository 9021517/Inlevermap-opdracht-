// script.js
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Voorkom standaard navigatie
        const page = this.getAttribute('href'); // Haal de pagina op
        loadContent(page);
    });
});

function loadContent(page) {
    // Simuleer het laden van een pagina-inhoud
    const content = document.getElementById('content');
    content.innerHTML = `<h1>${page.replace('.html', '')}</h1><p>Inhoud wordt hier geladen...</p>`;
}

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Lijst met vooraf ingestelde gebruikers
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

loginForm.addEventListener('submit'), (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
}
 
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Lijst met vooraf ingestelde gebruikers
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Voorkom standaardformulierverzending

  // Haal gebruikersinvoer op
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Valideer de inloggegevens
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Verberg de foutmelding (voor het geval dat) en navigeer naar dashboard
    errorMessage.style.display = 'none';
    window.location.href = 'dashboard.html'; // Vervang met je dashboard-URL
  } else {
    // Toon foutmelding
    errorMessage.textContent = 'Ongeldige gebruikersnaam of wachtwoord';
    errorMessage.style.display = 'block';
  }
});
