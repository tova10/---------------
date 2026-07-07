// טעינת טופס ההרשמה והפעלת האירוע שלו
function initRegisterForm() {
    const form = document.querySelector(".register-form");
    form.addEventListener("submit", registerUser);
}

// טיפול בשליחת טופס הרשמה
function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    if (!validateUserData(email, city)) {
        alert("יש למלא את כל הפרטים");
        return;
    }
    const user = createUser(email, city);
    saveUser(user);
    alert("נרשמת בהצלחה");
}

// בדיקת תקינות נתוני משתמש
function validateUserData(email, city) {
    return email !== "" && city !== "";
}

// יצירת אובייקט משתמש
function createUser(email, city) {
    return new User(email, city);
}

// שמירת משתמש זמנית
function saveUser(user) {
    // console.log("משתמש חדש:", user.getDetails());
}

// הפעלת המערכת לאחר טעינת הדף
document.addEventListener(
    "DOMContentLoaded",
    initRegisterForm
);