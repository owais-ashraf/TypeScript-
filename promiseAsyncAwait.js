function washing() {
    console.log("Wasing Started . . .");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done. . .");
        }, 5000);
    });
}
function soaking() {
    console.log("Soaking Started . . .");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking done. . .");
        }, 3000);
    });
}
function iron() {
    console.log("Ironing Started . . .");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ironing done. . .");
        }, 2000);
    });
}
;
async function RunWashingMachine() {
    await washing();
    await soaking();
    await iron();
}
RunWashingMachine();
export {};
