document.addEventListener('DOMContentLoaded', function() {
    const SecondHand = document.querySelector('.sec');
    const minHand = document.querySelector('.min');
    const HourHand = document.querySelector('.hour');
    const time = document.getElementById('time');

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondDegree = ((seconds / 60) * 360) + 90;
        SecondHand.style.transform = `rotate(${secondDegree}deg)`;
        const mins=now.getMinutes();
        const minsDegrees=((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
        const Hour=now.getHours();
        const HourDegrees=((Hour / 12) * 360) + 90;
        HourHand.style.transform = `rotate(${HourDegrees}deg)`;
        time.innerHTML = Hour+":"+mins+":"+seconds;

    }
   
    setDate();

    setInterval(setDate, 1000);
});