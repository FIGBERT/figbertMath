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
    elements[a].value = "";
  }
}

function setUp(selection) {
  "use strict";
  type = selection;
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
  document.getElementById("out").style.display = "none";
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
    document.getElementById("out").style.display = "block";
    document.getElementById("numOut").innerHTML =
      "𝛼 = " + angularSize(size, distance);
  } else if (type === "D") {
    document.getElementById("out").style.display = "block";
    document.getElementById("numOut").innerHTML =
      "D = " + realSize(angle, distance);
  } else {
    document.getElementById("out").style.display = "block";
    document.getElementById("numOut").innerHTML =
      "d = " + calcDistance(size, angle);
  }
}
/*
Test values:
𝛼 = 0.266513692671216
D = 432168.6
d = 92955810
*/