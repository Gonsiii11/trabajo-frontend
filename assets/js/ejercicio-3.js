// Lazy loading para imágenes
const lazyImages = document.querySelectorAll('.lazy-image');

const imageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const img = entry.target;
			img.src = img.dataset.src;
			img.classList.add('loaded');
			observer.unobserve(img);
		}
	});
});


console.log("activo la consola");

lazyImages.forEach((img) => imageObserver.observe(img));

// Preload de imágenes críticas
const preloadImage = (src) => {
	const img = new Image();
	img.src = src;
};

// Preload de la imagen hero
preloadImage('https://picsum.photos/1920/1080?random=hero-large');