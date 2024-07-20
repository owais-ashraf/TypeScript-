function ParentFunction(callbackFunc: () => void){
console.log("I am Parent Function");
callbackFunc();
}
ParentFunction(ChildFunction)

function ChildFunction(){
console.log("I am Child Function");
}


