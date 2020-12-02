var rules = require('./jsons/countPass.json');
var password = require('./jsons/passwords.json')

function verifier() {
    var letters = rules.letter;
    var qnt = rules.qnt;
    var pass = password.passwords;
    var passCount = 0;
    var countValidPass = 0;

    for (var i = 0; i < 1000; i++) {
        var quantityFirst = qnt[i][0];
        var quantitySec = qnt[i][1];
        var letterPass = letters[i][0];
        var passw = pass[i][0];
        var counted = countLetters(passw, letterPass);
        var verifierPo = verifierPositionValid(passw, letterPass, quantityFirst, quantitySec);

        if (counted >= quantityFirst && counted <= quantitySec) {
            passCount++
        }

        if (verifierPo === 2) {
            countValidPass++
        }
    }

    console.log(passCount);
    console.log(countValidPass);
}

function countLetters(pass, letter) {
    var count = 0;
    var passSplit = pass.split("")
    for (let i = 0; i < passSplit.length; i++) {
        const element = passSplit[i];
        if (element === letter) {
            count++
        }
    }
    return count;
}

function verifierPositionValid(pass, letter, positionFirst, positionSecond) {
    var passSplit = pass.split("")
    var isValid = 0;
    for (let i = 1; i < passSplit.length + 1; i++) {
        const element = passSplit[i - 1];
        if (element == letter && (i == positionFirst || i == positionSecond)) {
            isValid++;
        }
    }
    return isValid;
}
verifier()