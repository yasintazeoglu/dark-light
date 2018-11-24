# Color Dark Light

> Small color creator for javascript.

# Installation

`npm i color-dark-light`<br>
or <br>

`yarn add color-dark-light`<br>

# Usage

### Using Hex

#### Two digit hex code

```js
const cdl = require("color-dark-light"); //or using import
cdl("#a1", "gray", "rgb");
/*
{ 
  lightgray: 'rgb(176,176,176)',
  darkgray: 'rgb(135,135,135)',
  gray: 'rgb(161,161,161)' 
}
*/
cdl("#a1", "gray", "hex");
//or
cdl("#a1", "gray");
/*
{ 
  lightgray: '#b0b0b0',
  darkgray: '#878787', 
  gray: '#a1a1a1' 
}
*/
```

#### There digit hex code

```js
const cdl = require("color-dark-light"); //or using import
cdl("#a11", "red", "rgb");
/*
{ 
  lightgray: 'rgb(183,56,56)',
  darkgray: 'rgb(142,15,15)',
  gray: 'rgb(170,17,17)' 
}
*/
cdl("#a11", "red", "hex");
//or
cdl("#a11", "red");
/*
{ 
  lightgray: '#b73838', 
  darkgray: '#8e0f0f', 
  gray: '#aa1111' 
}
*/
```

#### Six digit hex code

```js
const cdl = require("color-dark-light"); //or using import
cdl("#a11a11", "red", "rgb");
/*
{ 
  lightgray: 'rgb(176,63,56)',
  darkgray: 'rgb(135,22,15)',
  gray: 'rgb(161,26,17)' 
}
*/
cdl("#a11a11", "red", "hex");
//or
cdl("#a11a11", "red");
/*
{ 
  lightgray: '#b03f38', 
  darkgray: '#87160f', 
  gray: '#a11a11' 
}
*/
```

### Using RGB

```js
const cdl = require("color-dark-light"); //or using import

const rgb = {
  r: 150,
  g: 18,
  b: 100
};
cdl(rgb, "pink", "rgb");
/*
{ 
  lightpink: 'rgb(166,56,125)',
  darkpink: 'rgb(126,16,84)',
  pink: 'rgb(150,18,100)' 
}
*/
cdl(rgb, "pink", "hex");
//or
cdl(rgb, "pink");
/*
{ 
  lightpink: '#a6387d', 
  darkpink: '#7e1054', 
  pink: '#961264' 
}
*/
```

**Note: if you use a different way,it return a empty object**
