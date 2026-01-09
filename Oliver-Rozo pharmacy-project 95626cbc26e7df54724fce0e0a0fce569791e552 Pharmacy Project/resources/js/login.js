const form = document.getElementById('form')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (emailInput.value === 'staff@gmail.com' && passwordInput.value === 'staffpassword') {
        alert('Successfully logged in')
        window.location.href = './staff.html'
    } else if (emailInput.value === 'client@gmail.com' && passwordInput.value === 'clientpassword') {
        alert('Successfully logged in')
        window.location.href = 'client.html'
    } else {
        alert('Wrong email or password')
    }
})