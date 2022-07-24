class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null; 
    }

    addClock(time, funcCallBack, idCall) {
        if(idCall === undefined){
            throw new Error('error text')
        } else if(this.alarmCollection.some((element) => element.idCall === idCall)){
            return console.error("Call is already existed");
        }  
        return this.alarmCollection.push({idCall, time, funcCallBack})

    }

    removeClock(idCallDel) {
        let results = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((id) => id.idCallDel !== idCallDel);
        return !(results === this.alarmCollection.length);

    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`; 
       }

    start() {
        
        if (this.timerId !== null){
            return;
        }
        function checkClock(clock) {
            if(clock.time == this.getCurrentFormattedTime()){
                return clock.funcCallBack;
            }
        }
    
    } 

    stop() {
        if(this.timerId){
            clearInterval(this.timerId)
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach((item) => console.log(item.id, item.time))
    }

    clearAlarms() {
        this.alarmCollection = [];
        this.stop();
      }

}