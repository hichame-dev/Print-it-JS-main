const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélectionner les éléments du DOM
const carouselImages = document.querySelector('.carousel-images');
const dotsContainer = document.querySelector('.dots');  // La div pour les dots
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const carouselText = document.querySelector('#banner p');

// Initialisation de l'index actuel
let currentIndex = 0;

// Fonction pour afficher un slide
function showSlide(index) {
	// Mettre à jour l'image
	carouselImages.style.transform = `translateX(-${index * 100}%)`;

	// Mettre à jour le texte
	carouselText.innerHTML = slides[index].tagLine;

	// Sélectionner tous les dots
	const dots = dotsContainer.querySelectorAll('.dot');

	// Mettre à jour les dots
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Fonction pour naviguer vers le slide suivant
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length; // Aller à la première image après la dernière
	showSlide(currentIndex);
}

// Fonction pour naviguer vers le slide précédent
function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Aller à la dernière image si on est à la première
	showSlide(currentIndex);
}

// Ajouter les événements pour les flèches de navigation
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

// Supprimer les dots existants dans le HTML, puis ajouter 4 dots fixes via JavaScript
dotsContainer.innerHTML = ""; // Supprimer tous les dots existants (s'il y en a)

for (let i = 0; i < 4; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	if (i === 0) dot.classList.add('dot_selected'); // Le premier point est sélectionné
	dot.addEventListener('click', () => {
		currentIndex = i;
		showSlide(currentIndex);
	});
	dotsContainer.appendChild(dot);
}

// Initialiser le carrousel avec le premier slide
showSlide(currentIndex);
