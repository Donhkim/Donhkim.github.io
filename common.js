function getNextSibling(elem, selector) {
  var sibling = elem.nextElementSibling;

  if (!selector) return sibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
}

function getPrevSibling(elem, selector) {
    var sibling = elem.previousElementSibling;
  
    if (!selector) return sibling;
  
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.previousElementSibling;
    }
  }

let coll = document.getElementsByClassName("collapsible");
let i;
let prevTextElem;
let prevClickElem;

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
    let content = getNextSibling(this.parentElement, `.${nextSiblingClassName}`);

    if (prevTextElem === content) {
      prevTextElem = null;
      return;
    }

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      let articleTitle = getPrevSibling(this.parentElement, '.article-title');
      articleTitle.scrollIntoView({ behavior: "smooth" });
    }
    prevTextElem = content;
  });
}
