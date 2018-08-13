class EventBus {
    constructor(){
        this.events = {};
    }

    on(event, callback){
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback)
    }
    
    trigger(event) {
        let callbacks = this.events[event];
        //[callback, callback]
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }
    }
}


const eb = new EventBus();

eb.on('hey', () => {
    console.log('hey tim');
});

eb.on('hey', () => {
    console.log('hey brian');
});

eb.on('bye', () => {
    console.log('bye tim');
});

eb.trigger('hey');


// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log('Index: ' + i + ', element: ' + arr[i]);
//         }, 0);
//     })(i)
// }