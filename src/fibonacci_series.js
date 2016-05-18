'use strict';

function fibonacci_series(n) {
    var array = [0, 1];

    if (n >= array.length) {
        for (var i = array.length; i < n + 1; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
    }

    return array;
}

module.exports = fibonacci_series;
