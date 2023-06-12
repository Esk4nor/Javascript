//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
const userId = new URL(location.href).searchParams.get('userId');
const wrapperUs = document.getElementsByClassName('wrapperUs')[0];
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) =>{

        const ul = document.createElement('ul');
        const liWrap = document.createElement('li');
        for (const userKey in user) {
            if (userKey !== 'address' && userKey!=='company'){
                const li = document.createElement('li');
                li.innerText = `${userKey} - ${user[userKey]}`;
                liWrap.appendChild(li);
            }
        }


        const liWrapAddress = document.createElement('li');
        liWrapAddress.innerText = `address:`
        const ulAddress = document.createElement('ul');
        liWrapAddress.appendChild(ulAddress);

        const ulGeo = document.createElement('ul');
        const liWrapGeo = document.createElement('li');
        liWrapGeo.innerText = `geo:`;
        liWrapGeo.appendChild(ulGeo);
        for (const addres in user.address) {
            if (addres!=='geo'){
                const liAddress = document.createElement('li');
                liAddress.innerText = `${addres} - ${user.address[addres]}`;
                ulAddress.appendChild(liAddress);
                liAddress.appendChild(liWrapGeo)
                }}


        for (const geoKey in user.address.geo) {
            const ligeo = document.createElement('li');
            ligeo.innerText = `${geoKey} - ${user.address.geo[geoKey]}`;
            ulGeo.appendChild(ligeo)
                }
        const ulCompany = document.createElement('ul');
        const liWrapCompany = document.createElement('li');
        liWrapCompany.innerText = `company:`;
        liWrapCompany.appendChild(ulCompany);

        for (const comp in user.company) {
            const liCompany = document.createElement('li');
            liCompany.innerText = `${comp} - ${user.company[comp]}`;
            ulCompany.appendChild(liCompany);

        }

        liWrap.append(liWrapAddress, liWrapCompany);
        ul.append(liWrap);
        wrapperUs.appendChild(ul)

    })
const button = document.createElement('button');
button.innerText = 'post of current user';
button.classList.add('mainButton');

const xxx = document.createElement('div');

xxx.append(wrapperUs,button)
document.body.appendChild(xxx)
const divWrap = document.createElement('div');



fetch(`https:jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) =>response.json())
    .then((post) =>{


        for (let i = 0; i < post.length; i++) {
            const postElement = post[i];



        button.addEventListener('click', function (e){

            const firstTitle = document.createElement('div');
            firstTitle.innerText = `Title - ${postElement.title}`;
            firstTitle.classList.add(`title${i+1}`,'usDetailsTitle');
            const buttonPost = document.createElement('button');
            buttonPost.innerText = `more info`;
            buttonPost.classList.add('custom');
            firstTitle.appendChild(buttonPost);
            divWrap.appendChild(firstTitle);
            buttonPost.addEventListener('click', function (e) {
                location.href = `../post-details/post-details.html?infoId=${postElement.id}`;
            });
            button.setAttribute('disabled', 'disabled')
        })

        }
        divWrap.classList.add('titleFlex');
    })
const wrap = document.getElementById('wrap');
wrap.append(xxx,divWrap)

