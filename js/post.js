function createPost (obj, objUser, i) {
    return `<div class="post_container">
        <a href="/">
            <img class="back" src="../img/left-arrow.png">
        </a>
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

// Функция для получения данных о конкретном посте по его id
function fetchPost(postId, callback) { 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(obj => callback(obj));
}

// Получаем данные о юзере по id
function fetchUser(postId, obj, postPageContainer) {
    fetch(`https://jsonplaceholder.typicode.com/users/${obj.userId}`)
            .then(response => response.json())
            .then(objUser => {
                let post = createPost(obj, objUser, postId)
                postPageContainer.innerHTML = post;
            });
}

// Получаем все посты конкретного юзера по user id
function fetchUserPosts (obj, recommendedPostsSection, postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${obj.userId}`)
        .then(response => response.json())
        .then(userPosts => {
            let recommendedPosts = ''
            let newArr = userPosts.filter(item => {
                // if (Number(obj.id) !== Number(postId)) {
                //     return true;
                // } else {
                //     return false;
                // }
                return Number(item.id) !== Number(postId);
            });

            for (let i = 0; i < 5; i++) {
                recommendedPosts += `<div class="post_container">
                    <div class="pic">
                        <img src="img/${newArr[i].id}_img.jpg">
                    </div>
                    <h2 class="title">
                        <a href="post.html?post_id=${newArr[i].id}">${newArr[i].title}</a>
                    </h2>
                </div>`
            }
            recommendedPostsSection.innerHTML = recommendedPosts;
        })   
}

// Получаем комментарии
function fetchComments (postId, commentSection) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(arr => {
            let comments = '';
            arr.forEach(comment => {
                comments += `<div class="comment_wrap">
                    <div class="photo_and_name">
                        <img class="comment_photo" src="../img/user.png">
                        <p class="comment_name">${comment.name}</p>
                    </div>
                    <p class="comment_body">${comment.body}</p>
                </div>`;
            })
            commentSection.innerHTML = comments;
        });
}

document.addEventListener('DOMContentLoaded', () => {

    const postPageContainer = document.querySelector('.post_page_container');
    const commentSection = document.querySelector('.comment_section');
    const recommendedPostsSection = document.querySelector('.recommended_posts_section');

    const param = window.location.search;
    const postId = param.substring(param.indexOf('=') + 1);

    fetchPost(postId, obj => {
        fetchUser(postId, obj, postPageContainer);
        fetchUserPosts(obj, recommendedPostsSection, postId);
        fetchComments (postId, commentSection);
    });
});