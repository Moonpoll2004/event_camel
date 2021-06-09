# Event Camle

### helper library for allowing us to deal with events on the browser our any javascript enviroment
### it is fast as the camel in the race.

## Features:
* Easy To use.
* very portable.you can take it and use it in big projects.
* very small.you can go and check how it works.
* checking For Events strings(length less than 1 and spaces are not allowed ).
* clear errors when they Occures.
* browser friendly.

## Installation

### clone this repo
```bash
git clone https://github.com/Moonpoll2004/event_camel
```

## Basic Usage

### You can listen for any events and emit them like in nodejs 

```javascript
//require event_camel
const event_camel = require("event_camel")

//my camel object
const camel = new event_camel()

//Adding events and their handlers
camel.On("my-event",function(name) {
    console.log(name)
})

camel.On("calc",function(number,num2) {
    console.log(Math.pow(number,num2))
})

//over write an exsiting event
camel.On("my-event",function(name) {
    console.log("Hi we over write priviose event ",name)
})


//Emiting Events
camel.Emit("my-event","khattab")
camel.Emit("calc",12,2)


//error: "undefined event"
camel.Emit("some undefiend event",12)

```

## listing for Dom Events

### You can play with dom events and change them with your handlers

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EventCamel-browser example</title>
    <script src="./path/to/event_camel.js"></script>
</head>
<body>
    <div id="counter">0</div>
    <button class="btn" id="inc-btn">Increment</button>
    <button class="btn" id="dec-btn">Decrement</button>
    <script>
        const camel = new EventCamel()
        var counter = document.getElementById("counter")

        //get Increment and decremnt buttons
        var inc_btn = document.getElementById("inc-btn")
        var dec_btn = document.getElementById("dec-btn")


        //setting main events "decremnt" and "increment"
        camel.On("increment",function(payload){
            counter.innerText = parseInt(counter.innerText) + payload  
        })

        camel.On("decrement",function(payload){
            counter.innerText = parseInt(counter.innerText) - payload
        })


        //buttons listeners
        inc_btn.addEventListener("click",function(){
            camel.Emit("increment",1)
        })

        dec_btn.addEventListener("click",function(){
            camel.Emit("decrement",1)
        })
    </script>
</body>
</html>
```

### It looks like the double work but in fact It can very help full at orgnize your code accross many javascript files
### for the full styled example check dist folder.



