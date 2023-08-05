let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

const display = document.getElementById("clock")
const audio = new Audio("/mixkit-alarm-digital-clock-beep-989.wav")
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

setInterval(() => {
    let currentTime = new Date()
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours()
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds()
}, 1000)

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime)

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime()
            alarmTimeout = setTimeout(function () {
                audio.play()
            }, timeout)

            alert("Alarm Set!")
        }
    }
}

function clearAlarm() {
    audio.pause()
    if (alarmTimeout) {
        clearTimeout(alarmTimeout)
        alert("Alarm Cleared!")
    }
}