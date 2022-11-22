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
            if (data.Message !== undefined) {
                return alert(data.Message)
            }
            const token = data.token
            const id = data.userId
            const name = data.name
            const admin = data.isAdmin
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);
            localStorage.setItem("admin", admin)
            //window.location = '../home';
        })
        .catch(function (err) { return err.status(500).json({ err }) })
}

export default userLogin;