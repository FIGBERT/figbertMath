function getSum(total, num) {
    "use strict";
    return total + num;
}

//STOPPED AT K
function solveConsec(amount, sum, type) {
    "use strict";
    var
        numAmount = parseInt(amount, 10),
        numSum = parseInt(sum, 10),
        smallestNum = 0,
        allNums = [];
    switch (type) {
    case "odd":
        if (numSum > 0) {
            smallestNum = 1;
            var a = 0;
            for (var b = 0; b < numAmount; b++) {
                allNums.push(smallestNum + a);
                a += 2;
            }
            while (allNums.reduce(getSum) !== numSum && allNums.reduce(getSum) < numSum) {
                for (var c = 0; c < allNums.length; c++) {
                    allNums[c] += 2;
                }
            }
            if (allNums.reduce(getSum) > numSum) {
                document.getElementById("out").innerHTML = "Unfortunately, the combination entered does not have an answer. Try again with another set of values."
            } else {
                document.getElementById("out").innerHTML = "Success! The " + numAmount + " consecutive numbers that equal " + numSum + " are " + allNums + ".";
            }
        } else if (numSum < 0) {
            smallestNum = -1;
            var d = 0;
            for (var e = 0; e < numAmount; e++) {
                allNums.push(smallestNum + d);
                d -= 2;
            }
            while (allNums.reduce(getSum) !== numSum && allNums.reduce(getSum) > numSum) {
                for (var f = 0; f < allNums.length; f++) {
                    allNums[f] -= 2;
                }
            }
            if (allNums.reduce(getSum) > numSum) {
                document.getElementById("out").innerHTML = "Unfortunately, the combination entered does not have an answer. Try again with another set of values."
            } else {
                document.getElementById("out").innerHTML = "Success! The " + numAmount + " consecutive numbers that equal " + numSum + " are " + allNums + ".";
            }
        }
        break;
    case "even":
        if (numSum > 0) {
            var a = 0;
            for (var b = 0; b < numAmount; b++) {
                allNums.push(smallestNum + a);
                a += 2;
            }
            while (allNums.reduce(getSum) !== numSum && allNums.reduce(getSum) < numSum) {
                for (var c = 0; c < allNums.length; c++) {
                    allNums[c] += 2;
                }
            }
            if (allNums.reduce(getSum) > numSum) {
                document.getElementById("out").innerHTML = "Unfortunately, the combination entered does not have an answer. Try again with another set of values."
            } else {
                document.getElementById("out").innerHTML = "Success! The " + numAmount + " consecutive numbers that equal " + numSum + " are " + allNums + ".";
            }
        } else if (numSum < 0) {
            var d = 0;
            for (var e = 0; e < numAmount; e++) {
                allNums.push(smallestNum + d);
                d -= 2;
            }
            while (allNums.reduce(getSum) !== numSum && allNums.reduce(getSum) > numSum) {
                for (var f = 0; f < allNums.length; f++) {
                    allNums[f] -= 2;
                }
            }
            if (allNums.reduce(getSum) > numSum) {
                document.getElementById("out").innerHTML = "Unfortunately, the combination entered does not have an answer. Try again with another set of values."
            } else {
                document.getElementById("out").innerHTML = "Success! The " + numAmount + " consecutive numbers that equal " + numSum + " are " + allNums + ".";
            }
        }
        break;
    case "mixed":
        if (numSum > 0) {
            for (var g = 0; g < numAmount; g++) {
                allNums.push(smallestNum + g);
            }
            while (allNums.reduce(getSum) !== numSum && allNums.reduce(getSum) < numSum) {
                for (var h = 0; h < allNums.length; h++) {
                    allNums[h]++;
                }
            }
            if (allNums.reduce(getSum) > numSum) {
                document.getElementById("out").innerHTML = "Unfortunately, the combination entered does not have an answer. Try again with another set of values."
            } else {
                document.getElementById("out").innerHTML = "Success! The " + numAmount + " consecutive numbers that equal " + numSum + " are " + allNums + ".";
            }
        } else if (numSum < 0) {
            var i = 0;
            for (var j = 0; j < numAmount; j++) {
                allNums.push(smallestNum + i);
                i--;
            }
            while (allNums.reduce(getSum) !== numSum && allNums.reduce(getSum) > numSum) {
                for (var k = 0; k < allNums.length; k++) {
                    allNums[k]--;
                }
            }
            if (allNums.reduce(getSum) > numSum) {
                document.getElementById("out").innerHTML = "Unfortunately, the combination entered does not have an answer. Try again with another set of values."
            } else {
                document.getElementById("out").innerHTML = "Success! The " + numAmount + " consecutive numbers that equal " + numSum + " are " + allNums + ".";
            }
        }
        break;
    }
}