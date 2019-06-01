//lcm() calculates the lowest common multiple by adding the first number until it is divisible by the second.
function lcm(numOne, numTwo) {
    "use strict";
    var i = numOne;
    while (i % numTwo !== 0) {
        i += numOne;
    }
    return i;
}

//invert() changes all of the values in a numerical array to their opposites (1 to -1, etc) with a for loop
function invert(value) {
    "use strict";
    for (var a = 0; a < value.length; a++) {
        value[a] = value[a] * -1;
    }
    return value;
}

//hide() hides arrayed html elements using the "display: none" method and a for loop
function hide(elements) {
    "use strict";
    for (var a = 0; a < elements.length; a++) {
        elements[a].style.display = "none";
    }
}

//reset() clears html number inputs by setting their value to null
function reset(elements) {
    "use strict";
    for (var a = 0; a < elements.length; a++) {
        elements[a].value = null;
    }
}

//show() shows arrayed html elements INLINE using a for loop
function show(elements) {
    "use strict";
    for (var a = 0; a < elements.length; a++) {
        elements[a].style.display = "inline";
    }
}

//setUp() will determine the number of equations and variables and adjust the html accordingly.
function setUp(num) {
    "use strict";
    var
        allW = document.getElementsByClassName("w"),
        allZ = document.getElementsByClassName("z"),
        all = document.getElementsByClassName("a");
    if (num == 2) {
        document.getElementById("equations").style.display = "block";
        hide(allW);
        hide(allZ);
        document.getElementById("out").style.display = "none";
        document.getElementById("thirdEquation").style.display = "none";
        document.getElementById("fourthEquation").style.display = "none";
        reset(all);
    } else if (num == 3) {
        document.getElementById("equations").style.display = "block";
        hide(allW);
        show(allZ);
        document.getElementById("out").style.display = "none";
        document.getElementById("thirdEquation").style.display = "block";
        document.getElementById("fourthEquation").style.display = "none";
        reset(all);
    } else {
        document.getElementById("equations").style.display = "block";
        show(allW);
        show(allZ);
        document.getElementById("out").style.display = "none";
        document.getElementById("thirdEquation").style.display = "block";
        document.getElementById("fourthEquation").style.display = "block";
        reset(all);
    }
}

//THE PROBLEM WITH SOLVETHREE() IS HERE
//solveTwo() accepts the first two equations as input and solves the second
function solveTwo(one, two, dimension) {
    "use strict";
    var
        multOne = lcm(one[0], two[0]) / one[0],
        multTwo = lcm(one[0], two[0]) / two[0],
        changingOne = [one[0], one[1], one[2]];
    if (dimension == 3) {
        changingOne.push(one[3]);
    } else if (dimension == 4) {
        changingOne.push(one[3], one[4]);
    }
    for (var a = 0; a < two.length; a++) {
        changingOne[a] = changingOne[a] * multOne;
        two[a] = two[a] * multTwo;
    }
    if (changingOne[0] + two[0] !== 0) {
        invert(changingOne);
    }
    for (var b = 0; b < two.length; b++) {
        two[b] = changingOne[b] + two[b];
    }
    return two;
}

//solveThree() accepts the first three equations as input and solves the second
function solveThree(one, two, three) {
    "use strict";
    var
        multOne = lcm(one[0], three[0]) / one[0],
        multThree = lcm(one[0], three[0]) / three[0],
        changingOne = [one[0], one[1], one[2], one[3]],
        simpleTwo = solveTwo(one, two);
    console.log(multOne, multThree, changingOne, simpleTwo);
    for (var a = 0; a < three.length; a++) {
        changingOne[a] = changingOne[a] * multOne;
        three[a] = three[a] * multThree;
    }
    if (changingOne[0] + three[0] !== 0) {
        invert(changingOne);
    }
    for (var b = 0; b < three.length; b++) {
        three[b] = changingOne[b] + three[b];
    }
    var
        multTwo = lcm(simpleTwo[1] + three[1]) / simpleTwo[1],
        subMultThree = lcm(simpleTwo[1] + three[1]) / three[1];
    for (var c = 0; c < three.length; c++) {
        simpleTwo[c] = simpleTwo[c] * multTwo;
        three[c] = three[c] * subMultThree;
    }
    if (simpleTwo[1] + three[1] !== 0) {
        invert(simpleTwo);
    }
    for (var d = 0; d < three.length; d++) {
        three[d] = three[d] + simpleTwo[d];
    }
    return three;
}

//solve() uses a combination of other functions to simplify the matrix
function solve(dimension) {
    "use strict";
    if (dimension == 2) {
        var
            firstXY = [parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondXY = [parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            answerXY = solveTwo(firstXY, secondXY, dimension);
        show([document.getElementById("out")]);
        hide([document.getElementById("titleThree"), document.getElementById("outThree"), document.getElementById("titleFour"), document.getElementById("outFour")]);
        document.getElementById("outOne").innerHTML = "[" + firstXY[0] + ", " + firstXY[1] + ", " + firstXY[2] + "]";
        document.getElementById("outTwo").innerHTML = "[" + answerXY[0] + ", " + answerXY[1] + ", " + answerXY[2] + "]";
    } else if (dimension == 3) {
        var
            firstXYZ = [parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("zOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondXYZ = [parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("zTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            thirdXYZ = [parseInt(document.getElementById("xThree").value), parseInt(document.getElementById("yThree").value), parseInt(document.getElementById("zThree").value), parseInt(document.getElementById("equalsThree").value)];
        console.log(solveThree(firstXYZ, secondXYZ, thirdXYZ));
    }
}