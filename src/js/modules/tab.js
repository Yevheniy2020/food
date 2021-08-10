function tab(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    //Tab
    const tabContent = document.querySelectorAll(tabsSelector), //all picture
        tabButtons = document.querySelector(tabsContentSelector), //conttainer with tab
        tabBtn = document.querySelectorAll(tabsParentSelector); //all tab

    function hideTabContent() {

        tabContent.forEach(picture => {
            picture.style.display = 'none';
            picture.classList.remove('fade');
        });
        tabBtn.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i) {

        tabContent[i].style.display = 'block';
        tabContent[i].classList.add('fade');
        tabBtn[i].classList.add(activeClass);

    }

    hideTabContent();
    showTabContent(0);

    tabButtons.addEventListener('click', (e) => {

        //delegation 
        if (e.target && e.target.classList.contains(tabsParentSelector.slice(1))) {

            tabBtn.forEach((item, i) => {
                if (e.target == item) {

                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });
}


export default tab;