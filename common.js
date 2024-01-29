function getNextSibling(elem, selector) {

	// Get the next sibling element
	var sibling = elem.nextElementSibling;

	// If there's no selector, return the first sibling
	if (!selector) return sibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling
	}
}

var coll = document.getElementsByClassName("collapsible");
var i;
var prevClickElem;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    (prevClickElem) && (prevClickElem.style.display = "none");
    nextSiblingClassName = this.className.split(' ')[1];    
    var content = getNextSibling(this.parentElement, `.${nextSiblingClassName}`);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    prevClickElem = content;
  });
}
