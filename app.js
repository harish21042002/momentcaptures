let loginPage = (e) => {
    e.preventDefault()
    let user = e.target[0]
    let password = e.target[1]

    if (user.value === 'harish' && password.value === '123456') {
        window.location = './home.html' 
    }
    else {
        let err = 'border:solid 3px red'
        user.style.cssText = err;
        password.style.cssText = err;
    }
}