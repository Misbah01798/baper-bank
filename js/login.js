document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'misbah@gmail.com' && password === 'misbah')
    {
        window.location.href = 'inside.html';
    }
    else{
        alert("your password wrong");
    }
})