// create a JS storage for a reference to the "Open Modal" button.
// create a JS storage for a reference to the survey's "NO" button.
// create a JS storage for a reference to the survey box.
// create a JS storage for a reference to the overlay div.

// create a click event listener that will perform actions when the "Open Modal" button is clicked.
// create a click event listener that will perform actions when the survey's "NO" button is clicked.

// create a switch for the modal button, with the default value of "on".
// create a switch for the survey's "NO" button, with the default value of "off".

// define what will happen when the modal button is clicked:
//   -if the modal is set to "on", then
//     -toggle the modal switch to "off"
//     -toggle the survey switch to "on"
//     -add the dark background overlay
//     -have the survey screen pop up

// define what will happen when the survey's NO button is clicked:
//   -if the survey is set to "on", then
//     -toggle the survey switch to "off"
//     -toggle the modal switch to "on"
//     -remove the dark background overlay
//     -close the survey screen

var $modalButton = document.querySelector('.modal-btn');
var $surveyButton = document.querySelector('.no-btn');
var $background = document.querySelector('#darken-bg');
var $survey = document.querySelector('#survey');

$modalButton.addEventListener('click', handleClickModal);
$surveyButton.addEventListener('click', handleClickSurvey);

var modalOn = true;
var surveyOn = false;

function handleClickModal(event) {
  if (modalOn) {
    modalOn = false;
    surveyOn = true;
    $background.className = 'overlay';
    $survey.className = 'box flex absolute';
  }
}

function handleClickSurvey(event) {
  if (surveyOn) {
    surveyOn = false;
    modalOn = true;
    $background.className = '';
    $survey.className = 'hidden box flex absolute';
  }
}
