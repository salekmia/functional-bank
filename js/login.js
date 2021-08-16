document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailfield = document.getElementById('user-email')
    userEmail = emailfield.value

    // get user password
    const passwordField = document.getElementById('user-password')
    userPassword = passwordField.value


    if(userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }

    

})