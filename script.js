function handleonSubmit(e){
    let email = document.getElementById('email')
    let error = document.getElementById("error")
    e.preventDefault(); 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value)){
        error.style.display='flex' 
    }
    else{
        email.value=""
        error.style.display='none'
        alert("Email Submitted")
        
    }
}
