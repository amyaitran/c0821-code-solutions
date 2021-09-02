var $tabContainer = document.querySelector('.tab-container');
var $tabElement = document.querySelectorAll('.tab');
var $viewElement = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  var $data = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabElement.length; i++) {
      if ($data === $tabElement[i].getAttribute('data-view')) {
        event.target.className = 'tab active';
      } else {
        $tabElement[i].className = 'tab';
      }
    }
    for (var j = 0; j < $viewElement.length; j++) {
      if ($data === $viewElement[j].getAttribute('data-view')) {
        $viewElement[j].className = 'view';
      } else {
        $viewElement[j].className = 'view hidden';
      }
    }
  }
}
