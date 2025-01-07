export const checkForValidation=(email,password)=>{
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/.test(password);
    console.log(emailValid,passwordValid)

    if(!emailValid)
        return 'Email is not valid';
    else if(!passwordValid)
        return 'Password is not valid'
    else
    return null
}