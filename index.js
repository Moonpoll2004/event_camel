const EventCamel = function() {
    this.events = {}

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

    this.Emit = function (event,...args) {
        if(this.events.hasOwnProperty(event) === true){
            var callback = this.events[event]
            callback(...args)
        }else{
            var err = new Error("undefined event")
            console.error(err)
        }
    }
}

module.exports = EventCamel;