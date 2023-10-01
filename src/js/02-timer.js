import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const input=document.querySelector('input#datetime-picker');
const startBtn=document.querySelector('.btn-start');
const refs ={
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

startBtn.setAttribute('disabled', 'pointer-events: none;');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      if ((selectedDates[0])<options.defaultDate){
        alert("Please choose a date in the future");
      }{
        startBtn.disabled = false;
        startBtn.addEventListener('click', start);
        function start(event) {
          startBtn.setAttribute('disabled', 'pointer-events: none;'); 
        let ms=((selectedDates[0])-options.defaultDate);
        const intervalId=  setInterval(() => {
            ms-=1000;
               const time=convertMs(ms);
               function addLeadingZero(value){
                return value.toString().padStart(2, "0");
              };


               setTimeout(()=>{
              if (time.days===0&time.hours===0&time.minutes===0&time.seconds===0){clearInterval(intervalId)};
              ;
                    })

       refs.days.textContent=addLeadingZero(time.days);
       refs.hours.textContent=addLeadingZero(time.hours);
       refs.minutes.textContent=addLeadingZero(time.minutes);
       refs.seconds.textContent=addLeadingZero(time.seconds);
       setTimeout(()=>{
        if (time.days===0&time.hours===0&time.minutes===0&time.seconds===0){clearInterval(intervalId)};
      })
             }, 1000);
             
           };
         }},
         };
         
       flatpickr(input, options);
       
      