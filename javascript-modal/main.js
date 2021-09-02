// create a JS storage for a reference to the "Open Modal" button.
// create a JS storage for a reference to the survey's "NO" button.
// create a JS storage for a reference to the survey box.
// create a JS storage for a reference to the overlay div.

// create a click event listener that will perform actions when the "Open Modal" button is clicked.
// create a click event listener that will perform actions when the survey's "NO" button is clicked.

// define what will happen when the modal button is clicked:
//   -add the dark background overlay
//   -have the survey screen pop up

// define what will happen when the survey's NO button is clicked:
//   -remove the dark background overlay
//   -close the survey screen

var $modalButton = document.querySelector('.modal-btn');
var $surveyButton = document.querySelector('.no-btn');
var $background = document.querySelector('#darken-bg');
var $survey = document.querySelector('#survey');

$modalButton.addEventListener('click', handleClickModal);
$surveyButton.addEventListener('click', handleClickSurvey);

function handleClickModal(event) {
  $background.className = 'overlay';
  $survey.className = 'box flex absolute';
}

function handleClickSurvey(event) {
  $background.className = '';
  $survey.className = 'hidden box flex absolute';
}
