// [7,1,5,3,6,4]
const maxProfit = (prices) => {
    let minPrice = Infinity; // Initialize to a very high value
    let maxProfit = 0; // Initialize profit

    for (let price of prices) {
        // Update minPrice if the current price is lower
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Calculate profit if we sell at the current price
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit; // Return the maximum profit

}

console.log(maxProfit([1,6,4,3,1]))