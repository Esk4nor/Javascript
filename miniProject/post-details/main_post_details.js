// На странице post-details.html:
// // 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// // 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
const infoId = new URL(location.href).searchParams.get('infoId');
const div = document.createElement('div');
div.classList.add('center');
const wrapComment = document.createElement('div');
fetch(`https://jsonplaceholder.typicode.com/posts/${infoId}`)
    .then((resolve) => resolve.json())
    .then((post) =>{

        const ul = document.createElement('ul');
        for (const postElement in post) {
            const li = document.createElement('li');
            li.innerText = `${postElement} - ${post[postElement]}`;
            ul.append(li);
            div.appendChild(ul);
        }

    });
const titleComment = document.createElement('h1');
titleComment.innerText = `Comment:`;
titleComment.classList.add('commentCenter')
fetch(`https://jsonplaceholder.typicode.com/posts/${infoId}/comments`)
    .then((resolve) => resolve.json())
    .then((comment) =>{

        for (const commentElement of comment) {
            const div = document.createElement('div');
            div.innerText = `Comment - ${commentElement.body}`;
            div.classList.add('row');
            wrapComment.appendChild(div);

        }

    });
wrapComment.classList.add('comment');
document.body.append(div,titleComment, wrapComment);
