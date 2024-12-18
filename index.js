form.addEventListener('submit', (e) => {
    e.preventDefault();
    const correctUsername = 'user';
    const correctPassword = 'pass';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
});
