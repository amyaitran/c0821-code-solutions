// create a JS storage for a reference to the HTML button.
// create a JS storage for a reference to the HTML body background.

// create a click event listener that will perform actions when the button is clicked.
// create a switch for the light bulb, with the default value of "off".

// define what will happen when the button is clicked:
//   -if the switch is set to off, then
//     -turn the switch "on"
//     -set the button to dark mode
//     -set the background to dark mode
//   -otherwise, if the switch is set to "on", then
//     -turn the switch "off"
//     -set the button to light mode
//     -set the background to light mode

var $button = document.querySelector('button');
var $background = document.querySelector('body');

$button.addEventListener('click', handleClick);
var buttonOn = false;

function handleClick(event) {
  if (buttonOn) {
    buttonOn = false;
    $button.className = 'bt-light';
    $background.className = 'bg-light';
  } else {
    buttonOn = true;
    $button.className = 'bt-dark';
    $background.className = 'bg-dark';
  }
}
