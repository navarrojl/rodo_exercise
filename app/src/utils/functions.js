const mathjs = require('mathjs');

exports.calculateMedian = function (num_array) {
    return num_array != null && num_array != undefined && num_array.length > 0 ? mathjs.median(num_array) : null;
};

exports.isPossitiveNumber = function (number) {
    return Math.sign(parseInt(number)) === 1;
};

exports.isBetweenTwoNumbers = function (number, lower_number, greater_number) {
    return number > lower_number && number < greater_number;
};

// Special characters allowed - / _
exports.containsSpecialCharacters = function (text) {
    let special_characters = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>?¿]+/;
    return special_characters.test(text);
};