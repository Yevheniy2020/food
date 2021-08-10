function slider({
    slider,
    prev,
    next,
    wrapper
}) {

    //Slider

    const slides = document.querySelectorAll(slider),
        prevSlide = document.querySelector(prev),
        nextSlide = document.querySelector(next),
        counterSliders = document.querySelector('#current'),
        counterTotalSliders = document.querySelector('#total');
    let oneSlide = 1;
    let offset = 0;

    const flexSlider = document.querySelector('.offer__slider-flex'),
        wrapperSlider = document.querySelector(wrapper),
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

export default slider;