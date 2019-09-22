var type;

function show(elements) {
    "use strict";
    for (var a = 0; a < elements.length; a++) {
        elements[a].style.display = "inline";
    }
}

function hide(elements) {
    "use strict";
    for (var a = 0; a < elements.length; a++) {
        elements[a].style.display = "none";
    }
}

function reset(elements) {
    "use strict";
    for (var a = 0; a < elements.length; a++) {
        elements[a].value = "null";
    }
}

function setUp(selection) {
    "use strict";
    type = selection;
    console.log(type);
    document.getElementById("sizeIn").style.display = "block";
    hide(document.getElementsByClassName("ins"));
    reset(document.getElementsByClassName("numinput"));
    if (type === "a") {
        show(document.getElementsByClassName("a"));
    } else if (type === "D") {
        show(document.getElementsByClassName("D"));
    } else {
        show(document.getElementsByClassName("d"));
    }
}

function angularSize(size, distance) {
    "use strict";
    return (180 * size) / (3.14 * distance);
}

function realSize(angle, distance) {
    "use strict";
    return (angle * 3.14 * distance) / 180;
}

function calcDistance(size, angle) {
    "use strict";
    return (180 * size) / (3.14 * angle);
}

function actionManager(angle, size, distance) {
    "use strict";
    if (type === "a") {
        console.log(angularSize(size, distance));
    } else if (type === "D") {
        console.log(realSize(angle, distance));
    } else {
        console.log(calcDistance(size, angle));
    }
}