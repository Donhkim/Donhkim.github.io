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

function copyTextToClipboard(text) {
    // Check if any text is selected
    if (text !== "") {
        // Create a temporary input element
        var tempInput = document.createElement("input");

        // Set the input value to the selected text
        tempInput.value = text;

        // Append the input element to the document
        document.body.appendChild(tempInput);

        // Select the text in the input element
        tempInput.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary input element
        document.body.removeChild(tempInput);
    }
}

function isiOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}

function showFloatingWindow(msg) {
    var floatingWindow = document.getElementById("floating-window");

    // Show the floating window
    floatingWindow.innerHTML = '<p>' + msg + '</p>'
    floatingWindow.style.display = "block";
    floatingWindow.style.opacity = 1;    

    // Set a timeout to hide the floating window after 1 seconds
    setTimeout(function () {
        floatingWindow.style.opacity = 0;
    }, 1000);
}


let coll = document.getElementsByClassName("collapsible");
let i;
let prevTextElem;
let prevClickElem;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        // if (this.classList.contains("news-summary")) {
        //     let nextElem = getNextSibling(this.parentElement, ".news-text");
        //     copyTextToClipboard(`${nextElem.textContent}`);
        //     if (isiOS()) {
        //         window.location.href = "com.openai.chat://";
        //     } else {
        //         showFloatingWindow();
        //     }
        //     return;
        // }

        // if (this.classList.contains("news-keywords")) {
        //     showFloatingWindow('test');
        // }

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
            let articleTitle = getPrevSibling(this.parentElement, ".article-title");
            articleTitle.scrollIntoView({ behavior: "smooth" });
        }
        prevTextElem = content;
    });
}