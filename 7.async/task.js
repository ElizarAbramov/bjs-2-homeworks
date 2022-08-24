class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }


    addClock(time, callback, id) {



        if (id == undefined) {
            throw new Error("Параметр id не передан");
        }

        for (let i = 0; i < this.alarmCollection.length; i++)
            if (this.alarmCollection[i].id == id) {
                console.error("Такой звонок уже существует");
                return;

            }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id
        })
    }

    removeClock(idToDelete) {


        const alarmCollection = this.alarmCollection.filter(e => e.id != idToDelete);

        if (alarmCollection.length == this.alarmCollection.length) {
            return false;
        }
        this.alarmCollection = alarmCollection
        return true;
    }

    getCurrentFormattedTime() {
        let d = new Date();

        return (("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
    }

    start() {
        function checkClock(clock) {
            if (clock.time === this.getCurrentFormattedTime()) {
                clock.callback();
            }
        }

        if (this.timerId == null) {
            this.timerId = setInterval(() => { for (let element of this.alarmCollection) { checkClock.call(this, element) } });

        }

    }

    stop() {

        if (Number.isInteger(this.timerId)) {
            clearInterval();
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length)
        this.alarmCollection.forEach(element => { console.log("Будильник номер " + element.id + " заведен на " + element.time) })


    }

    clearAlarms() {
        this.stop()
        this.alarmCollection.length = 0;
    }

}

function testCase() {

    let phoneAlarm = new AlarmClock();
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    let time = () => {
        if (m == 60) {

            m = 0;
            h++;
            if (h == 24) {
                h = 0;
            }
        } return (("0" + h).slice(-2) + ":" + ("0" + m).slice(-2));
    }
   
    phoneAlarm.addClock(time(), () => console.log("Пора вставать!"), 1);
    
    time = (() => {
        let x = 1; if ((m + x) > 59) {
            x = x - (x - 1);
            m = 0;
            h++;
            if (h == 24) {
                h = 0;
            }
        } return (("0" + h).slice(-2) + ":" + ("0" + (m + x)).slice(-2))
    });
   
    phoneAlarm.addClock(time(), () => { console.log("Вставай уже!"); phoneAlarm.removeClock(2) }, 2);
   
    time = (() => {
        let x = 2; if ((m + x) > 59) {
            x = x - (x - 1);
            m = 0;
            h++;
            if (h == 24) {
                h = 0;
            }
        } return (("0" + h).slice(-2) + ":" + ("0" + (m + x)).slice(-2))
    });
   
    phoneAlarm.addClock(time(), () => { console.log("Вставай уже, а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms() }, 3);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
}