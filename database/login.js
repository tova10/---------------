initLogIn()

function initLogIn() {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', submitLoginForm);
}

function submitLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const city = document.getElementById('login-city').value;

    if (!validateUserData(email, city)) {
        return;
    }
    

    const user = createUser(email, city);
    if (checkUserCredentials(user)) {
        alert('התחברת בהצלחה');
    }
}

function validateUserData(email, city) {
    if (!checkUserEmail(email)) {
        errorMessage.textContent = 'יש להזין כתובת אימייל תקינה';
        return false;
    }
    if (email === '' || city === '') {
        errorMessage.textContent = 'יש למלא את כל הפרטים';
        return false;
    }
    if (!checkUserCredentials(createUser(email, city))) {
        errorMessage.textContent = 'פרטי המשתמש אינם נכונים';
        return false;
    }
    if (!(city  in ['ירושלים', 'תל אביב', 'חיפה'])) {
        errorMessage.textContent = 'יש לבחור עיר תקינה';
        return false;
    }
    return true;
}

function checkUserEmail(email) {
    // בדיקה אם כתובת האימייל תקינה
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function checkUserCredentials(user) {
    // בדיקה אם המשתמש קיים במערכת
    // כאן ניתן להוסיף לוגיקה לבדיקה מול מסד נתונים או מערך של משתמשים רשומים
    return true; // לדוגמה, תמיד מחזיר true
}

