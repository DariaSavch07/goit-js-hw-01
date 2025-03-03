function makeTransaction(quantityTransaction, pricePerDroidTransaction) {

const quantityTransaction = 10;

const pricePerDroidTransaction = 800;

const totalPriceTransaction = quantityTransaction * pricePerDroidTransaction;

const messageTransaction = `You ordered ${quantityTransaction} droids worth ${totalPriceTransaction} credits!`;

}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
