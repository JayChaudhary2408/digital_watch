document.addEventListener('DOMContentLoaded', function() {
    const SecondHand = document.querySelector('.sec');
    const minHand = document.querySelector('.min');
    const HourHand = document.querySelector('.hour');
    const time = document.getElementById('time');
    const radioBtn1 = document.getElementById('radioBtn1');
    const radioBtn2 = document.getElementById('radioBtn2');

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondDegree = ((seconds / 60) * 360) + 90;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        SecondHand.style.transform = `rotate(${secondDegree}deg)`;

        const mins=now.getMinutes();
        const minsDegrees=((mins / 60) * 360) + 90;
        const formattedMins = mins < 10 ? '0' + mins : mins;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;

        const Hour=now.getHours()% 12 || 12;
        const formattedHours = Hour < 10 ? '0' + Hour : Hour;
        const HourDegrees=((Hour / 12) * 360) + 90;
        HourHand.style.transform = `rotate(${HourDegrees}deg)`;
        time.innerHTML = formattedHours + ":" + formattedMins + ":" + formattedSeconds;

        if(now.getHours()>12){  
                radioBtn2.checked = true;
                radioBtn1.disabled = true;

        }else{
            radioBtn1.checked = true;
            radioBtn2.disabled = true;

        }
    }
   
    setDate();

    setInterval(setDate, 1000);
});