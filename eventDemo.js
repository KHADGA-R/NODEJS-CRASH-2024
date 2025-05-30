import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();


function greetHandler(name) {
    console.log('Hello ! ' + name);
}

function goodbyeHandler(name) {
    console.log('Goodbye ! ' + name);
}


//Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);


//Emit event

myEmitter.emit('greet', 'Ram');
myEmitter.emit('goodbye', 'Hari');


// Error handling

myEmitter.on('error', (err)=> {
    console.log('An error occured: ', err.message);
});

// Simulate an error
myEmitter.emit('error', new Error('Something went wrong!'));