/* ========================================
   ShoreSquad - Main Application Script
   ======================================== */

/**
 * ShoreSquad App
 * Mobile-first coastal cleanup community platform
 * Features: Map integration, weather tracking, crew management
 */

class ShoreSquadApp {
    constructor() {
        this.isMenuOpen = false;
        this.userLocation = null;
        this.events = [];
        this.init();
    }

    /**
     * Initialize the app
     */
    init() {
        this.setupEventListeners();
        this.registerServiceWorker();
        this.loadUserData();
        this.updateActiveNavLink();
        console.log('🌊 ShoreSquad initialized successfully');
    }

    /**
     * Setup event listeners for interactive elements
     */
    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                this.toggleMobileMenu(navMenu);
            });
        }

        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.updateActiveNavLink(link);
                this.smoothScroll(target);
                if (navMenu) navMenu.classList.remove('active');
                this.isMenuOpen = false;
            });
        });

        // CTA buttons
        const ctaButton = document.getElementById('cta-button');
        const signupButton = document.getElementById('signup-button');

        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.handleFindEvents();
            });
        }

        if (signupButton) {
            signupButton.addEventListener('click', () => {
                this.handleSignup();
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const navbar = document.querySelector('.navbar');
            if (navbar && !navbar.contains(e.target) && this.isMenuOpen) {
                navMenu.classList.remove('active');
                this.isMenuOpen = false;
            }
        });
    }

    /**
     * Toggle mobile menu visibility
     */
    toggleMobileMenu(menu) {
        if (menu) {
            this.isMenuOpen = !this.isMenuOpen;
            menu.classList.toggle('active');
        }
    }

    /**
     * Smooth scroll to section
     */
    smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * Update active navigation link based on scroll position
     */
    updateActiveNavLink(clickedLink = null) {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        if (clickedLink) {
            clickedLink.classList.add('active');
        }
    }

    /**
     * Handle "Find Events" button click
     */
    handleFindEvents() {
        console.log('🗺️ Finding events near you...');

        // Request user's geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    console.log('📍 Location detected:', this.userLocation);
                    this.fetchNearbyEvents();
                    this.smoothScroll('#map');
                },
                (error) => {
                    console.warn('❌ Geolocation permission denied:', error);
                    alert(
                        '📍 Enable location access to find events near you. You can also browse all events on the map.'
                    );
                }
            );
        } else {
            console.warn('❌ Geolocation not supported');
            alert('Geolocation is not supported by your browser.');
        }
    }

    /**
     * Fetch nearby cleanup events (mock data for now)
     */
    fetchNearbyEvents() {
        // Mock events data - replace with actual API call
        this.events = [
            {
                id: 1,
                name: 'Santa Monica Beach Cleanup',
                lat: 34.0195,
                lng: -118.4912,
                date: '2025-12-14',
                participants: 24,
                weather: 'Sunny',
                temp: 72,
            },
            {
                id: 2,
                name: 'Venice Beach Crew Gathering',
                lat: 33.985,
                lng: -118.4695,
                date: '2025-12-15',
                participants: 18,
                weather: 'Partly Cloudy',
                temp: 70,
            },
            {
                id: 3,
                name: 'Malibu Coast Cleanup Drive',
                lat: 34.0288,
                lng: -118.6819,
                date: '2025-12-21',
                participants: 32,
                weather: 'Sunny',
                temp: 68,
            },
        ];

        this.renderMapWithEvents();
        console.log(`✅ Loaded ${this.events.length} nearby events`);
    }

    /**
     * Render events on map (simplified visualization)
     */
    renderMapWithEvents() {
        const mapContainer = document.getElementById('map-container');
        if (!mapContainer) return;

        let html = `
            <div style="padding: 20px; height: 100%; overflow-y: auto; background: linear-gradient(135deg, #f0f9ff, #f0f4ff);">
                <h3 style="color: #0066CC; margin-bottom: 16px;">📍 Events Near You</h3>
        `;

        this.events.forEach((event) => {
            html += `
                <div style="
                    background: white;
                    padding: 16px;
                    margin-bottom: 12px;
                    border-radius: 8px;
                    border-left: 4px solid #FF6B6B;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                ">
                    <h4 style="color: #0066CC; margin-bottom: 8px;">${event.name}</h4>
                    <p style="margin: 4px 0; font-size: 14px; color: #666;">
                        📅 ${event.date}
                    </p>
                    <p style="margin: 4px 0; font-size: 14px; color: #666;">
                        👥 ${event.participants} participants
                    </p>
                    <p style="margin: 4px 0; font-size: 14px; color: #666;">
                        🌡️ ${event.weather}, ${event.temp}°F
                    </p>
                    <button style="
                        margin-top: 12px;
                        background: #FF6B6B;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    " onclick="alert('🎉 Thanks for joining! See you at the beach!')">
                        Join Event
                    </button>
                </div>
            `;
        });

        html += '</div>';
        mapContainer.innerHTML = html;
    }

    /**
     * Handle signup/registration
     */
    handleSignup() {
        console.log('✍️ Signup initiated');
        const email = prompt(
            '📧 Enter your email to join ShoreSquad:\n\n(This is a demo - no actual signup)'
        );

        if (email && email.includes('@')) {
            localStorage.setItem('shoresquad_email', email);
            alert(`🎉 Welcome to ShoreSquad, ${email}!\n\nYour account is ready. Time to clean some beaches! 🌊`);
            this.updateUserUI();
        } else if (email) {
            alert('❌ Please enter a valid email address');
        }
    }

    /**
     * Load user data from storage
     */
    loadUserData() {
        const savedEmail = localStorage.getItem('shoresquad_email');
        if (savedEmail) {
            console.log(`👤 User logged in: ${savedEmail}`);
            this.updateUserUI();
        }
    }

    /**
     * Update UI based on user login status
     */
    updateUserUI() {
        const email = localStorage.getItem('shoresquad_email');
        const signupButton = document.getElementById('signup-button');

        if (email && signupButton) {
            signupButton.textContent = `✅ Welcome Back, ${email.split('@')[0]}!`;
            signupButton.disabled = true;
            signupButton.style.opacity = '0.7';
        }
    }

    /**
     * Fetch weather data for a location
     */
    async getWeatherData(lat, lng) {
        try {
            // Mock weather data - replace with actual API call
            // Example: using OpenWeatherMap API
            const mockWeather = {
                temp: 72,
                condition: 'Sunny',
                humidity: 65,
                windSpeed: 8,
            };
            console.log('☀️ Weather fetched:', mockWeather);
            return mockWeather;
        } catch (error) {
            console.error('❌ Weather fetch failed:', error);
        }
    }

    /**
     * Register service worker for PWA capabilities
     */
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((reg) => {
                    console.log('✅ Service Worker registered:', reg);
                })
                .catch((err) => {
                    console.warn('⚠️ Service Worker registration failed:', err);
                });
        }
    }

    /**
     * Analytics - Track user interactions
     */
    trackEvent(eventName, eventData = {}) {
        const analyticsEvent = {
            name: eventName,
            timestamp: new Date().toISOString(),
            data: eventData,
            userLocation: this.userLocation,
        };

        console.log('📊 Analytics:', analyticsEvent);
        // Send to analytics service (e.g., Google Analytics, Mixpanel)
    }

    /**
     * Performance optimization - Lazy load images
     */
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach((img) => imageObserver.observe(img));
        }
    }
}

/* ========================================
   Initialize App on DOM Ready
   ======================================== */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new ShoreSquadApp();
    });
} else {
    window.app = new ShoreSquadApp();
}

/* ========================================
   Utility Functions
   ======================================== */

/**
 * Throttle function for performance
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        }
    };
}

/**
 * Debounce function for search/filter
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Format date to readable format
 */
function formatDate(dateString) {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}