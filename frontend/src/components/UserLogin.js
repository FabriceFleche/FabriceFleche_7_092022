function userLogin(enteredEmail, enteredPassword) {
    const baseURL = "http://localhost:3000/api/auth/login"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: enteredEmail, password: enteredPassword })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            const token = data.token
            const id = data.userId
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);
            window.location = '../home';
        });
}

export default userLogin;