const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


// Sélection des éléments du DOM
const carouselImage = document.querySelector('.carousel-image'); // Image unique
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const carouselText = document.querySelector('#banner p');

let currentIndex = 0;

// 🔹 Fonction pour afficher le slide (NOUVELLE MÉTHODE)
function showSlide(index) {
	console.log(`📸 Affichage du slide ${index + 1}:`, slides[index].image);

	// Créer une nouvelle image temporaire pour la précharger
	const newImage = new Image();
	newImage.src = slides[index].image;

	// Quand la nouvelle image est chargée, on la remplace et on applique le fondu
	newImage.onload = () => {
		carouselImage.src = newImage.src;
		carouselImage.style.opacity = "1"; // Garder l'effet de fondu
	};

	// Mettre à jour le texte
	carouselText.innerHTML = slides[index].tagLine;

	// Mettre à jour les dots
	const dots = dotsContainer.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === index);
	});
}



// 🔹 Fonction pour aller au slide suivant
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	console.log("➡️ Slide suivant :", currentIndex);
	showSlide(currentIndex);
}

// 🔹 Fonction pour aller au slide précédent
function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	console.log("⬅️ Slide précédent :", currentIndex);
	showSlide(currentIndex);
}

// 🔹 Ajouter les événements de clic sur les flèches
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

// 🔹 Générer les dots dynamiquement
dotsContainer.innerHTML = "";
slides.forEach((_, i) => {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	if (i === 0) dot.classList.add('dot_selected'); // Premier dot actif
	dot.addEventListener('click', () => {
		console.log(`🎯 Dot cliqué: Aller au slide ${i + 1}`);
		currentIndex = i;
		showSlide(currentIndex);
	});
	dotsContainer.appendChild(dot);
});

// 🔹 Initialisation du carrousel
showSlide(currentIndex);
