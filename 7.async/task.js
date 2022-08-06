class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null; 
    }

    addClock(time, funcCallBack, idCall) {
        if(idCall === undefined){
            throw new Error('error text')
        } else if(this.alarmCollection.some((element) => element.idCall === idCall)){
            return console.error("Call is already existed");
        }  
        return this.alarmCollection.push({idCall, time, funcCallBack});

    }

    removeClock(idCall) {
        let results = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((id) => id.idCall !== idCall);
        return !(results === this.alarmCollection.length);

    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`; 
       }

    start() {
        
        function checkClock(clock) {
            if(clock.time === this.getCurrentFormattedTime()){
                return clock.funcCallBack();
            }
        }
            if(this.timerId === null){
                this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(clock => checkClock(clock));
                }, 1000);
            }

            return;
    
    } 

    stop() {
        if(this.timerId !== null){
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