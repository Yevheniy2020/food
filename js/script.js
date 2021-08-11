import tab from './modules/tab';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';

//import "slick-slider" //we can import library after npm slick-slider

import {
    openModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {

    const modalTimer = setInterval(() => openModal('.modal', modalTimer), 5000);

    slider({
        prev: '.offer__slider-prev',
        next: '.offer__slider-next',
        slider: '.offer__slide',
        wrapper: '.offer__slider-wrapper'
    });
    forms(modalTimer);
    modal('[data-modal]', '.modal', modalTimer);
    cards();
    calc();
    tab('.tabcontent', '.tabheader__items', '.tabheader__item', 'tabheader__item_active');
    timer('2021-08-22');



});