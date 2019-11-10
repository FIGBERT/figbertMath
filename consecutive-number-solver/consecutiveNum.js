function getSum(total, num) {
  "use strict";
  return total + num;
}

function solveConsec(amount, sum, type) {
  "use strict";
  let smallestNum,
      step,
      addend = 0,
      numAmount = parseInt(amount, 10),
      numSum = parseInt(sum, 10),
      allNums = [];
      if (type === "odd") {
        smallestNum = ((numSum > 0) ? 1 : -1);
        step = ((numSum > 0) ? 2 : -2);
      } else if (type === "even") {
        smallestNum = 0;
        step = ((numSum > 0) ? 2 : -2);
      } else if (type === "mixed") {
        smallestNum = 0;
        step = ((numSum > 0) ? 1 : -1);
      }
      for (let a = 0; a < numAmount; a++) {
          allNums.push(smallestNum + addend);
          addend += step;
      }
      if (numSum > 0) {
          while (
              allNums.reduce(getSum) !== numSum &&
              allNums.reduce(getSum) < numSum
              ) {
              for (let a = 0; a < allNums.length; a++) {
                  allNums[a] += step;
              }
          }
      } else if (numSum < 0) {
          while (
              allNums.reduce(getSum) !== numSum &&
              allNums.reduce(getSum) > numSum
              ) {
              for (let a = 0; a < allNums.length; a++) {
                  allNums[a] += step;
              }
          }
      }
      if (allNums.reduce(getSum) > numSum || allNums.reduce(getSum) < numSum) {
          document.getElementById("outText").innerHTML =
              "Unfortunately, the combination entered does not have an answer. Try again with another set of values.";
      } else {
          document.getElementById("outText").innerHTML =
              "Success! The " +
              numAmount +
              " consecutive numbers that equal " +
              numSum +
              " are " +
              allNums +
              ".";
      }
}