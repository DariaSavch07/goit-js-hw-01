function getShippingMessage(countryMessage, priceMessage, deliveryFeeMessage) {


    const totalPriceMessage = priceMessage + deliveryFeeMessage;

    const message =  `Shipping to ${countryMessage} will cost ${totalPriceMessage} credits`;
}


console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
