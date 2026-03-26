document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-msg');

    const CORRECT_PASSWORD = "10032025"; 

    function checkPassword() {
        const enteredPassword = passwordInput.value.trim().toLowerCase();

        if (enteredPassword === CORRECT_PASSWORD) {
            // Şifre doğruysa YENİ SAYFAYA GİT!
            window.location.href = "mektup.html";
        } else {
            errorMsg.classList.add('show');
            passwordInput.value = ""; 
        }
    }

    loginBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
});