function generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+';

    let password = '';
    let allowedChars = '';

    if (document.getElementById('includeUppercase').checked) {
        allowedChars += uppercaseChars;
    }
    if (document.getElementById('includeLowercase').checked) {
        allowedChars += lowercaseChars;
    }
    if (document.getElementById('includeNumbers').checked) {
        allowedChars += numbers;
    }
    if (document.getElementById('includeSpecialChars').checked) {
        allowedChars += specialChars;
    }

    const passwordLength = 8;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById('password').value = password;
}