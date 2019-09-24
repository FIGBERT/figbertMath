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
function setUpMatrix(num) {
    "use strict";
    var
        allW = document.getElementsByClassName("w"),
        allZ = document.getElementsByClassName("z"),
        all = document.getElementsByClassName("a");
    if (num === "2") {
        document.getElementById("equations").style.display = "block";
        hide(allW);
        hide(allZ);
        document.getElementById("out").style.display = "none";
        document.getElementById("thirdEquation").style.display = "none";
        document.getElementById("fourthEquation").style.display = "none";
        reset(all);
    } else if (num === "3") {
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

//answerTwo() accepts two simplified equations as input and outputs the x and y values
function answerTwo(one, two) {
    "use strict";
    var
        y = two[2] / two[1],
        x = (one[2] - (one[1] * y)) / one[0];
    return [x, y];
}

//answerThree() accepts three simplified equations as input and outputs the x, y, and z values
function answerThree(one, two, three) {
    "use strict";
    var
        z = three[3] / three[2],
        y = (two[3] - (two[2] * z)) / two[1],
        x = (one[3] - ((one[2] * z) + (one[1] * y))) / one[0];
    return [x, y, z];
}

//answerFour() accepts four simplified equations as input and outputs the w, x, y, and z values
function answerFour(one, two, three, four) {
    "use strict";
    var
        z = four[4] / four[3],
        y = (three[4] - (three[3] * z)) / three[2],
        x = (two[4] - ((two[3] * z) + (two[2] * y))) / two[1],
        w = (one[4] - ((one[3] * z) + (one[2] * y) + (one[1] * x))) / one[0];
    return [w, x, y, z];
}

//solveTwoMatrix() accepts two equations as input and simplifies the second
function solveTwoMatrix(one, two) {
    "use strict";
    var
        multOne = lcm(one[0], two[0]) / one[0],
        multTwo = lcm(one[0], two[0]) / two[0],
        changingOne = one.slice();
    for (var e = 0; e < two.length; e++) {
        changingOne[e] *= multOne;
        two[e] *= multTwo;
    }
    if (changingOne[0] + two[0] !== 0) {
        invert(changingOne);
    }
    for (var f = 0; f < two.length; f++) {
        two[f] += changingOne[f];
    }
    return two;
}

//solveThreeMatrix() accepts three equations as input and outputs the simplified second and third
function solveThreeMatrix(one, two, three) {
    "use strict";
    var
        simpleTwo = solveTwoMatrix(one, two),
        simpleThree = solveTwoMatrix(one, three),
        multTwo = lcm(simpleTwo[1], simpleThree[1]) / simpleTwo[1],
        multThree = lcm(simpleTwo[1], simpleThree[1]) / simpleThree[1],
        changingTwo = simpleTwo.slice();
    for (var g = 0; g < simpleThree.length; g++) {
        changingTwo[g] *= multTwo;
        simpleThree[g] *= multThree;
    }
    if (changingTwo[1] + simpleThree[1] !== 0) {
        invert(changingTwo);
    }
    for (var h = 0; h < simpleThree.length; h++) {
        simpleThree[h] += changingTwo[h];
    }
    return [simpleTwo, simpleThree];
}

//solveFourMatrix() accepts four equations as input and outputs the simplified second, third, and fourth
function solveFourMatrix(one, two, three, four) {
    "use strict";
    var
        simpleTwoThree = solveThreeMatrix(one, two, three),
        simpleFour = solveTwoMatrix(one, four),
        changingTwo = simpleTwoThree[0],
        changingThree = simpleTwoThree[1],
        multTwo = lcm(changingTwo[1], simpleFour[1]) / changingTwo[1],
        firstMultFour = lcm(changingTwo[1], simpleFour[1]) / simpleFour[1];
    for (var a = 0; a < simpleFour.length; a++) {
        simpleFour[a] *= firstMultFour;
        changingTwo[a] *= multTwo;
    }
    if (simpleFour[1] + changingTwo[1] !== 0) {
        invert(changingTwo);
    }
    for (var b = 0; b < simpleFour.length; b++) {
        simpleFour[b] += changingTwo[b];
    }
    var
        multThree = lcm(changingThree[2], simpleFour[2]) / changingThree[2],
        secondMultFour = lcm(changingThree[2], simpleFour[2]) / simpleFour[2];
    for (var c = 0; c < simpleFour.length; c++) {
        changingThree[c] *= multThree;
        simpleFour[c] *= secondMultFour;
    }
    if (simpleFour[2] + changingThree[2] !== 0) {
        invert(changingThree);
    }
    for (var d = 0; d < simpleFour.length; d++) {
        simpleFour[d] += changingThree[d];
    }
    return [simpleTwoThree[0], simpleTwoThree[1], simpleFour];
}

//solveMatrix() uses a combination of other functions to simplify the matrix
function solveMatrix(dimension) {
    "use strict";
    if (dimension === "2") {
        var
            firstXY = [parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondXY = [parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            answerXY = solveTwoMatrix(firstXY, secondXY),
            valuesXY = answerTwo(firstXY, answerXY);
        show([document.getElementById("out")]);
        hide([document.getElementById("titleThree"), document.getElementById("outThree"), document.getElementById("titleFour"), document.getElementById("outFour"), document.getElementById("wValue"), document.getElementById("zValue")]);
        document.getElementById("outOne").innerHTML = "[" + firstXY[0] + ", " + firstXY[1] + ", " + firstXY[2] + "]";
        document.getElementById("outTwo").innerHTML = "[" + answerXY[0] + ", " + answerXY[1] + ", " + answerXY[2] + "]";
        document.getElementById("xValue").innerHTML = "x = " + valuesXY[0];
        document.getElementById("yValue").innerHTML = "y = " + valuesXY[1];
    } else if (dimension === "3") {
        var
            firstXYZ = [parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("zOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondXYZ = [parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("zTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            thirdXYZ = [parseInt(document.getElementById("xThree").value), parseInt(document.getElementById("yThree").value), parseInt(document.getElementById("zThree").value), parseInt(document.getElementById("equalsThree").value)],
            answerXYZ = solveThreeMatrix(firstXYZ, secondXYZ, thirdXYZ),
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
    } else {
        var
            firstWXYZ = [parseInt(document.getElementById("wOne").value), parseInt(document.getElementById("xOne").value), parseInt(document.getElementById("yOne").value), parseInt(document.getElementById("zOne").value), parseInt(document.getElementById("equalsOne").value)],
            secondWXYZ = [parseInt(document.getElementById("wTwo").value), parseInt(document.getElementById("xTwo").value), parseInt(document.getElementById("yTwo").value), parseInt(document.getElementById("zTwo").value), parseInt(document.getElementById("equalsTwo").value)],
            thirdWXYZ = [parseInt(document.getElementById("wThree").value), parseInt(document.getElementById("xThree").value), parseInt(document.getElementById("yThree").value), parseInt(document.getElementById("zThree").value), parseInt(document.getElementById("equalsThree").value)],
            fourthWXYZ = [parseInt(document.getElementById("wFour").value), parseInt(document.getElementById("xFour").value), parseInt(document.getElementById("yFour").value), parseInt(document.getElementById("zFour").value), parseInt(document.getElementById("equalsFour").value)],
            answerWXYZ = solveFourMatrix(firstWXYZ, secondWXYZ, thirdWXYZ, fourthWXYZ),
            valuesWXYZ = answerFour(firstWXYZ, answerWXYZ[0], answerWXYZ[1], answerWXYZ[2]);
        show([document.getElementById("out")]);
        document.getElementById("outOne").innerHTML = "[" + firstWXYZ[0] + ", " + firstWXYZ[1] + ", " + firstWXYZ[2] + ", " + firstWXYZ[3] + ", " + firstWXYZ[4] + "]";
        document.getElementById("outTwo").innerHTML = "[" + answerWXYZ[0][0] + ", " + answerWXYZ[0][1] + ", " + answerWXYZ[0][2] + ", " + answerWXYZ[0][3] + ", " + answerWXYZ[0][4] + "]";
        document.getElementById("outThree").innerHTML = "[" + answerWXYZ[1][0] + ", " + answerWXYZ[1][1] + ", " + answerWXYZ[1][2] + ", " + answerWXYZ[1][3] + ", " + answerWXYZ[1][4] + "]";
        document.getElementById("outFour").innerHTML = "[" + answerWXYZ[2][0] + ", " + answerWXYZ[2][1] + ", " + answerWXYZ[2][2] + ", " + answerWXYZ[2][3] + ", " + answerWXYZ[2][4] + "]";
        document.getElementById("wValue").innerHTML = "w = " + valuesWXYZ[0];
        document.getElementById("xValue").innerHTML = "x = " + valuesWXYZ[1];
        document.getElementById("yValue").innerHTML = "y = " + valuesWXYZ[2];
        document.getElementById("zValue").innerHTML = "z = " + valuesWXYZ[3];
    }
}