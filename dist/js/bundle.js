/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((module) => {

function calc() {

    //Calc

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;


    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function innitLocalSettings(parent, activeClass) {

        const elements = document.querySelectorAll(`${parent} div`);

        elements.forEach(elem => {

            elem.classList.remove(activeClass);

            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }

        });

    }

    innitLocalSettings('#gender', 'calculating__choose-item_active');
    innitLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return; //stop next codes 
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();


    function getStaticInformation(parent, activeClass) {

        const elements = document.querySelectorAll(`${parent} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');

                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');

                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(item => {
                    item.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');


    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {

                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');


}

module.exports = calc;

/***/ }),

/***/ "./src/js/modules/get.js":
/*!*******************************!*\
  !*** ./src/js/modules/get.js ***!
  \*******************************/
/***/ ((module) => {

function getsCards() {

    // const cardContainer = document.querySelector('.menu__field .container');

    class menuCard {

        constructor(img, altimg, title, descr, price, container) {

            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.container = document.querySelector(container);
        }

        render() {

            const cardItem = document.createElement('div');
            cardItem.innerHTML = `
                <div class="menu__item">
                    <img src=${this.img} alt=${this.altimg}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
                `;
            this.container.append(cardItem);
        }
    }





    //---test




    const getResourses = async (url) => {

        //GET 
        const res = await fetch(url, {});

        //  if error (catch can`t work, if errors 404 ,405..)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`); //send error
        }

        return await res.json();
    };

    getResourses('http://localhost:3000/menu')
        .then(data => {


            // data.forEach(obj =>{
            //     new menuCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price).render();
            // });

            //or

            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new menuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    //---------------------------------------------------or

    // axios.get('http://localhost:3000/menu').then(data => {

    //     data.data.forEach(({
    //         img,
    //         altimg,
    //         title,
    //         descr,
    //         price
    //     }) => {
    //         new menuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });


    //---------------------------------------------------or

    // new menuCard(
    //     "img/tabs/elite.jpg",
    //     "vegy	",
    //     'Меню “Премиум”',
    //     "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    //     21,
    //     ".menu .container",
    //     '.menu__field .container'
    // ).render();

}

module.exports = getsCards;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((module) => {

function modal() {

    //Modal

    const modalBtnOpen = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    //open-close

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    }


    //events

    modalBtnOpen.forEach((btn) => {

        btn.addEventListener('click', () => {
            openModal();
        });
    });



    modal.addEventListener('click', (e) => {
        //target == modal window (no dialog) //or target == data-close (== "" - no value)
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {

        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    //modal-timer 

    const modalTimer = setInterval(openModal, 5000);


    //modal-scroll

    function showModalByScroll() {
        //scroll part               // see window wihout scroll             //all height
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;

/***/ }),

/***/ "./src/js/modules/post.js":
/*!********************************!*\
  !*** ./src/js/modules/post.js ***!
  \********************************/
/***/ ((module) => {

function postModal() {


    //Server

    function showThanksModal(message) {

        //layout modal
        const prevModalDialog = document.querySelector('.modal__dialog');

        //prev = none
        prevModalDialog.classList.add('hide');
        openModal(); // open '.modal' withou modal__dialog


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
            closeModal();
        }, 2000);
    }

    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        bindDataForm(item);
    }); //for every form, connect funct



    // //function in real flow (потоке)
    const postData = async (url, data) => {

        //fethc = async code, we dont know when return res
        const res = await fetch(url, {
            //stop res while res = fetch
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }, //for json
            body: data
        });

        return await res.json();
    };

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

module.exports = postModal;

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider() {

    //Slider

    const slides = document.querySelectorAll('.offer__slide'),
        prevSlide = document.querySelector('.offer__slider-prev'),
        nextSlide = document.querySelector('.offer__slider-next'),
        counterSliders = document.querySelector('#current'),
        counterTotalSliders = document.querySelector('#total');
    let oneSlide = 1;
    let offset = 0;

    const flexSlider = document.querySelector('.offer__slider-flex'),
        wrapperSlider = document.querySelector('.offer__slider-wrapper'),
        innerSlider = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(wrapperSlider).width; //650px -> window where we see picture

    flexSlider.style.display = 'flex';
    wrapperSlider.style.overflow = 'hidden';
    innerSlider.style.width = 100 * slides.length + '%';
    innerSlider.style.transition = '0.5s all';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    counterSliders.textContent = oneSlide;

    function deleteNotDigits(size) {
        return +size.replace(/\D/g, "");
    }

    nextSlide.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {

            offset = 0;
            oneSlide = 1;
            counterSliders.textContent = oneSlide;
        } else {
            offset += deleteNotDigits(width);
            counterSliders.textContent = ++oneSlide;
        }
        innerSlider.style.transform = `translateX(-${offset}px)`;

    });


    prevSlide.addEventListener('click', () => {

        if (offset <= 0) {

            offset = deleteNotDigits(width) * (slides.length - 1);
            oneSlide = slides.length;
            counterSliders.textContent = oneSlide;
        } else {

            offset -= deleteNotDigits(width);
            counterSliders.textContent = --oneSlide;
        }
        //offset = 650 
        innerSlider.style.transform = `translateX(-${offset}px)`;
    });


    //---------------------------------SECOND SLIDER

    // showSlides(oneSlide);

    // //show

    // function showSlides(i) {


    //     if(i > slides.length){
    //         oneSlide = 1;
    //     }
    //     if(i <= 0){
    //         oneSlide = slides.length;
    //     }

    //     slides.forEach(slide =>{slide.style.display = 'none';});

    //     slides[oneSlide - 1].style.display = '';
    //     counterSliders.textContent = oneSlide; 
    // }

    // //event

    // nextSlide.addEventListener('click' , ()=>{

    //     showSlides(++oneSlide);
    // });

    // prevSlide.addEventListener('click' , ()=>{
    //     showSlides(--oneSlide);
    // });


}

module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tab.js":
/*!*******************************!*\
  !*** ./src/js/modules/tab.js ***!
  \*******************************/
/***/ ((module) => {


function tab(){

    //Tab
    const tabContent = document.querySelectorAll('.tabcontent'), //all picture
    tabButtons = document.querySelector('.tabheader__items'), //conttainer with tab
    tabBtn = document.querySelectorAll('.tabheader__item'); //all tab

    function hideTabContent(){

        tabContent.forEach(picture =>{
            picture.style.display = 'none';
            picture.classList.remove('fade');
        });
        tabBtn.forEach(tab =>{tab.classList.remove('tabheader__item_active');});
    }

    function showTabContent(i){

        tabContent[i].style.display = 'block';
        tabContent[i].classList.add('fade');
        tabBtn[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent(0);

    tabButtons.addEventListener('click' , (e)=>{

        //delegation 
        if(e.target && e.target.classList.contains('tabheader__item')){
            
            tabBtn.forEach((item, i)=>{
                if(e.target == item){

                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });
}


module.exports = tab;

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

function timer(){

    //Timer

    const deadline = '2021-07-24', //create const with last date

    //input date
    daysDate = document.querySelector('#days'),
    hoursDate = document.querySelector('#hours'),
    minutesDate = document.querySelector('#minutes'),
    secondsDate = document.querySelector('#seconds');

    function getTimer(endtime){
                //string in milliseconds  //now day in millisecond
        const time = Date.parse(endtime) -  Date.parse(new Date()),
            days = Math.floor(time / (1000 * 24 * 60 * 60)),
            hours = Math.floor((time / (1000 * 60 * 60)% 24)),
            minutes = Math.floor((time / 1000 / 60) % 60),
            seconds = Math.floor((time / 1000) % 60),
            interval = setInterval(setTimer, 1000);
            return { 
                "total" : time,
                "days" : days,
                "hours": hours,
                "minutes" : minutes,
                "seconds" : seconds
            };

        function setTimer() {

            const timer = getTimer(deadline); 
    
            daysDate.innerHTML = timer.days;
            hoursDate.innerHTML = timer.hours;
            minutesDate.innerHTML = timer.minutes;
            secondsDate.innerHTML = timer.seconds;
            

            //milliseconds
            if(timer.total < 0){
                clearInterval(interval);
                daysDate.innerHTML = 0;
                hoursDate.innerHTML = 0;
                minutesDate.innerHTML = 0;
                secondsDate.innerHTML = 0;
                
            }
        }

    }
    getTimer(deadline);


}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', function () {

    const tab = __webpack_require__(/*! ./modules/tab */ "./src/js/modules/tab.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
        calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js"),
        get = __webpack_require__(/*! ./modules/get */ "./src/js/modules/get.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
        post = __webpack_require__(/*! ./modules/post */ "./src/js/modules/post.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");

    slider();
    post();
    modal();
    get();
    calc();
    tab();
    timer();



});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map