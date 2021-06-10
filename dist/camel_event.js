var event_options = {
    trace:false,
    trace_func:function(){},
}



function CamelEvent(event,handler,opt=event_options){
    return {
        event:event,
        handler:handler,
        args:[],
        Emit:function (...args) {
            if(opt.trace === true){
                opt.trace_func(event)
            }
            handler(event,...args)
        },
        attach: function (param) {
            this.args.push(param)
        }
    }
}


function CamelEventsTree(camel_events=[]) {
    return {
        events:camel_events,
        addEvent:function (camel_event) {
            this.events.push(camel_event)
        },

        /**
         * 
         * @param {string} event_name 
         * @returns {event:string,handler:function} 
         * @todo Find frist Event with event name and return it.if the event names are duplicated it will find the frist match.
         */
        FindEvent:function (event_name) {
            var result = undefined
            for (let index = 0; index < this.events.length; index++) {
                const e = this.events[index];
                if(e.event === event_name){
                    result = e
                    break;
                }
            }
            return result
        },

        EmitIf:function (condition,result=true,event_name,...args) {
            if(condition === result){
                var eve = this.FindEvent(event_name)
                if(eve === undefined){
                    console.error(new Error("Error: undefined event" + event_name))
                }else {
                    eve.Emit(...args)
                }
            }
        },

        EmitOne: function (event_name,...args) {
            var event = this.FindEvent(event_name)
            if(event === undefined){
                console.log(new Error("Error: undefined event"+event_name))
            }else { 
                event.Emit(...args)
            }
        }
    }
}