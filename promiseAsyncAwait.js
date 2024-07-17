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
    const result1 = await washing();
    console.log(result1);
    console.log("##########################################################################################################");
    const result2 = await soaking();
    console.log(result2);
    console.log("##########################################################################################################");
    const result3 = await iron();
    console.log(result3);
    console.log("##########################################################################################################");
}
RunWashingMachine();
export {};
