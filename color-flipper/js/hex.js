const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const INITIAL_COLOR = '#49A6E9';

// color name element
const colorNameElm = document.querySelector('.color-name');
// body element
const bodyElm = document.body;

/**
 * This function sets provided color to the color style & text content of color element
 * and also sets the page body's background color with provided color
 *
 * @param {String} color
 */
 const updateRandomColor = (color) => {
    // set color style attribute to color name element
    colorNameElm.style.color = color;
    // set textContent style attribute to color name element
    colorNameElm.textContent = color;
    // set background color style attribute to document body element
    bodyElm.style.backgroundColor = color;
};


// when DOM fully loaded and parsed
window.addEventListener('DOMContentLoaded', () => {
    updateRandomColor(INITIAL_COLOR); // update initial color on page load

    // click event for the flip button
    document.querySelector('.flip-btn').addEventListener('click', () => {
        let randomColor = '#'; // reset with #
        // iterate 6 times in order to generate HEX color code
        for (let i = 0; i < 6; i += 1) {
            randomColor += hexDigits[getRandomNumber()]; // append random hex digit
        }

        // update the random color
        updateRandomColor(randomColor);
    });
});

const getRandomNumber = () => {
    return Math.ceil(Math.random() * hexDigits.length - 1);
};