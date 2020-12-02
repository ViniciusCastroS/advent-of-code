var json = require('./numbers.json');


function sum() {
    var sum = json.array;

    for (let j = 0; j < sum.length; j++) {
        for (let k = 0; k < sum.length; k++) {
            for (let l = 0; l < sum.length; l++) {
                if (sum[j] + sum[k] + sum[l] == 2020) {
                    console.log('achei', sum[k] * sum[j] * sum[l]);
                    break
                } else {}
            }
        }
    }
    return sum
}

sum();