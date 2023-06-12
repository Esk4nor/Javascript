// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) =>{
        const wrapper = document.getElementsByClassName('wrapper')[0];
        for (const user of users) {
            const user_div = document.createElement('div');
            user_div.innerText = `№${user.id}. ${user.name}`;
            user_div.classList.add(`div${user.id}`,'flex')
            const  button = document.createElement('button');
            button.innerText = `more info`;
            button.classList.add('custom')
            user_div.appendChild(button);
            wrapper.appendChild(user_div);
            button.addEventListener('click', function (e){
                location.href = `user-details/user-details.html?userId=${user.id}`
            });

    }})

//
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)