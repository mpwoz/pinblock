console.log('pinterest blocker enabled.');

// Get all promoted 'credit' divs.
function isPromoted(div) {
  return div.innerHTML.search('Promoted by') >= 0
}
var pins = Array.from(document.querySelectorAll('div.creditName'))
    .filter(isPromoted);

console.log(pins);


// Find their parent pin containers
function findParent(creditDiv) {
  return creditDiv.closest('.item');
}
pins = pins.map(findParent);

console.log(pins);
 
// Hide the promoted divs
function hidePin(container) {
  var hiddenStyle = "visibility:hidden; height:0px;";
  container.style = hiddenStyle;
}
pins.forEach(hidePin);

console.log(pins);
