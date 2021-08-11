import {
    getResourses
} from '../services/services';

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

export default getsCards;