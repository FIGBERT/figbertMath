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
    for (var b = 0; b < elements.length; b++) {
        elements[b].style.display = "none";
    }
}

//reset() clears html number inputs by setting their value to null
function reset(elements) {
    "use strict";
    for (var c = 0; c < elements.length; c++) {
        elements[c].value = null;
    }
}

//show() shows arrayed html elements INLINE using a for loop
function show(elements) {
    "use strict";
    for (var d = 0; d < elements.length; d++) {
        elements[d].style.display = "inline";
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

//answerTwo() accepts two simplified equations as input and outputs the x and y value
function answerTwo(one, two) {
    var
        y = two[2] / two[1],
        x = (one[2] - (one[1] * y)) / one[0];
    return [x, y];
}

//answerThree() accepts three simplified equations as input and outputs the x, y, and z value
function answerThree(one, two, three) {
    var
        z = three[3] / three[2],
        y = (two[3] - (two[2] * z)) / two[1],
        x = (one[3] - ((one[2] * z) + (one[1] * y))) / one[0];
    return [x, y, z];
}

//solveTwo() accepts the two equations as input and simplifies the second
function solveTwo(one, two) {
    "use strict";
    var
        multOne = lcm(one[0], two[0]) / one[0],
        multTwo = lcm(one[0], two[0]) / two[0],
        changingOne = one.slice();
    for (var e = 0; e < two.length; e++) {
        changingOne[e] = changingOne[e] * multOne;
        two[e] = two[e] * multTwo;
    }
    if (changingOne[0] + two[0] !== 0) {
        invert(changingOne);
    }
    for (var f = 0; f < two.length; f++) {
        two[f] = changingOne[f] + two[f];
    }
    return two;
}

//solveThree() accepts the first three equations as input and solves the second
function solveThree(one, two, three) {
    "use strict";
    var
        simpleTwo = solveTwo(one, two),
        simpleThree = solveTwo(one, three),
        multTwo = lcm(simpleTwo[1], simpleThree[1]) / simpleTwo[1],
        multThree = lcm(simpleTwo[1], simpleThree[1]) / simpleThree[1],
        changingTwo = simpleTwo.slice();
    for (var g = 0; g < simpleThree.length; g++) {
        changingTwo[g] = changingTwo[g] * multTwo;
        simpleThree[g] = simpleThree[g] * multThree;
    }
    if (changingTwo[1] + simpleThree[1] !== 0) {
        invert(changingTwo);
    }
    for (var h = 0; h < simpleThree.length; h++) {
        simpleThree[h] = changingTwo[h] + simpleThree[h];
    }
    return [simpleTwo, simpleThree];
}

//solve() uses a combination of other functions to simplify the matrix
function solve(dimension) {
    "use strict";
    if (dimension == 2) {
        var
            firstXY = [parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondXY = [parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            answerXY = solveTwo(firstXY, secondXY),
            valuesXY = answerTwo(firstXY, answerXY);
        show([document.getElementById("out")]);
        hide([document.getElementById("titleThree"), document.getElementById("outThree"), document.getElementById("titleFour"), document.getElementById("outFour"), document.getElementById("wValue"), document.getElementById("zValue")]);
        document.getElementById("outOne").innerHTML = "[" + firstXY[0] + ", " + firstXY[1] + ", " + firstXY[2] + "]";
        document.getElementById("outTwo").innerHTML = "[" + answerXY[0] + ", " + answerXY[1] + ", " + answerXY[2] + "]";
        document.getElementById("xValue").innerHTML = "x = " + valuesXY[0];
        document.getElementById("yValue").innerHTML = "y = " + valuesXY[1];
    } else if (dimension == 3) {
        var
            firstXYZ = [parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("zOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondXYZ = [parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("zTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            thirdXYZ = [parseInt(document.getElementById("xThree").value), parseInt(document.getElementById("yThree").value), parseInt(document.getElementById("zThree").value), parseInt(document.getElementById("equalsThree").value)],
            answerXYZ = solveThree(firstXYZ, secondXYZ, thirdXYZ),
            valuesXYZ = answerThree(firstXYZ, answerXYZ[0], answerXYZ[1]);
        show([document.getElementById("out"), document.getElementById("titleThree")]);
        document.getElementById("outThree").style.display = "block";
        hide([document.getElementById("titleFour"), document.getElementById("outFour"), document.getElementById("wValue")]);
        document.getElementById("outOne").innerHTML = "[" + firstXYZ[0] + ", " + firstXYZ[1] + ", " + firstXYZ[2] + ", " + firstXYZ[3] + "]";
        document.getElementById("outTwo").innerHTML = "[" + answerXYZ[0][0] + ", " + answerXYZ[0][1] + ", " + answerXYZ[0][2] + ", " + answerXYZ[0][3] + "]";
        document.getElementById("outThree").innerHTML = "[" + answerXYZ[1][0] + ", " + answerXYZ[1][1] + ", " + answerXYZ[1][2] + ", " + answerXYZ[1][3] + "]";
        document.getElementById("xValue").innerHTML = "x = " + valuesXYZ[0];
        document.getElementById("yValue").innerHTML = "y = " + valuesXYZ[1];
        document.getElementById("zValue").innerHTML = "z = " + valuesXYZ[2];
    }
}