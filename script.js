document.addEventListener('DOMContentLoaded', () => {
    blogContainer = document.querySelector('.main_blog_container');
    secondBlogContainer = document.querySelector('.second_blog_container');
    thirdBlogContainer = document.querySelector('.third_blog_container')

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(arr => {
            let firstBlockElements = '';
            let secondBlockElements = '';
            let thirdBlogElements = '';


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

                firstBlockElements += post;
            }

            for (let i = 4; i < 8; i++) {
                let post = `<div class="mini_post_container">
                    <div class="pic"></div>
                    <div class="wrapper_text">
                        <h2 class="title">${arr[i].title}</h2>
                        <p class="text">${arr[i].body}</p>
                    </div>
                </div>`
                
                secondBlockElements += post;
            }

            for (let i = 9; i < 18; i++) {
                let post = `<div class="medium_post_container">
                    <div class="pic"></div>
                    <div class="wrapper_text">
                        <h2 class="title">${arr[i].title}</h2>
                        <p class="text">${arr[i].body}</p>
                    </div>
                </div>`

                if (i === 9) {
                    post = `<div class="linewrapper_medium_post_container">${post}`
                } else if (i === 11) {
                    post = `${post}</div>`;
                } else if (i === 12) {
                    post = `<div class="linewrapper_medium_post_container">${post}`
                } else if (i === 14) {
                    post = `${post}</div>`;
                } else if (i === 15) {
                    post = `<div class="linewrapper_medium_post_container">${post}`
                } else if (i === 17) {
                    post = `${post}</div>`;
                }

                thirdBlogElements += post;
            }



            
            blogContainer.innerHTML = firstBlockElements;
            secondBlogContainer.innerHTML = secondBlockElements;
            thirdBlogContainer.innerHTML = thirdBlogElements;

        })
});