

const name = document.querySelector('#nameInput');
const salary = document.querySelector('#salaryInput');
const infoBtn = document.querySelector('#info-btn');
const salaryError = document.querySelector('.salary-error');
const error = document.querySelector('.error');
const usersCard = document.querySelector('.users__card')

infoBtn.addEventListener('click', () => {
    let usersInfo = {
        name: name.value,
        salary: salary.value
    }
    if(!name.value || !salary.value){
        error.classList.add('active');
    }
    else{
        error.classList.remove('active');
        if(!Number(salary.value)){
            salaryError.classList.add('active');
        }
        else{
            salaryError.classList.remove('active');
            console.log(usersInfo);
            usersCard.classList.add('active');
            usersCard.innerHTML += `<tr>
                    <td>${name.value}</td>
                    <td>${salary.value}</td>
                </tr>`;
                name.value = '';
                salary.value = '';
        }
    }

})