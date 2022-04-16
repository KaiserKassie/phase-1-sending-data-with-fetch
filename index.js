// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(resp => resp.json())
//     .then(data => console.log(data))



function submitData(user, username) {
    const formData = {
        name: user,
        email: username,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then(data => console.log(data))
}

submitData("Kassie", "kassie.becker@gmail.com")