function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => showPost(data))
}
function showPost(posts){
    let postContainer = document.getElementById("post-container");
    for(const post of posts){
        let div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
            <h2>User ID: ${post.id}</h2>
            <h3>Post Title: ${post.title}</h3>
            <p>Description: ${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}

