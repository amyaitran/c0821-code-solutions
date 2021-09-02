var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var email = event.target.email.value;
  var message = event.target.message.value;
  var values = { name, email, message };
  console.log('values:', values);
  $form.reset();
}
