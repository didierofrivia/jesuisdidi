function createTypewriter(textArray, selector) {
    let stringIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let typeJsText = document.querySelector(selector);

    return {
        write: function() {
            if (stringIndex < textArray.length) {
                const currentString = textArray[stringIndex]
                if (isTyping) {
                if (charIndex < currentString.length) {
                    typeJsText.innerHTML += currentString.charAt(charIndex);
                    charIndex++;
                } else {
                    isTyping = false;
                }
                } else {
                    if (charIndex > 0) {
                        charIndex = 0;
                        typeJsText.innerHTML = "";
                        //typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
                        //charIndex--;
                    } else {
                        isTyping = true;
                        stringIndex++;

                        if (stringIndex >= textArray.length) {
                            stringIndex = 0;
                        }

                        charIndex = 0;
                        typeJsText.innerHTML = "";
                    }
                }
            }
        }
    }
}

function typeJs(textArray, selector) {
    const typeWriter = createTypewriter(textArray, selector)
    setInterval(typeWriter.write, 120)
}
