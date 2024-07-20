function washing(callback: () => void) {
    console.log('Washing started . . .');
    setTimeout(() => {
        console.log("washing done");
        console.log("##########################################################################################################");
        callback();
    }, 5000);
}

function dry(callback: () => void) {
    console.log('Drying started. . .');
    setTimeout(() => {
        console.log("Drying done");
        console.log("##########################################################################################################");
        callback();
    }, 3000);
}

function iron() {
    console.log('Iron started . . . ');
    setTimeout(() => {
        console.log("Iron done");
        console.log("##########################################################################################################");
    }, 2000);
}
washing (function(){
    dry(function(){
        iron();
    });
});

// function sayHello() {
//     console.log(`Hello this is ${a} and my brother ${b} saying this to the world`);
// }

// function sayhi() {
//     console.log("Hey . . . ");
// }
// function addNumber(num1, num2, callback) {
//     sayHello();
//     sayhi();
//     console.log(num1 + num2);
//     callback()
// }

// let a = 29;
// let b = 30;

// addNumber(a, b, sayHello);