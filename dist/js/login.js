const loginFormEl = document.querySelector('form#loginForm')

const checkIfUserLoggedIn = () => {
    const userObj = JSON.parse(localStorage.getItem('user'))

    console.log(userObj);
    
    if(userObj){
        window.location.replace('./dashboard.html')
    }
}
checkIfUserLoggedIn();

const handleLoginForm = (e) => {
    e.preventDefault()

    const formData = new FormData(loginFormEl)
    const { email , password} = Object.fromEntries(formData)

    loginUser(email , password)
    .then((user) => {
        //Local state in localStorage
        localStorage.setItem('user' , JSON.stringify(user))
        window.location.replace('./dashboard.html')
    })
    .catch(({ errorCode }) => {
         console.log(errorCode);
         //auth / invalid - credential;
         
        if (errorCode === 'auth/invalid-credential') {
            alert("Username/Password doesn't exist")
        }
        loginFormEl.reset()
    })
}

loginFormEl.addEventListener('submit' , handleLoginForm)