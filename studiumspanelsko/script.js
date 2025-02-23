// ======================
// Constants and Variables
// ======================
const mainContent = document.querySelector('.main-content');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const logo = document.querySelector('.sidebar .logo');
const languageSwitcher = document.querySelector('.language-switcher');
let currentLanguage = localStorage.getItem('language') || 'cz';

// ======================
// Language Functions
// ======================

// Fetch translations for the selected language
async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`languages/${lang}.json`);
        if (!response.ok) throw new Error('Failed to fetch language data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching language data:', error);
        return {};
    }
}

// Update content with translations
async function updateContent(lang) {
    const langData = await fetchLanguageData(lang);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
}

// Change language and update content
async function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    await updateContent(lang);
}

// ======================
// Page Loading Functions
// ======================

// Load page content dynamically
async function loadPage(page) {
    // Clear existing content
    mainContent.innerHTML = '';

    // Load content based on the selected page
    switch (page) {
        case 'home':
            mainContent.innerHTML = `
                <h1 data-i18n="welcome_message">Welcome to Our Website!</h1>
                <p data-i18n="paragraph1">This is the first paragraph of text.</p>
                <p data-i18n="paragraph2">This is the second paragraph of text.</p>
                <form id="emailForm">
                    <input type="email" id="email" placeholder="Mail" required>
                    <textarea id="question" placeholder="..." required></textarea>
                    <select id="preferredLanguage">
                        <option value="cz">čeština</option>
                        <option value="sk">slovenčina</option>
                        <option value="esp">español</option>
                        <option value="en">english</option>
                    </select>
                    <button type="submit">&#128232</button>
                </form>
                <h2 data-i18n="contact_us">Contact Us</h2>
                <div class="team">
                    <div class="member">
                        <img src="assets/kata.png" alt="Person 1">
                        <p data-i18n="name1">Highschool: XYZ, University: ABC, Degree: BSc</p>
                        <p data-i18n="tel1">tel:</p>
                        <p data-i18n="school1">highschool</p>
                        <p data-i18n="uni1">university</p>
                        <p data-i18n="degree1">degree</p>
                        <p data-i18n="spain1">2023</p>
                    </div>
                    <div class="member">
                        <img src="assets/maty.jpg" alt="Person 2">
                        <p data-i18n="name2">Highschool: XYZ, University: ABC, Degree: BSc</p>
                        <p data-i18n="tel2">tel:</p>
                        <p data-i18n="school2">highschool</p>
                        <p data-i18n="uni2">university</p>
                        <p data-i18n="degree2">degree</p>
                        <p data-i18n="spain2">2023</p>
                    </div>
                    <div class="member">
                        <img src="assets/person3.jpg" alt="Person 3">
                        <p data-i18n="name3">Highschool: XYZ, University: ABC, Degree: BSc</p>
                        <p data-i18n="tel3">tel:</p>
                        <p data-i18n="school3">highschool</p>
                        <p data-i18n="uni3">university</p>
                        <p data-i18n="degree3">degree</p>
                        <p data-i18n="spain3">2023</p>
                    </div>
                    <div class="member">
                        <img src="assets/kaja.jpg" alt="Person 4">
                        <p data-i18n="name4">Highschool: XYZ, University: ABC, Degree: BSc</p>
                        <p data-i18n="tel4">tel:</p>
                        <p data-i18n="school4">highschool</p>
                        <p data-i18n="uni4">university</p>
                        <p data-i18n="degree4">degree</p>
                        <p data-i18n="spain4">2023</p>
                    </div>
                </div>
            `;
            break;

        case 'todo-list':
            mainContent.innerHTML = `
                <h1 data-i18n="todo_list">Todo List</h1>
                <ul>
                    <li data-i18n="todo1">Task 1</li>
                    <li data-i18n="todo2">Task 2</li>
                    <li data-i18n="todo3">Task 3</li>
                </ul>
            `;
            break;
        case 'useful-info':
            mainContent.innerHTML = `
                <h1 data-i18n="infoh1">H1</h1>
                    <p data-i18n="infop1">p1</p>
                <h2 data-i18n="info2kolik">H2</h2>
                    <p data-i18n="infop2">p2</p>
                <h2 data-i18n="info3sance">H3</h2>
                    <p data-i18n="infop3">p3</p>
                <h2 data-i18n="info4kdy">H4</h2>
                    <p data-i18n="infop4">p4</p>
                    <ul>
                        <li data-i18n="info4a1">a1</li>
                        <li data-i18n="info4a2">a2</li>
                    </ul>
                    <p data-i18n="info4b">b</p>
                <h2 data-i18n="info5jakvypada">H5</h2>
                    <p data-i18n="infop5">p5</p>
                <h2 data-i18n="info6pozor">H6</h2>
                    <p data-i18n="infop61">p6</p>
                    <p data-i18n="infop62">p6</p>
                    <p data-i18n="infop63">p6</p>
                    <p data-i18n="infop64">p6</p>
                    <p data-i18n="infop65">p6</p>
                    <p data-i18n="infop66">p6</p>
                    <p data-i18n="infop67">p6</p>
                    <p data-i18n="infop68">p6</p>
                    <p data-i18n="infop69">p6</p>
                    <p data-i18n="infop610">p6</p>
                <h2 data-i18n="info7zarucuje">H7</h2>
                    <p data-i18n="infop7">p7</p>
                <ul>
                    <li data-i18n="info7a1">a1</li>
                    <li data-i18n="info7a2">a2</li>
                    <li data-i18n="info7a3">a3</li>
                </ul>
                    <p data-i18n="infop72">b</p>
                <h2 data-i18n="info8prijit">H8</h2>
                    <p data-i18n="infop8">p8</p>
                <p data-i18n="infokonec">p9</p>
            `;
            break;
        case 'contact':
            mainContent.innerHTML = `
                <h1 data-i18n="contact-h1">Contact Us</h1>
                <p data-i18n="contact-paragraph">This is the contact page.</p>
            `;
            break;
        case 'faq':
            mainContent.innerHTML = `
                <h1 data-i18n="faq-h1">FAQ</h1>
                <p data-i18n="faq-paragraph">This is the FAQ page.</p>
            `;
            break;

        // Add other pages here...
    }

    // Update translations for the new content
    await updateContent(currentLanguage);

    // Reattach event listeners (e.g., for the form)
    if (page === 'home') {
        document.getElementById('emailForm').addEventListener('submit', handleFormSubmit);
    }
}

// ======================
// Event Handlers
// ======================

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;
    const preferredLanguage = document.getElementById('preferredLanguage').value;

    // Save the question and email (you can send this to a server or store it locally)
    console.log({ email, question, preferredLanguage });

    alert('Your question has been submitted!');
}

// Handle sidebar link clicks
function handleSidebarLinkClick(event) {
    event.preventDefault();
    const page = this.getAttribute('data-page');
    loadPage(page);
}

// Handle logo click (redirect to home page)
function handleLogoClick() {
    loadPage('home');
}

// ======================
// Initialization
// ======================

// Initialize the page
async function initializePage() {
    // Load the home page by default
    loadPage('home');

    // Add event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', handleSidebarLinkClick);
    });

    // Add event listener to the logo
    logo.addEventListener('click', handleLogoClick);

    // Update content with the preferred language
    await updateContent(currentLanguage);
}

// Start the application
document.addEventListener('DOMContentLoaded', initializePage);


// ======================
// Menu for small devices
// ======================
function toggleMenu() {
    var sidebar = document.querySelector(".sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}