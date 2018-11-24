function rgbToHexSingle(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}
function rgb2hex(r, g, b) {
  let red, green, blue;
  if (typeof r === "string") {
    const color = r
      .split("(")[1]
      .split(")")[0]
      .split(",");
    red = rgbToHexSingle(color[0]);
    green = rgbToHexSingle(color[1]);
    blue = rgbToHexSingle(color[2]);
  } else {
    red = rgbToHexSingle(r);
    green = rgbToHexSingle(g);
    vblue = rgbToHexSingle(b);
  }
  return "#" + red + green + blue;
}

module.exports = rgb2hex;
