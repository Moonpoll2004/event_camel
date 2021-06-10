const EventCamel = function() {
    this.events = {}

    /**
     * 
     * @param {string} event 
     * @param {function} handler 
     */
    this.On = function(event,handler){
        if(typeof(event) != "string"){
            var err = new Error("The events must be valid strings")
            console.error(err)
        }else if(event.trim().length < 1){
            var err = new Error("The String length must be more than 1")
            console.error(err)
        }else{
            this.events[event.trim()] = handler;
        }   
    }

    /**
     * 
     * @param {string} event 
     * @param  {...any} args 
     */
    this.Emit = function (event,...args) {
        if(this.events.hasOwnProperty(event) === true){
            var callback = this.events[event]
            callback(event,...args)
        }else{
            var err = new Error("undefined event")
            console.error(err)
        }
    }

    //emit all available events
    this.EmitAll = function () {
        const all_events = Object.keys(this.events)

        for (let i = 0; i < all_events.length; i++) {
            const e = all_events[i];
            this.Emit(e)
        }
    }


    /**
     * 
     * @param {Array} events 
     * @todo emit more than one event at once but you must declare it
     * @todo does not support passing args (yet)
     */
    this.EmitMany = function (events) {
        if(typeof(events) == "object"){
            for (var i = 0; i < events.length; i++) {
                const e = events[i];
                this.Emit(e)
            }
        }else{
            var err = new Error("TypeError: Typeof parameter 'events' must be valid array of strings")
            console.error(err)
        }
    }

    this.EmitIf = function(event_name,condition,result=true,...args){
        if(condition === result){
            this.Emit(event_name,args)
        }
    }
}