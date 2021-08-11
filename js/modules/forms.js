import {
    closeModal,
    openModal
} from './modal';
import {
    postData
} from '../services/services';

function postModal(modalTimer) {


    //Server

    function showThanksModal(message) {

        //layout modal
        const prevModalDialog = document.querySelector('.modal__dialog');

        //prev = none
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimer); // open '.modal' withou modal__dialog


        //modal dialog logic
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class = "modal__close" data-close>×</div>
                <div class = "modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);


        //timer 
        setTimeout(() => {

            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 2000);
    }

    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        bindDataForm(item);
    }); //for every form, connect funct




    function bindDataForm(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = 'img/form/spinner.svg';
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);


            const formData = new FormData(form); //all input value => formData

            // const obj = {}; 
            //     //we are can`t json.str(formData) -> We need:
            // formData.forEach((value, i)=>{obj[i] = value;});

            //or
            //trn json        trn in obj        formData trn in массив с массивами    




            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(() => {
                    showThanksModal('Thank you!');
                    form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal('Error');
                });
        });
    }

}

export default postModal;