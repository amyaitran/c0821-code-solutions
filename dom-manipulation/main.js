var $button = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

var count = 0;

function handleClick(event) {
  count++;
  $clickCount.textContent = 'Clicks: ' + count;
  if (count < 4) {
    $button.className = 'hot-button cold';
  }
  if (count > 4 && count < 7) {
    $button.className = 'hot-button cool';
  }
  if (count > 7 && count < 10) {
    $button.className = 'hot-button tepid';
  }
  if (count > 10 && count < 13) {
    $button.className = 'hot-button warm';
  }
  if (count > 13 && count < 16) {
    $button.className = 'hot-button hot';
  }
  if (count > 16) {
    $button.className = 'hot-button nuclear';
  }
}

$button.addEventListener('click', handleClick);
