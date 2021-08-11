 //open-close

 function closeModal(modalSelector) {
     const modal = document.querySelector(modalSelector);
     modal.classList.remove('show');
     modal.classList.add('hide');
     document.body.style.overflow = '';
 }

 function openModal(modalSelector, modalTimer) {

     const modal = document.querySelector(modalSelector);
     modal.classList.add('show');
     modal.classList.remove('hide');

     document.body.style.overflow = 'hidden';

     if (modalTimer) {
         clearInterval(modalTimer);
     }

 }

 function modal(triggerSelector, modalSelector, modalTimer) {

     //Modal

     const modalBtnOpen = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector);




     //events

     modalBtnOpen.forEach((btn) => {
         btn.addEventListener('click', () => openModal(modalSelector, modalTimer));
     });




     modal.addEventListener('click', (e) => {
         //target == modal window (no dialog) //or target == data-close (== "" - no value)
         if (e.target == modal || e.target.getAttribute('data-close') == '') {
             closeModal(modalSelector);
         }
     });

     document.addEventListener('keydown', (e) => {

         if (e.code === 'Escape' && modal.classList.contains('show')) {
             closeModal(modalSelector);
         }
     });

     //modal-timer 




     //modal-scroll

     function showModalByScroll() {
         //scroll part               // see window wihout scroll             //all height
         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
             openModal(modalSelector, modalTimer);
             window.removeEventListener('scroll', showModalByScroll);
         }
     }

     window.addEventListener('scroll', showModalByScroll);

 }

 export default modal;
 export {
     closeModal
 };
 export {
     openModal
 };