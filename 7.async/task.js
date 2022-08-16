class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }


    addClock(time, callback, id) {
        debugger;
        
        
            if (id == undefined) {
                throw new Error("Параметр id не передан");}
            
        
      
           
            
            for (let i = 0; i<this.alarmCollection.length; i++)
            if (this.alarmCollection[i].id == id) {
                console.error("Такой звонок уже существует");
                return;

            }
            
        
        
        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id})
    }

       
    
    

    removeClock(idToDelete) {
        debugger;

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





     
     start(){
        function checkClock(element) {
            for(element of this.alarmCollection){
            if (element.time == this.getCurrentFormattedTime){
                callback;
             }
            }
        }         if (this.timerId == null){
                 this.timerId =  setInterval(() => {this.alarmCollection.forEach(checkClock())})
        }
        
    }


        

stop(){
    if(Number.isInteger(this.element.time)){
        clearInterval;
        Object.defineProperty(this.element.id,"time","");
    }
}
}