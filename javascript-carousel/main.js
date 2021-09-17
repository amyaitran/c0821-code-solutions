var $leftArrow = document.querySelector('#left');
var $rightArrow = document.querySelector('#right');
var $circles = document.querySelectorAll('.circle');
var $circlesContainer = document.querySelector('#circlesContainer');
var $images = document.querySelectorAll('img');

var circleCount = 1;
var changeId = null;

$leftArrow.addEventListener('click', handleClickLeft);
$rightArrow.addEventListener('click', handleClickRight);
$circlesContainer.addEventListener('click', handleClickCircle);
window.addEventListener('DOMContentLoaded', changeAfter3Seconds);

function changeAfter3Seconds() {
  changeId = setInterval(changingView, 3000);
}

function changingView() {
  if (circleCount === 5) {
    circleCount = 1;
  } else {
    circleCount++;
  }
  jumpCircle();
  jumpImage();
}

function handleClickLeft(event) {
  if (circleCount === 1) {
    circleCount = 5;
  } else {
    circleCount--;
  }
  jumpCircle();
  jumpImage();
  clearInterval(changeId);
  changeAfter3Seconds();
}

function handleClickRight(event) {
  if (circleCount === 5) {
    circleCount = 1;
  } else {
    circleCount++;
  }
  jumpCircle();
  jumpImage();
  clearInterval(changeId);
  changeAfter3Seconds();
}

function jumpCircle(event) {
  for (var i = 0; i < $circles.length; i++) {
    if ($circles[i].getAttribute('data-view') === circleCount.toString()) {
      $circles[i].className = 'black circle';
    } else {
      $circles[i].className = 'circle';
    }
  }
}

function jumpImage(event) {
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].getAttribute('data-view') === circleCount.toString()) {
      $images[i].className = 'center';
    } else {
      $images[i].className = 'center hidden';
    }
  }
}

function handleClickCircle(event) {
  for (var i = 0; i < $circles.length; i++) {
    if ($circles[i].getAttribute('data-view') === event.target.getAttribute('data-view')) {
      $circles[i].className = 'black circle';
      circleCount = parseInt(event.target.getAttribute('data-view'));
    } else {
      $circles[i].className = 'circle';
    }
  }
  jumpImage();
  clearInterval(changeId);
  changeAfter3Seconds();
}
