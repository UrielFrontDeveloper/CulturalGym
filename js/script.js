document.addEventListener('DOMContentLoaded', function() {
    /**
     * Initializes a countdown timer.
     * @param {number} durationHours - The duration of the countdown in hours.
     * @param {string} displayElementId - The ID of the HTML element to display the countdown.
     * @param {string} storageKey - The localStorage key to store the countdown end time.
     */
    function initializeDiscountCountdown(durationHours, displayElementId, storageKey) {
        const display = document.getElementById(displayElementId);
        if (!display) {
            // Don't log an error if the element simply isn't on the current page.
            // console.error("Countdown display element not found:", displayElementId);
            return;
        }

        const durationInMs = durationHours * 60 * 60 * 1000;
        let endTime = localStorage.getItem(storageKey);

        if (!endTime || isNaN(parseInt(endTime))) {
            endTime = new Date().getTime() + durationInMs;
            localStorage.setItem(storageKey, endTime.toString());
        } else {
            endTime = parseInt(endTime);
            if (new Date().getTime() > endTime) {
                display.innerHTML = "OFERTA EXPIRADA";
                // Disable buttons if offer is expired
                document.querySelectorAll('#discounted-plans-offer .btn').forEach(button => {
                    button.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                    button.href = "javascript:void(0);"; 
                    button.textContent = "Expirado";
                });
                return; 
            }
        }

        function updateTimer() {
            const now = new Date().getTime();
            const timeLeft = endTime - now;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                display.innerHTML = "OFERTA EXPIRADA";
                document.querySelectorAll('#discounted-plans-offer .btn').forEach(button => {
                    button.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                    button.href = "javascript:void(0);";
                    button.textContent = "Expirado";
                });
                return;
            }

            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            display.innerHTML = 
                (hours < 10 ? "0" : "") + hours + ":" + 
                (minutes < 10 ? "0" : "") + minutes + ":" + 
                (seconds < 10 ? "0" : "") + seconds;
        }

        updateTimer(); 
        const timerInterval = setInterval(updateTimer, 1000);
    }

    /**
     * Updates the content of an element with the current year.
     * @param {string} elementId - The ID of the HTML element to display the year.
     */
    function updateYear(elementId) {
        const yearSpan = document.getElementById(elementId);
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        } else {
            // console.warn("Year span element not found for ID:", elementId);
        }
    }

    // General initializations
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const header = document.getElementById('header'); // Assuming 'header' is your sticky header's ID
                    const headerOffset = header ? header.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.getElementById('mobileMenuButton');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-opacity-80', 'shadow-xl'); // Tailwind classes
            } else {
                header.classList.remove('bg-opacity-80', 'shadow-xl');
            }
        });
    }
    
    // Slick Carousel for testimonials (requires jQuery and Slick library)
    // Ensure jQuery and Slick are loaded before this script or wrap in a check.
    if (typeof $ !== 'undefined' && $.fn.slick) {
        if ($('.testimonial-slider').length) {
            $('.testimonial-slider').slick({
                dots: true, infinite: true, speed: 700, slidesToShow: 1, slidesToScroll: 1,
                autoplay: true, autoplaySpeed: 4500, arrows: false, adaptiveHeight: true, pauseOnHover: true
            });
        }
    } else {
        // console.warn("jQuery or Slick Carousel not loaded. Testimonial slider will not initialize.");
    }

    // Fade-in sections on scroll
    const sections = document.querySelectorAll('.fade-in-section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });
        sections.forEach(section => { observer.observe(section); });
    }

    // Chatbot icon click (placeholder)
    const chatbotIcon = document.getElementById('chatbotIcon');
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', () => {
            alert('Chatbot CULTURALGYM: ¡Hola! ¿Cómo podemos ayudarte hoy? (Funcionalidad de chat en desarrollo)');
        });
    }

    // Page-specific initializations
    // Initialize the 16-hour countdown timer for the discount offer page (changed from 2 hours)
    initializeDiscountCountdown(16, 'countdown-timer-display', 'discountOfferEndTimeCulturalGym');
    
    // Funcionalidad mejorada para página de descuentos
    initializeDiscountPageFeatures();
    
    // Update copyright years on all relevant pages
    updateYear('currentYear'); // For index.html or general use
    updateYear('currentYearFunnel'); // For funnel.html
    updateYear('currentYearThankYou'); // For thank-you.html
    updateYear('currentYearCheckout'); // For checkout.html
    updateYear('currentYearDiscountPage'); // For descuento20.html

    // Funciones movidas desde index.html y otros archivos funnel
    function redirectToCheckoutWithDiscount(event) {
        event.preventDefault(); 
        
        const form = event.target;
        const email = form.EMAIL.value;
        // Asegúrate de que el campo MESSAGE exista en el formulario que llama a esta función
        const messageInput = form.MESSAGE;
        const message = messageInput ? messageInput.value.toLowerCase() : ""; 

        let planName = "PLAN MENSUAL"; 
        let planPrice = 70;
        let planDuration = "/mes";
        let planOriginalPrice = 70;

        if (message.includes("trimestral")) {
            planName = "PLAN TRIMESTRAL";
            planPrice = 150;
            planDuration = "/3 meses";
            planOriginalPrice = 150;
        } else if (message.includes("anual")) {
            planName = "PLAN ANUAL";
            planPrice = 450;
            planDuration = "/año";
            planOriginalPrice = 450;
        } else if (message.includes("2 meses") || message.includes("dos meses")) {
            planName = "PLAN 2 MESES";
            planPrice = 130;
            planDuration = "/2 meses";
            planOriginalPrice = 130;
        } else if (message.includes("6 meses") || message.includes("seis meses")) {
            planName = "PLAN 6 MESES";
            planPrice = 300;
            planDuration = "/6 meses";
            planOriginalPrice = 300;
        }
        
        const checkoutUrl = `checkout.html?planName=${encodeURIComponent(planName)}&planPrice=${planPrice}&planDuration=${encodeURIComponent(planDuration)}&planOriginalPrice=${planOriginalPrice}&discountPercentage=20&email=${encodeURIComponent(email)}`;
        window.location.href = checkoutUrl;
    }

    function handleIndexFormSubmit(event) {
        event.preventDefault(); 
        console.log("handleIndexFormSubmit iniciado, event.preventDefault() llamado.");

        const form = event.target; 

        if (form.checkValidity()) {
            const formData = new FormData(form);
            
            // console.log("Datos del formulario (contacto index) que se intentarán enviar a Mailchimp:");
            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ': ' + pair[1]); 
            // }

            const submitButton = form.querySelector('button[type="submit"]');
            // const originalButtonText = submitButton.innerHTML; // No es necesario si la página se recarga
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = 'Enviando...';
            }

            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(() => {
                // Intento de envío completado (no podemos confirmar éxito con no-cors)
                console.log("Fetch a Mailchimp (contacto index) completado. Recargando página...");
                window.location.reload(); // Recargar la página actual
            })
            .catch(error => {
                console.error('Error submitting contact form to Mailchimp:', error);
                // Incluso si hay un error de red, recargamos la página como solicitado.
                // Si prefieres un comportamiento diferente en caso de error (ej. no recargar y mostrar error),
                // puedes cambiarlo aquí.
                window.location.reload(); // Recargar la página actual
            });
        } else {
            form.reportValidity();
            console.log("Formulario de contacto (index) no válido.");
        }
    }

    function handleNewsletterFormSubmit(event) {
        event.preventDefault(); // ¡PRIMERA LÍNEA Y MÁS IMPORTANTE!
        console.log("handleNewsletterFormSubmit ejecutado. event.preventDefault() llamado.");

        const form = event.target; 
        const emailInput = form.EMAIL;

        if (emailInput && emailInput.value.trim() !== "" && emailInput.checkValidity()) {
            const formData = new FormData(form);
            // console.log("Datos del formulario (newsletter) que se intentarán enviar a Mailchimp:");
            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ': ' + pair[1]); 
            // }
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonIconHTML = submitButton.innerHTML; 
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; 
            }

            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(() => {
                if (submitButton) {
                    submitButton.innerHTML = '<i class="fas fa-check"></i>'; 
                }
                form.reset(); 
                
                setTimeout(() => {
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonIconHTML;
                    }
                }, 3000); 
            })
            .catch(error => {
                console.error('Error submitting newsletter form to Mailchimp:', error);
                // No mostramos alert para no interrumpir, pero sí en consola.
                // Podrías cambiar el ícono a una X de error si prefieres.
                if (submitButton) {
                    submitButton.innerHTML = '<i class="fas fa-times"></i>'; // Ícono de error
                     setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonIconHTML;
                }, 3000);
                }
            });
            return false; // Añadido para reforzar la prevención de la acción por defecto
        } else {
            if (emailInput && !emailInput.checkValidity()) {
                 emailInput.reportValidity();
            } else if (form) {
                form.reportValidity();
            }
            console.log("Formulario de newsletter no válido o email vacío.");
            return false; // También aquí por si la validación falla antes del fetch
        }
    }

    // Para funnel-guiade30dias.html (asegúrate que el ID del email input sea 'email-30dias')
    function handleGuia30DiasFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const emailInput = document.getElementById('email-30dias'); // ID específico de este funnel

        if (emailInput && emailInput.value.trim() !== "" && emailInput.checkValidity()) {
            const formData = new FormData(form);
            // console.log("Datos del formulario (guia 30 dias) que se intentarán enviar a Mailchimp:");
            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ': ' + pair[1]); 
            // }
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = 'Enviando...';
            }

            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            })
            .then(() => {
                window.location.href = "thank-you.html"; // Este funnel SÍ redirige
            })
            .catch(error => {
                console.error('Error submitting Guia 30 Dias form to Mailchimp:', error);
                alert('Hubo un problema al enviar tus datos. Por favor, inténtalo de nuevo.');
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                }
            });
        } else {
           if (form.checkValidity() === false) {
                form.reportValidity();
            }
        }
    }

    // Para funnel-abdominales.html (asegúrate que el ID del email input sea 'email-abdominales')
    function handleAbdominalesFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const emailInput = document.getElementById('email-abdominales'); // ID específico de este funnel

        if (emailInput && emailInput.value.trim() !== "" && emailInput.checkValidity()) {
            const formData = new FormData(form);
             console.log("Datos del formulario (abdominales) que se intentarán enviar a Mailchimp:");
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ': ' + pair[1]); 
            }
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = 'Enviando...';
            }

            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            })
            .then(() => {
                window.location.href = "thank-you.html";
            })
            .catch(error => {
                console.error('Error submitting Abdominales form to Mailchimp:', error);
                alert('Hubo un problema al enviar tus datos. Por favor, inténtalo de nuevo.');
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                }
            });
        } else {
            if (form.checkValidity() === false) {
                form.reportValidity();
            }
        }
    }


    // Actualizar año en footer - generalizado
    function updateFooterYear() {
        const yearSpan = document.getElementById('currentYear') || document.getElementById('currentYearFunnel') || document.getElementById('currentYearIndex') || document.getElementById('currentYearAbdominales'); // Agrega más IDs si es necesario
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Llamar a las funciones que deben ejecutarse al cargar el DOM
    document.addEventListener('DOMContentLoaded', function() {
        updateFooterYear();
        // Aquí puedes añadir otras inicializaciones que dependan del DOM
        // Por ejemplo, si el código del slider Slick o del menú móvil no está ya en un $(document).ready()
    });
    
    // Nueva función para características mejoradas de la página de descuentos
    function initializeDiscountPageFeatures() {
        // Contador de cupos restantes
        let spotsLeft = parseInt(localStorage.getItem('spotsLeft')) || Math.floor(Math.random() * 3) + 5;
        const spotsElement = document.getElementById('spots-left');
        
        if (spotsElement) {
            spotsElement.textContent = spotsLeft;
            
            // Reducir cupos cada cierto tiempo para crear urgencia
            setInterval(() => {
                if (spotsLeft > 2) {
                    spotsLeft--;
                    spotsElement.textContent = spotsLeft;
                    localStorage.setItem('spotsLeft', spotsLeft.toString());
                    
                    // Efecto visual cuando cambian los cupos
                    spotsElement.parentElement.classList.add('animate-bounce');
                    setTimeout(() => {
                        spotsElement.parentElement.classList.remove('animate-bounce');
                    }, 1000);
                }
            }, Math.random() * 60000 + 30000); // Entre 30s y 90s
        }
        
        // Simulador de personas comprando
        const peopleCounters = document.querySelectorAll('[data-counter]');
        peopleCounters.forEach(counter => {
            setInterval(() => {
                const current = parseInt(counter.textContent);
                const increment = Math.random() > 0.7 ? 1 : 0;
                if (increment) {
                    counter.textContent = current + increment;
                    counter.classList.add('text-green-400');
                    setTimeout(() => {
                        counter.classList.remove('text-green-400');
                    }, 1000);
                }
            }, Math.random() * 15000 + 10000); // Entre 10s y 25s
        });
        
        // Notificaciones de compras en tiempo real
        showPurchaseNotifications();
    }
    
    // Función para mostrar notificaciones de compras
    function showPurchaseNotifications() {
        const names = ['María L.', 'Carlos R.', 'Ana G.', 'Luis M.', 'Sofia P.', 'Diego H.', 'Carmen V.'];
        const cities = ['Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Chiclayo'];
        const plans = ['Plan Mensual', 'Plan Trimestral', 'Plan Anual'];
        
        function createNotification() {
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 left-4 bg-yellow-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-y-full transition-transform duration-500';
            
            const name = names[Math.floor(Math.random() * names.length)];
            const city = cities[Math.floor(Math.random() * cities.length)];
            const plan = plans[Math.floor(Math.random() * plans.length)];
            
            notification.innerHTML = `
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <i class="fas fa-check text-white text-sm"></i>
                    </div>
                    <div class="text-sm">
                        <div class="font-semibold">${name} de ${city}</div>
                        <div class="text-yellow-200">Acaba de comprar: ${plan}</div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Mostrar notificación
            setTimeout(() => {
                notification.classList.remove('translate-y-full');
            }, 100);
            
            // Ocultar después de 4 segundos
            setTimeout(() => {
                notification.classList.add('translate-y-full');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 500);
            }, 4000);
        }
        
        // Mostrar notificaciones aleatorias
        if (document.getElementById('discounted-plans-offer')) {
            setTimeout(createNotification, Math.random() * 10000 + 5000);
            setInterval(createNotification, Math.random() * 30000 + 20000);
        }
    }
    
    // Función global para seleccionar planes
    window.selectPlan = function(planType) {
        let planData = {};
        
        switch(planType) {
            case 'mensual':
                planData = {
                    name: 'PLAN MENSUAL (Oferta)',
                    price: 56,
                    duration: '/mes',
                    originalPrice: 70,
                    discount: 20
                };
                break;
            case 'trimestral':
                planData = {
                    name: 'PLAN TRIMESTRAL (Oferta)',
                    price: 120,
                    duration: '/3 meses',
                    originalPrice: 150,
                    discount: 20
                };
                break;
            case 'anual':
                planData = {
                    name: 'PLAN ANUAL (Oferta)',
                    price: 360,
                    duration: '/año',
                    originalPrice: 450,
                    discount: 20
                };
                break;
        }
        
        // Efecto visual de selección
        event.target.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Procesando...';
        event.target.disabled = true;
        
        setTimeout(() => {
            const checkoutUrl = `checkout.html?planName=${encodeURIComponent(planData.name)}&planPrice=${planData.price}&planDuration=${encodeURIComponent(planData.duration)}&planOriginalPrice=${planData.originalPrice}&discountPercentage=${planData.discount}`;
            window.location.href = checkoutUrl;
        }, 1500);
    };
});

