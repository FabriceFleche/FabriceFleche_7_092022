function postDelete() {
    const baseURL = "http://localhost:3000/api/posts/:id"
    const requestOptions = {
        method: 'DEL',
        headers: {
            'Content-Type': 'application/json',
            Params: 'id:4',
            Authorization: `Bearer ${textFromStorage}`
        },

    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            window.location = '../home';
        });
}

export default postDelete;