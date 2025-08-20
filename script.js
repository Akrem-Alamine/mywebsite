// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Image slider function for each slider container
function initializeSlider(sliderContainer) {
    const slides = sliderContainer.querySelectorAll('.slider-image');
    let currentSlide = 0;
    
    function nextSlide() {
        if (slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }
    
    // Start sliding every 10 seconds
    if (slides.length > 0) {
        setInterval(nextSlide, 3000);
    }
}

// Initialize all sliders after page loads
window.addEventListener('load', function() {
    const sliderContainers = document.querySelectorAll('.image-slider');
    sliderContainers.forEach(container => {
        initializeSlider(container);
    });
});

// Theme and Language functionality
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
let currentTheme = 'light';
let currentLang = 'en';

function updateLanguageContent() {
    const translations = {
        en: {
            // Navigation
            'Home': 'Home',
            'Experience': 'Experience', 
            'Education': 'Education',
            'Projects': 'Projects',
            'Certifications': 'Certifications',
            'Hackathons': 'Hackathons',
            'Volunteering': 'Volunteering',
            
            // Section headings - both directions
            'Professional Experience': 'Professional Experience',
            'Expérience Professionnelle': 'Professional Experience',
            'Hackathons & Competitions': 'Hackathons & Competitions',
            'Hackathons & Compétitions': 'Hackathons & Competitions',
            'Volunteering & Community': 'Volunteering & Community',
            'Bénévolat & Communauté': 'Volunteering & Community',
            'Formation': 'Education',
            'Projets': 'Projects',
            
            // Hero section
            'hero-subtitle': 'AI & Cloud Engineer | Full-Stack Developer | Innovation Enthusiast',
            
            // Experience section
            'cloud-engineer-title': 'Cloud Engineer Intern',
            'cloud-engineer-company': 'RIF (Rassemblement des Ingénieurs Francophones)',
            'cloud-engineer-location': 'Paris, France (Remote)',
            'cloud-engineer-desc': 'Design and implementation of a private cloud architecture with 99.9% availability',
            
            'ai-engineer-title': 'AI Engineer Intern',
            'ai-engineer-company': 'Talan Tunisia',
            'ai-engineer-location': 'Tunis, Tunisia (Full-time - On site)',
            'ai-engineer-desc1': 'Development of an AI tool to support entrepreneurs from ideation to market launch',
            'ai-engineer-desc2': 'Built end-to-end AI platform using LangChain, LangGraph, Python, and Next.js',
            'ai-engineer-award': '🏆 Gold Prize & First Place - Talan Summer Camp 2025',
            'award-ceremony': 'Award Ceremony',
            'award-ceremony-desc': 'Receiving the gold prize at Talan Summer Camp 2025',
            'demo-title': 'Brand Orb AI Demo',
            'demo-desc': 'Live demonstration of the AI platform features',
            
            'software-dev-title': 'Software Development Intern',
            'software-dev-company': 'Société Variété Industrielle',
            'software-dev-location': 'Tunis, Tunisia',
            'software-dev-desc1': 'Developed a Flutter application for remote control of outdoor lighting via ESP8266',
            'software-dev-desc2': 'Integrated IoT protocols enabling real-time control',
            
            // Education section
            'eng-degree-title': 'Engineering Degree in Computer Science',
            'eng-degree-school': 'Faculty of Sciences of Tunis',
            'eng-degree-location': 'Tunis, Tunisia',
            'eng-degree-skill1': 'Cloud, Networks & DevOps: Advanced AWS experience, cloud deployment, IP/industrial/wireless networks, security of on-premises and cloud infrastructures',
            'eng-degree-skill2': 'Advanced Java/JEE Development: In-depth mastery of Java, Java EE (servlets, JSP, EJB), web and distributed application design',
            'eng-degree-skill3': 'Programming Languages: C/C++, PHP, SQL, PL/SQL, HTML, CSS, JavaScript',
            'eng-degree-skill4': 'Databases & System Administration: Database management, Linux administration, distributed systems',
            
            'prep-classes-title': 'Two-Year Preparatory Classes in Computer Science',
            'prep-classes-school': 'Faculty of Sciences of Tunis',
            'prep-classes-location': 'Tunis, Tunisia',
            'prep-classes-skill1': 'Mathematics & Physics: Advanced calculus, linear algebra, differential equations, mechanics, and electromagnetism',
            'prep-classes-skill2': 'Computer Science Fundamentals: Algorithms, data structures, programming fundamentals, and computational thinking',
            'prep-classes-skill3': 'Core Programming: Introduction to C/C++, Python, and object-oriented programming concepts',
            'prep-classes-skill4': 'Academic Excellence: Strong foundation in theoretical computer science and mathematical modeling',
            
            // Projects section
            'project1-title': 'Brand Orb AI - End-to-End Brand Development Platform',
            'project1-desc': 'AI-powered platform guiding entrepreneurs from ideation to market launch with automated brand identity creation and social media deployment.',
            'project2-title': 'AWS Web Application Deployment',
            'project2-desc': 'High-availability cloud architecture with frontend, backend, database, storage, monitoring, and security.',
            'project3-title': 'Car Rental Web Application - SOA Architecture',
            'project3-desc': 'Service-oriented architecture implementation for car rental management system.',
            'project4-title': 'Flutter IoT Lighting Control Application',
            'project4-desc': 'Mobile application for remote control of outdoor lighting systems using IoT protocols.',
            
            // Certifications section
            'azure-cert-title': 'Microsoft Certified: Azure Fundamentals',
            'azure-cert-desc': 'Demonstrated basic knowledge of cloud services and their provisioning via Microsoft Azure.',
            'oci-cert-title': 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
            'oci-cert-desc': 'Validation of fundamental knowledge of the main public cloud services of Oracle Cloud Infrastructure (OCI).',
            'aviatrix-cert-title': 'Multicloud Network Associate – Aviatrix Certified Engineer (ACE)',
            'aviatrix-cert-desc': 'Validates understanding of basic networking and security concepts across AWS, Azure, GCP, and OCI.',
            
            // Hackathons section
            'talan-hackathon-title': 'Talan Summer Camp 2025',
            'talan-hackathon-desc': 'Gold Prize & First Place for Brand Orb AI - End-to-End Brand Development Platform',
            'talan-winner': '🥇 Winner',
            'smu-hackathon-title': 'SMU Hackathon',
            'smu-hackathon-desc': 'Second Place for innovative technology solution',
            'smu-second': '🥈 Second Place',
            
            // Volunteering section
            'gdgc-journey': 'GDGC FST Journey',
            'gdgc-member': 'Member',
            'gdgc-year1': '1st Year',
            'gdgc-media': 'Media Manager',
            'gdgc-year2': '2nd Year',
            'gdgc-leader': 'Leader & Organizer',
            'gdgc-year3': '3rd Year',
            'gdgc-mentor': 'Mentor',
            'gdgc-current': 'Current',
            'gdgc-title': 'Google Developer Groups on Campus FST - Complete Journey',
            'gdgc-desc': 'Four-year progressive journey from member to mentor in Google Developer Groups on Campus at Faculty of Sciences of Tunis, demonstrating leadership growth and community dedication.',
            'gdgc-badge': '🎯 Complete Leadership Path',
            
            // Footer
            'footer-rights': '© 2025 Akrem ALAMINE. All rights reserved.',
            'footer-tagline': 'AI & Cloud Engineer | Building the future with technology'
        },
        fr: {
            // Navigation
            'Home': 'Accueil',
            'Experience': 'Expérience',
            'Education': 'Formation',
            'Projects': 'Projets',
            'Certifications': 'Certifications',
            'Hackathons': 'Hackathons',
            'Volunteering': 'Bénévolat',
            
            // Section headings - both directions
            'Professional Experience': 'Expérience Professionnelle',
            'Expérience Professionnelle': 'Expérience Professionnelle',
            'Education': 'Formation',
            'Formation': 'Formation',
            'Projects': 'Projets',
            'Projets': 'Projets',
            'Hackathons & Competitions': 'Hackathons & Compétitions',
            'Hackathons & Compétitions': 'Hackathons & Compétitions',
            'Volunteering & Community': 'Bénévolat & Communauté',
            'Bénévolat & Communauté': 'Bénévolat & Communauté',
            
            // Hero section
            'hero-subtitle': 'Ingénieur IA & Cloud | Développeur Full-Stack | Passionné d\'Innovation',
            
            // Experience section
            'cloud-engineer-title': 'Stagiaire Ingénieur Cloud',
            'cloud-engineer-company': 'RIF (Rassemblement des Ingénieurs Francophones)',
            'cloud-engineer-location': 'Paris, France (À distance)',
            'cloud-engineer-desc': 'Conception et implémentation d\'une architecture cloud privée avec 99,9% de disponibilité',
            
            'ai-engineer-title': 'Stagiaire Ingénieur IA',
            'ai-engineer-company': 'Talan Tunisia',
            'ai-engineer-location': 'Tunis, Tunisie (Temps plein - Sur site)',
            'ai-engineer-desc1': 'Développement d\'un outil IA pour accompagner les entrepreneurs de l\'idéation au lancement sur le marché',
            'ai-engineer-desc2': 'Construction d\'une plateforme IA de bout en bout utilisant LangChain, LangGraph, Python et Next.js',
            'ai-engineer-award': '🏆 Prix d\'Or & Première Place - Talan Summer Camp 2025',
            'award-ceremony': 'Cérémonie de Remise des Prix',
            'award-ceremony-desc': 'Réception du prix d\'or au Talan Summer Camp 2025',
            'demo-title': 'Démo Brand Orb AI',
            'demo-desc': 'Démonstration en direct des fonctionnalités de la plateforme IA',
            
            'software-dev-title': 'Stagiaire Développement Logiciel',
            'software-dev-company': 'Société Variété Industrielle',
            'software-dev-location': 'Tunis, Tunisie',
            'software-dev-desc1': 'Développement d\'une application Flutter pour le contrôle à distance d\'éclairage extérieur via ESP8266',
            'software-dev-desc2': 'Intégration de protocoles IoT permettant un contrôle en temps réel',
            
            // Education section
            'eng-degree-title': 'Diplôme d\'Ingénieur en Informatique',
            'eng-degree-school': 'Faculté des Sciences de Tunis',
            'eng-degree-location': 'Tunis, Tunisie',
            'eng-degree-skill1': 'Cloud, Réseaux & DevOps : Expérience AWS avancée, déploiement cloud, réseaux IP/industriels/sans fil, sécurité des infrastructures sur site et cloud',
            'eng-degree-skill2': 'Développement Java/JEE Avancé : Maîtrise approfondie de Java, Java EE (servlets, JSP, EJB), conception d\'applications web et distribuées',
            'eng-degree-skill3': 'Langages de Programmation : C/C++, PHP, SQL, PL/SQL, HTML, CSS, JavaScript',
            'eng-degree-skill4': 'Bases de Données & Administration Système : Gestion de bases de données, administration Linux, systèmes distribués',
            
            'prep-classes-title': 'Classes Préparatoires de Deux Ans en Informatique',
            'prep-classes-school': 'Faculté des Sciences de Tunis',
            'prep-classes-location': 'Tunis, Tunisie',
            'prep-classes-skill1': 'Mathématiques & Physique : Calcul avancé, algèbre linéaire, équations différentielles, mécanique et électromagnétisme',
            'prep-classes-skill2': 'Fondamentaux de l\'Informatique : Algorithmes, structures de données, fondamentaux de programmation et pensée computationnelle',
            'prep-classes-skill3': 'Programmation de Base : Introduction à C/C++, Python et concepts de programmation orientée objet',
            'prep-classes-skill4': 'Excellence Académique : Base solide en informatique théorique et modélisation mathématique',
            
            // Projects section
            'project1-title': 'Brand Orb AI - Plateforme de Développement de Marque de Bout en Bout',
            'project1-desc': 'Plateforme alimentée par l\'IA guidant les entrepreneurs de l\'idéation au lancement sur le marché avec création automatisée d\'identité de marque et déploiement sur les réseaux sociaux.',
            'project2-title': 'Déploiement d\'Application Web AWS',
            'project2-desc': 'Architecture cloud haute disponibilité avec frontend, backend, base de données, stockage, surveillance et sécurité.',
            'project3-title': 'Application Web de Location de Voitures - Architecture SOA',
            'project3-desc': 'Implémentation d\'architecture orientée services pour système de gestion de location de voitures.',
            'project4-title': 'Application de Contrôle d\'Éclairage IoT Flutter',
            'project4-desc': 'Application mobile pour le contrôle à distance de systèmes d\'éclairage extérieur utilisant des protocoles IoT.',
            
            // Certifications section
            'azure-cert-title': 'Microsoft Certified: Azure Fundamentals',
            'azure-cert-desc': 'Démonstration des connaissances de base des services cloud et de leur provisionnement via Microsoft Azure.',
            'oci-cert-title': 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
            'oci-cert-desc': 'Validation des connaissances fondamentales des principaux services cloud publics d\'Oracle Cloud Infrastructure (OCI).',
            'aviatrix-cert-title': 'Multicloud Network Associate – Aviatrix Certified Engineer (ACE)',
            'aviatrix-cert-desc': 'Valide la compréhension des concepts de base de mise en réseau et de sécurité sur AWS, Azure, GCP et OCI.',
            
            // Hackathons section
            'talan-hackathon-title': 'Talan Summer Camp 2025',
            'talan-hackathon-desc': 'Prix d\'Or & Première Place pour Brand Orb AI - Plateforme de Développement de Marque de Bout en Bout',
            'talan-winner': '🥇 Gagnant',
            'smu-hackathon-title': 'SMU Hackathon',
            'smu-hackathon-desc': 'Deuxième place pour solution technologique innovante',
            'smu-second': '🥈 Deuxième Place',
            
            // Volunteering section
            'gdgc-journey': 'Parcours GDGC FST',
            'gdgc-member': 'Membre',
            'gdgc-year1': '1ère Année',
            'gdgc-media': 'Responsable Média',
            'gdgc-year2': '2ème Année',
            'gdgc-leader': 'Leader & Organisateur',
            'gdgc-year3': '3ème Année',
            'gdgc-mentor': 'Mentor',
            'gdgc-current': 'Actuel',
            'gdgc-title': 'Google Developer Groups on Campus FST - Parcours Complet',
            'gdgc-desc': 'Parcours progressif de quatre ans de membre à mentor dans Google Developer Groups on Campus à la Faculté des Sciences de Tunis, démontrant la croissance du leadership et l\'engagement communautaire.',
            'gdgc-badge': '🎯 Parcours de Leadership Complet',
            
            // Footer
            'footer-rights': '© 2025 Akrem ALAMINE. Tous droits réservés.',
            'footer-tagline': 'Ingénieur IA & Cloud | Construire l\'avenir avec la technologie'
        }
    };
    
    // Update section headings with better logic
    document.querySelectorAll('.section h2').forEach(heading => {
        const currentText = heading.textContent.trim();
        const translation = translations[currentLang][currentText];
        if (translation) {
            heading.textContent = translation;
        }
    });
    
    // Update all other translatable elements
    const elementsToTranslate = [
        // Hero section
        { selector: '.hero p[data-translate="hero-subtitle"]', key: 'hero-subtitle' },
        
        // Experience section
        { selector: '[data-translate="cloud-engineer-title"]', key: 'cloud-engineer-title' },
        { selector: '[data-translate="cloud-engineer-company"]', key: 'cloud-engineer-company' },
        { selector: '[data-translate="cloud-engineer-location"]', key: 'cloud-engineer-location' },
        { selector: '[data-translate="cloud-engineer-desc"]', key: 'cloud-engineer-desc' },
        
        { selector: '[data-translate="ai-engineer-title"]', key: 'ai-engineer-title' },
        { selector: '[data-translate="ai-engineer-company"]', key: 'ai-engineer-company' },
        { selector: '[data-translate="ai-engineer-location"]', key: 'ai-engineer-location' },
        { selector: '[data-translate="ai-engineer-desc1"]', key: 'ai-engineer-desc1' },
        { selector: '[data-translate="ai-engineer-desc2"]', key: 'ai-engineer-desc2' },
        { selector: '[data-translate="ai-engineer-award"]', key: 'ai-engineer-award' },
        { selector: '[data-translate="award-ceremony"]', key: 'award-ceremony' },
        { selector: '[data-translate="award-ceremony-desc"]', key: 'award-ceremony-desc' },
        { selector: '[data-translate="demo-title"]', key: 'demo-title' },
        { selector: '[data-translate="demo-desc"]', key: 'demo-desc' },
        
        { selector: '[data-translate="software-dev-title"]', key: 'software-dev-title' },
        { selector: '[data-translate="software-dev-company"]', key: 'software-dev-company' },
        { selector: '[data-translate="software-dev-location"]', key: 'software-dev-location' },
        { selector: '[data-translate="software-dev-desc1"]', key: 'software-dev-desc1' },
        { selector: '[data-translate="software-dev-desc2"]', key: 'software-dev-desc2' },
        
        // Education section
        { selector: '[data-translate="eng-degree-title"]', key: 'eng-degree-title' },
        { selector: '[data-translate="eng-degree-school"]', key: 'eng-degree-school' },
        { selector: '[data-translate="eng-degree-location"]', key: 'eng-degree-location' },
        { selector: '[data-translate="eng-degree-skill1"]', key: 'eng-degree-skill1' },
        { selector: '[data-translate="eng-degree-skill2"]', key: 'eng-degree-skill2' },
        { selector: '[data-translate="eng-degree-skill3"]', key: 'eng-degree-skill3' },
        { selector: '[data-translate="eng-degree-skill4"]', key: 'eng-degree-skill4' },
        
        { selector: '[data-translate="prep-classes-title"]', key: 'prep-classes-title' },
        { selector: '[data-translate="prep-classes-school"]', key: 'prep-classes-school' },
        { selector: '[data-translate="prep-classes-location"]', key: 'prep-classes-location' },
        { selector: '[data-translate="prep-classes-skill1"]', key: 'prep-classes-skill1' },
        { selector: '[data-translate="prep-classes-skill2"]', key: 'prep-classes-skill2' },
        { selector: '[data-translate="prep-classes-skill3"]', key: 'prep-classes-skill3' },
        { selector: '[data-translate="prep-classes-skill4"]', key: 'prep-classes-skill4' },
        
        // Projects section
        { selector: '[data-translate="project1-title"]', key: 'project1-title' },
        { selector: '[data-translate="project1-desc"]', key: 'project1-desc' },
        { selector: '[data-translate="project2-title"]', key: 'project2-title' },
        { selector: '[data-translate="project2-desc"]', key: 'project2-desc' },
        { selector: '[data-translate="project3-title"]', key: 'project3-title' },
        { selector: '[data-translate="project3-desc"]', key: 'project3-desc' },
        { selector: '[data-translate="project4-title"]', key: 'project4-title' },
        { selector: '[data-translate="project4-desc"]', key: 'project4-desc' },
        
        // Certifications section
        { selector: '[data-translate="azure-cert-title"]', key: 'azure-cert-title' },
        { selector: '[data-translate="azure-cert-desc"]', key: 'azure-cert-desc' },
        { selector: '[data-translate="oci-cert-title"]', key: 'oci-cert-title' },
        { selector: '[data-translate="oci-cert-desc"]', key: 'oci-cert-desc' },
        { selector: '[data-translate="aviatrix-cert-title"]', key: 'aviatrix-cert-title' },
        { selector: '[data-translate="aviatrix-cert-desc"]', key: 'aviatrix-cert-desc' },
        
        // Hackathons section
        { selector: '[data-translate="talan-hackathon-title"]', key: 'talan-hackathon-title' },
        { selector: '[data-translate="talan-hackathon-desc"]', key: 'talan-hackathon-desc' },
        { selector: '[data-translate="talan-winner"]', key: 'talan-winner' },
        { selector: '[data-translate="smu-hackathon-title"]', key: 'smu-hackathon-title' },
        { selector: '[data-translate="smu-hackathon-desc"]', key: 'smu-hackathon-desc' },
        { selector: '[data-translate="smu-second"]', key: 'smu-second' },
        
        // Volunteering section
        { selector: '[data-translate="gdgc-journey"]', key: 'gdgc-journey' },
        { selector: '[data-translate="gdgc-member"]', key: 'gdgc-member' },
        { selector: '[data-translate="gdgc-year1"]', key: 'gdgc-year1' },
        { selector: '[data-translate="gdgc-media"]', key: 'gdgc-media' },
        { selector: '[data-translate="gdgc-year2"]', key: 'gdgc-year2' },
        { selector: '[data-translate="gdgc-leader"]', key: 'gdgc-leader' },
        { selector: '[data-translate="gdgc-year3"]', key: 'gdgc-year3' },
        { selector: '[data-translate="gdgc-mentor"]', key: 'gdgc-mentor' },
        { selector: '[data-translate="gdgc-current"]', key: 'gdgc-current' },
        { selector: '[data-translate="gdgc-title"]', key: 'gdgc-title' },
        { selector: '[data-translate="gdgc-desc"]', key: 'gdgc-desc' },
        { selector: '[data-translate="gdgc-badge"]', key: 'gdgc-badge' },
        
        // Footer
        { selector: '[data-translate="footer-rights"]', key: 'footer-rights' },
        { selector: '[data-translate="footer-tagline"]', key: 'footer-tagline' }
    ];
    
    // Update all translatable elements
    elementsToTranslate.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element && translations[currentLang][item.key]) {
            element.textContent = translations[currentLang][item.key];
        }
    });
}

// Theme toggle functionality
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.toggle-icon');
    
    if (currentTheme === 'dark') {
        themeToggle.classList.add('active');
        themeIcon.textContent = '☀️';
    } else {
        themeToggle.classList.remove('active');
        themeIcon.textContent = '🌙';
    }
    
    // Save theme preference
    localStorage.setItem('theme', currentTheme);
}

// Language toggle functionality
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.toggle-text');
    
    if (currentLang === 'fr') {
        langToggle.classList.add('active');
        langText.textContent = 'FR';
    } else {
        langToggle.classList.remove('active');
        langText.textContent = 'EN';
    }
    
    // Update navigation text
    document.querySelectorAll('.nav-links a').forEach(link => {
        const text = link.getAttribute(`data-${currentLang}`);
        if (text) link.textContent = text;
    });
    
    // Update section headings and content
    updateLanguageContent();
    
    // Save language preference
    localStorage.setItem('language', currentLang);
}

// Initialize theme and language from localStorage
function initializePreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'en';
    
    if (savedTheme === 'dark') {
        currentTheme = 'light';
        toggleTheme();
    }
    
    if (savedLang === 'fr') {
        currentLang = 'en';
        toggleLanguage();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const langToggleBtn = document.getElementById('langToggle');
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }
    
    initializePreferences();
});
