document.addEventListener('DOMContentLoaded',function(){
    var btnSubmit = document.getElementById('btn-submit');
    var originalColor = btnSubmit.style.backgroundColor;

    btnSubmit.addEventListener('mouseover',function(){
        btnSubmit.style.backgroundColor='#618685';
    });
    btnSubmit.addEventListener('mouseout',function(){
        btnSubmit.style.backgroundColor=originalColor;
    });
    
    btnSubmit.addEventListener('click',function(){
        btnSubmit.style.backgroundColor='#c83349';
        var userEmail = document.getElementById('user-email');
        var email = userEmail.value;
        var userPassword = document.getElementById('user-password');
        var password = userPassword.value;

        if(email == 'arif@gmail.com' && password=='realXmadrid')
            {
                location.href='bank.html'
            }
            else
            {
                alert('Invalid user');
            }
        
    })
});
