var $characters = document.querySelectorAll('span');

document.addEventListener('keydown', logKey);

var currentChar = 0;

function logKey(event) {
  if (event.key === $characters[currentChar].textContent) {
    $characters[currentChar + 1].className = 'margin green black-underline';
    $characters[currentChar].className = 'margin green';
    currentChar++;
  } else if (event.code === 'Space' && $characters[currentChar].getAttribute('space') === 'true') {
    $characters[currentChar + 1].className = 'margin green black-underline';
    $characters[currentChar].className = 'margin space green';
    currentChar++;
  } else if (event.key !== $characters[currentChar].textContent) {
    $characters[currentChar].className = 'margin red red-underline';
  }
}
