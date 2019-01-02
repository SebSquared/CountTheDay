// Here you will find Scripts

function CopyLink(str) {
  var element = document.createElement("textarea"); // Create new element
  element.value = str; // Set value (string to be copied)
  element.setAttribute("readonly",""); // Set non-editable to avoid focus and move outside of view
  element.style = {position:"absolute", left: '-9999px'};
  document.body.appendChild(element);
  element.select(); // Select text inside element
  document.execCommand("copy"); // Copy text to clipboard
  document.body.removeChild(element) // Remove temporary element
}
