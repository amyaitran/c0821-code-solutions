// create a JS storage for a reference to the HTML button.
// create a JS storage for a reference to the HTML body background.

// create a click event listener that will perform actions when the button is clicked.

// define what will happen when the button is clicked:
//   -if the button was previously set to dark, then
//     -set the button to light mode
//     -set the background to light mode
//   -otherwise, if the button was previously set to light, then
//     -set the button to dark mode
//     -set the background to dark mode

var $button = document.querySelector('button');
var $background = document.querySelector('body');

$button.addEventListener('click', handleClick);

function handleClick(event) {
  if ($button.className === 'bt-dark') {
    $button.className = 'bt-light';
    $background.className = 'bg-light';
  } else if ($button.className === 'bt-light') {
    $button.className = 'bt-dark';
    $background.className = 'bg-dark';
  }
}
