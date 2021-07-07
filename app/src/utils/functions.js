const mathjs = require('mathjs');

exports.calculateMedian = function (num_array) {
    return num_array != null && num_array != undefined && num_array.length > 0 ? mathjs.median(num_array) : null;
};