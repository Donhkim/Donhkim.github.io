function getNextSibling(elem, selector) {
  var sibling = elem.nextElementSibling;

  if (!selector) return sibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;
var prevTextElem;
var prevClickElem;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active-button");

    if (prevClickElem && prevClickElem !== this && prevClickElem.classList.contains("active-button")) {
      prevClickElem.classList.remove("active-button");
    }

    prevClickElem = this;

    if (prevTextElem) {
      prevTextElem.style.display = "none";
    }
    nextSiblingClassName = this.className.split(" ")[1];
    var content = getNextSibling(this.parentElement, `.${nextSiblingClassName}`);

    if (prevTextElem === content) {
      prevTextElem = null;
      return;
    }

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    prevTextElem = content;
  });
}
