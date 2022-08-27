function createPost (obj, i) {
    return `<div class="post_container">
        <h2 class="title">${obj.title}</h2>
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
            let post = createPost(obj, postId)
            postPageContainer.innerHTML = post;

        });
});