# Animated 2d Mesh Gradient

A javascript file which will help frontend developers to create animated 2d mesh gradient using Html 5 canvas element and some css 3

![mesh](<https://media.giphy.com/media/aaMe7xemWlR8LwZqyn/giphy.gif>)

[![GitHub-social](<https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white>)](<https://github.com/>)<br>

[![LinkedIn-social](<https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white>)](<https://linkedin.com/>)<br>

[![Instagram-social](<https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white>)](<https://www.instagram.com/>)

## Table of Contents

- [Installation](<#installation>)
- [Usage](<#usage>)
- [Code](<#code>)
- [Code Explanation](<#code-explanation>)
- [Contributing](<#contributing>)
- [License](<#license>)

<!-- -->

## Installation

To install this project, simply clone the repo:

```bash
git clone https://github.com/yourusername/yourproject.git
```

Then, install the dependencies:

```bash
npm install
```

## Usage

To use this project, simply import the `index.js` file into your project:

```javascript
import meshGradient from 'mesh-gradient';
```

Then, you can use the `meshGradient` function to create a mesh gradient:

```javascript
const meshGradient = new meshGradient({
  width: 300,
  height: 300,
});

meshGradient.draw();
```

## Code

```javascript
var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(190 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(130 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(120 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(var x=0;x<=35;x++) {
    for(var y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.05;
  window.requestAnimationFrame(run);
}

run();
```

## Code Explanation

The `meshGradient` function takes three arguments:

- `width`: The width of the mesh gradient in pixels.
- `height`: The height of the mesh gradient in pixels.
- `options`: An object with optional properties to customize the mesh gradient.

<!-- -->

The `options` object can have the following properties:

- `color1`: The starting color of the mesh gradient.
- `color2`: The ending color of the mesh gradient.
- `speed`: The speed of the animation, in frames per second.

<!-- -->

The `meshGradient` function creates a mesh gradient by drawing a series of lines on the canvas. The lines are drawn using the `col()` function, which takes three arguments:

- `x`: The x-coordinate of the line.
- `y`: The y-coordinate of the line.
- `r`, `g`, `b`: The red, green, and blue values of the line.

<!-- -->

The `R()`, `G()`, and `B()` functions are used to calculate the red, green, and blue values of each line. These functions use a sinusoidal function to create a smooth gradient.

The `run()` function is used to animate the mesh gradient. The `run()` function loops through the mesh gradient, drawing each line at a different time. The `run()` function also uses the `window.requestAnimationFrame()` function to request the next frame of animation.

## Contributing

Contributions are welcome! Please submit pull requests to the [main repository](<https://github.com/yourusername/yourproject>).

## Lice

