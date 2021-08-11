function timer(deadline) {

    //Timer

    // const deadline = '2021-07-24', //create const with last date

    //input date
    const daysDate = document.querySelector('#days'),
        hoursDate = document.querySelector('#hours'),
        minutesDate = document.querySelector('#minutes'),
        secondsDate = document.querySelector('#seconds');

    function getTimer(endtime) {
        //string in milliseconds  //now day in millisecond
        const time = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(time / (1000 * 24 * 60 * 60)),
            hours = Math.floor((time / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((time / 1000 / 60) % 60),
            seconds = Math.floor((time / 1000) % 60),
            interval = setInterval(setTimer, 1000);
        return {
            "total": time,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };

        function setTimer() {

            const timer = getTimer(deadline);

            daysDate.innerHTML = timer.days;
            hoursDate.innerHTML = timer.hours;
            minutesDate.innerHTML = timer.minutes;
            secondsDate.innerHTML = timer.seconds;


            //milliseconds
            if (timer.total < 0) {
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

export default timer;