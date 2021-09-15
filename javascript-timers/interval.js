var $h1 = document.querySelector('h1');

var count = 4;

setInterval(function () {
  if (count > 0) {
    $h1.textContent = count;
    count--;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
