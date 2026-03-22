
function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
    let lower = word.toLowerCase();
    let reversed = lower.split('').reverse().join('');
    return lower === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };