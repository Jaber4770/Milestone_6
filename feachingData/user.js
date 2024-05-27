function loadUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(users){
    let userList = document.getElementById("user-list");
    for(const user of users){
        let li = document.createElement("li");
        li.innerText = user.name;
        userList.appendChild(li);
    }
}