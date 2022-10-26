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
            const token = data.token
            localStorage.setItem("token", token);
            window.location = '../home';
        });
}

export default userCreate;