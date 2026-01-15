// Animation au scroll
// amadou92-saikou.github.io/Garage/

const fades = document.querySelectorAll(".fade");

const showOnScroll = () => {
  fades.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Formulaire WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const texte = `Bonjour,
Nom: ${nom}
Email: ${email}
Problème moto: ${message}`;

  const telephone = "33758362370"; // À MODIFIER

  const url = `https://wa.me/${telephone}?text=${encodeURIComponent(texte)}`;
  window.open(url, "_blank");

  this.reset();
});
