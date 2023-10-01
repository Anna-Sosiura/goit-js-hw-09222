
const startBtn= document.querySelector('button[data-start]');
const stopBtn= document.querySelector('button[data-stop]');
startBtn.addEventListener('click', start);

function start(event) {
    startBtn.setAttribute('disabled', 'pointer-events: none;');
    stopBtn.disabled = false;
    const intervalId= setInterval(() => {
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
        };
        document.body.style.background = getRandomHexColor();
        stopBtn.addEventListener('click', stop);
        function stop(event) {
            stopBtn.setAttribute('disabled', 'pointer-events: none;');
            startBtn.disabled = false;
            setTimeout(()=>{
                clearInterval(intervalId);
                      })
        }
         }, 1000);}


