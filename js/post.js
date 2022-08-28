function createPost (obj, objUser, i) {
    return `<div class="post_container">
        <h2 class="title">${obj.title}</h2>
        <div class="author_info">
            <p class="name">Author: ${objUser.name}</p>
            <p class="city">City: ${objUser.address.city}</p>
        </div>
        <div class="pic_and_text">
            <p class="text">${obj.body}</p>
            <div class="pic">
                <img src="img/${i}_img.jpg">
            </div>
        </div>    
    </div>`;          
}

document.addEventListener('DOMContentLoaded', () => {

    const postPageContainer = document.querySelector('.post_page_container');

    const param = window.location.search;
    const postId = param.substring(param.indexOf('=') + 1);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(obj => {
            fetch(`https://jsonplaceholder.typicode.com/users/${obj.userId}`)
                .then(response => response.json())
                .then(objUser => {
                    let post = createPost(obj, objUser, postId)
                    postPageContainer.innerHTML = post;
                });
        });

    
});