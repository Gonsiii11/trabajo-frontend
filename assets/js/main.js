// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener('DOMContentLoaded', function () {
	// Initialize your project functionality
	console.log('WEB ATELIER (UDIT) - Student project initialized');

	// Example: Add smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		});
	});

	// Example: Add skip link functionality
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}

console.log("✅ main.js cargado correctamente");

const test = document.getElementById('test');
if (test) {
	test.textContent = "Texto cambiado desde main.js"
}

const boton = document.getElementById('boton');
if (boton) {
	boton.addEventListener('click', () => {
		alert('🚨 Boton pulsado correctamente');
	});
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	if (header) {
		if (window.scrollY > 100) {
			header.style.backgroundColor = 'rgba(0,0,0,0.8)';
			header.style.color = 'white';
		} else {
			header.style.backgroundColor = 'transparent'
			header.style.color = 'inherit';
		}
	}
})