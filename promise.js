let moneyBorrow = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failure");
    }, 3000);
});
moneyBorrow
    .then((value) => {
    console.log(value);
    console.log("Thank you for returning money");
})
    .catch((value) => {
    console.log(value);
    console.log("Please pay your money");
});
export {};
