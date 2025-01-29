// Login form handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically make an API call to verify credentials
        // For demo purposes, we'll just redirect to home page
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    });
}

// Register form handling
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('كلمات المرور غير متطابقة');
            return;
        }

        // Here you would typically make an API call to register the user
        // For demo purposes, we'll just redirect to login page
        window.location.href = 'index.html';
    });
}

// Check if user is logged in
function checkAuth() {
    if (!localStorage.getItem('isLoggedIn') && !window.location.href.includes('index.html') && !window.location.href.includes('register.html')) {
        window.location.href = 'index.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Check authentication status when page loads
window.addEventListener('load', checkAuth);
