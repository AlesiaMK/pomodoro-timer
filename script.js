const startBtn = document.getElementById('start');
const pomodoroTime = document.getElementById('pomodoro-time');
let timerId;
const breakBtn = document.getElementById('break');
const resetBtn = document.getElementById('reset')


startBtn.addEventListener('click', () => {
    if (startBtn.textContent === 'stop') {
        startBtn.textContent = 'start';
        clearInterval(timerId)
    } else {
        startBtn.textContent = 'stop';
        timerId = setInterval(() => {
            const time = pomodoroTime.textContent.split(':');
            let minutes = parseInt(time[0]);
            let seconds = parseInt(time[1]);
            seconds--;
            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }
            if (minutes === 0 && seconds === 0) {
                startBtn.textContent = 'start';
                clearInterval(timerId);
                pomodoroTime.textContent = '25:00';
                return pomodoroTime;
            }
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            pomodoroTime.textContent = `${ minutes }:${ seconds }`
        }, 100)
    }
});

resetBtn.addEventListener('click', () => {
    pomodoroTime.textContent = '25' + ':' + '00';
    clearInterval(timerId);
    minutes = 25;
    seconds = 0;
    startBtn.textContent = 'start'
})

breakBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.textContent = 'start';
    minutes = 5;
    seconds = 0;
    pomodoroTime.textContent = `0${ minutes }: 0${ seconds }`;

    resetBtn.addEventListener('click', () => {
        pomodoroTime.textContent = '05' + ':' + '00';
        clearInterval(timerId);
        minutes = 5;
        seconds = 0;
        startBtn.textContent = 'start'
    })
});

/* не до конца понимаю почему переключатель между break и pomodoro не работает:(
    Подскажи пожалуйста где что я не дописала или наоборот неправильно написала, для себя хочу понять
    и код, чтобы правильный был */