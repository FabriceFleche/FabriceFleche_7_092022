function userCreate(enteredName, enteredEmail, enteredPassword) {
    const baseURL = "http://localhost:3000/api/auth/signup"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: enteredName, email: enteredEmail, password: enteredPassword })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            alert('Votre compte à été créé, vous pouvez maintenant vous connecter avec votre email et votre mot de passe')
            //window.location = '../Connection';
        });
}

export default userCreate;