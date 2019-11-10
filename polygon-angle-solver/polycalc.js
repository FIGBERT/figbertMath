function errors(type, sides) {
  "use strict";
  let msg = "",
      yes = false;
  console.log(type);
  if (type !== "0" && type !== "1") {
    msg += "A type is required! Please select one and try again.";
    yes = true;
    console.log("No type apparently");
  }
  if (sides < 3) {
    msg +=
      "<br>The number of sides provided is invalid. Please enter a number greater than two and try again.";
    yes = true;
    console.log("There are two few?");
  }
  return [yes, msg];
}

function actionManager(type, sides) {
  "use strict";
  sides = Math.round(sides);
  let errorTest = errors(type, sides),
      msg = "Oops! Something broke.",
      rounded = "";
  if (errorTest[0]) {
    msg = errorTest[1];
  } else {
    type = Number(type);
    sides = Number(sides);
    const totalInterior = (sides - 2) * 180;
    if (type === 0) {
      let eachInterior = totalInterior / sides,
          eachExterior = 360 / sides;
      if (eachInterior % 1 !== 0) {
        eachInterior = Math.round(eachInterior);
        rounded = "~";
      }
      if (eachExterior % 1 !== 0) {
        eachExterior = Math.round(eachExterior);
        rounded = "~";
      }
      msg =
        "This regular polygon with " +
        sides +
        " sides has " +
        totalInterior +
        "˚ in the interior.<br>Each interior angle is equal to " +
        rounded +
        eachInterior +
        "˚.<br>The exterior angles of a regular polygon always sum to 360˚<br>Each exterior angle is equal to " +
        rounded +
        eachExterior +
        "˚.";
    } else {
      msg =
        "This irregular polygon with " +
        sides +
        " sides has " +
        totalInterior +
        "˚ in the interior.";
    }
  }
  document.getElementById("out").style.display = "block";
  document.getElementById("outText").innerHTML = msg;
}