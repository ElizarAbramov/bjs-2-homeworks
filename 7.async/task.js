
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
        let h = d.getHours();
        let m = d.getMinutes();

        if (m < 10) {
            m = "0" + m;
        }
        return h + ":" + m;
    }

    start() {
        debugger;   
        function checkClock(time,callback,id) {

          
            if (time == AlarmClock.getCurrentFormattedTime) {
                callback();
            }

         if (this.timerId == null) {
            this.timerId = setInterval(() => {for(element of this.alarmCollection){checkClock}});
        
        }
    
    }
    
        }
       
    
        
        

    

    stop() {
        

        if (Number.isInteger(this.timerId)) {
            clearInterval();
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(element => {console.log("Будильник номер " +  element.id  + " заведен на " +  element.time) })
            
      
    }

    clearAlarms(){
        this.stop()
        this.alarmCollection.length = 0;  
    }

    
}

function testCase() {
    debugger;
        let phoneAlarm = new AlarmClock();
        phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("Пора вставать!"), 1);
        phoneAlarm.addClock(getAnotherCurrentFormattedTime(), () => { console.log("Давай,вставай уже!"); phoneAlarm.removeClock(2) }, 2);
    
        phoneAlarm.addClock(getOneMoreCurrentFormattedTime(), () => { console.log("Вставай уже, а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms() }, 3);
    
        phoneAlarm.printAlarms();
    
        phoneAlarm.start();
    
    
    
        function getAnotherCurrentFormattedTime() {
            let d = new Date();
            let h = d.getHours();
            let m = (d.getMinutes() + 1);
    
            if (m < 10) {
                m = "0" + m;
            }
            return h + ":" + m;
        }
    
        function getOneMoreCurrentFormattedTime() {
            let d = new Date();
            let h = d.getHours();
            let m = (d.getMinutes() + 2);
    
            if (m < 10) {
                m = "0" + m;
            }
            return h + ":" + m;
        }
    
        
    }

