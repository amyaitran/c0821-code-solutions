var $characters = document.querySelectorAll('span');

document.addEventListener('keydown', logKey);

var currentChar = 0;

function logKey(event) {
  if (event.key === $characters[currentChar].textContent) {
    $characters[currentChar + 1].className = 'green black-underline';
    $characters[currentChar].className = 'green';
    currentChar++;
  } else if (event.key !== $characters[currentChar].textContent) {
    $characters[currentChar].className = 'red red-underline';
  }
}
