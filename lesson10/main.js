// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1 = document.forms.form1;
form1.addEventListener('submit', function (e){
    e.preventDefault();

    let div = document.createElement('div');
    div.innerText = `Name: ${this.firstName.value} Surname: ${this.surName.value} Age: ${this.age.value}`
    document.body.appendChild(div);
})





