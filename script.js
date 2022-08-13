document.addEventListener('DOMContentLoaded', () => {
    blogContainer = document.querySelector('.blog_container');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(arr => {
            arr.forEach(item => {
                const post = `<div class="post_container">
                    <h2 class="title">${item.title}</h2>
                    <p class="body">${item.body}</p>
                </div>`;
                
                blogContainer.innerHTML += post;
            })
        })
});