document.addEventListener('DOMContentLoaded', () => {
    blogContainer = document.querySelector('.main_blog_container');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(arr => {
            let firstBlockElemeents = '';
            for (let i = 0; i < 4; i++) {
                let post = `<div class="post_container">
                    <div class="pic"></div>
                    <div class="wrapper_text">
                        <h2 class="title">${arr[i].title}</h2>
                        <p class="text">${arr[i].body}</p>
                    </div>
                    
                </div>`;

                if (i === 0) {
                    post = `<div class="first_post_container">
                        ${post}
                    </div>`;
                } else if (i === 1) {
                    post = `<div class="second_post_container">
                        ${post}`;
                } else if (i === 3) {
                    post = `${post}</div>`;
                }

                firstBlockElemeents += post;
            }
            blogContainer.innerHTML = firstBlockElemeents;
        })
});