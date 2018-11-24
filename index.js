let rgb2hex = require("./lib/rgb2hex");
let hex2rgb = require("./lib/hex2rgb");
function btw(num) {
  return num >= 0 && num <= 255;
}
function light({ r, g, b }) {
  let calc = x =>
    x + 41 - parseInt(x / 40) * 6 - (parseInt(x / 6) - parseInt(x / 40) * 6);
  return `rgb(${calc(r)},${calc(g)},${calc(b)})`;
}
function dark({ r, g, b }) {
  const calc = x => parseInt((5 / 6) * x) + 1;
  return `rgb(${calc(r)},${calc(g)},${calc(b)})`;
}
function main({ r, g, b }) {
  return `rgb(${r},${g},${b})`;
}
function isHex(hex) {
  let hexnum = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  if (
    typeof hex === "string" &&
    hex.charAt(0) === "#" &&
    hex.length > 2 &&
    hex.length < 8
  ) {
    hex = hex.substr(1).split("");
    let hexValid = hex.filter(c => hexnum.includes(c.toLowerCase()));
    return hexValid.length === hex.length;
  }
  return false;
}
function isRGB(rgb) {
  return (
    typeof rgb === "object" &&
    typeof rgb.r === "number" &&
    btw(rgb.r) &&
    typeof rgb.g === "number" &&
    btw(rgb.g) &&
    typeof rgb.b === "number" &&
    btw(rgb.b)
  );
}
function darkLight(color, colorName, type = "hex") {
  if (isHex(color)) {
    return darkLight(hex2rgb(color), colorName, type);
  } else if (isRGB(color)) {
    const lightColor = light(color);
    const darkColor = dark(color);
    const mainColor = main(color);
    if (type === "hex")
      return {
        [`light${colorName}`]: rgb2hex(lightColor),
        [`dark${colorName}`]: rgb2hex(darkColor),
        [`${colorName}`]: rgb2hex(mainColor)
      };
    else if (type === "rgb")
      return {
        [`light${colorName}`]: lightColor,
        [`dark${colorName}`]: darkColor,
        [`${colorName}`]: mainColor
      };
  }
  return {};
}
module.exports = darkLight;
