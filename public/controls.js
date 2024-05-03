// path to json with control scheme
const dataPath = document.currentScript.getAttribute('dataPath');
var controlsData = null;
// contains all schemes, pairs of value/label
const controlSchemes = [
['switch', 'Switch'],
['ps', 'Playstation'],
['xbox', 'Xbox'],
['pc', 'Mouse & Keyboard'],];
function generateControlDropdown() {
// find select root element
const root = document.getElementById('controls-dropdown-placeholder');
// create & add dropdown
const dropdown = document.createElement('select');
dropdown.id = 'controls-dropdown';
// loop over all control schemes and create an option in the dropdown
controlSchemes.forEach((value) => {
// create new option
const option = document.createElement('option');
// set value and label
option.value = value[0];
option.innerText = value[1];
// append to dropdown
dropdown.appendChild(option);});
dropdown.addEventListener('change', changeControls);
root.appendChild(dropdown);}
function changeControls() {
// check if controls data is loaded
if (controlsData === null) return;
// get currently selected platform
const dropdown = document.getElementById('controls-dropdown');
const selectedPlatform = dropdown.value;
// loop over all moves
controlsData.forEach((move) => {
// get all html elements with tagged class
const elements = document.querySelectorAll('.' + 'controls-' + move.id);
// set text according to selected control scheme, for all occurences
elements.forEach((element) => {element.textContent = move.controls[selectedPlatform];});});}
function fetchControlsData() {fetch(dataPath).then((response) => {if (!response.ok) {throw new Error('Network response was not ok');}
// Parse the JSON response
return response.json();})
.then((data) => {
//console.log(data);
controlsData = data;
// set controls text after loading data
changeControls();});}
generateControlDropdown();
fetchControlsData();