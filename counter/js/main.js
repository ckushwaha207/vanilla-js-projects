/**
 * Initial count const variable
 */
const INITIAL_COUNT = 0;

document.addEventListener('DOMContentLoaded', () => {
    // sets initial value for the count.
    let count = INITIAL_COUNT;

    // count DOM element
    const counterElm = document.getElementById('counter-val');
    // list of buttons DOM elements
    const buttons = document.querySelectorAll('.btn');

    /**
     * This function increments count by 1.
     */
    increaseCount = () => { count += 1; };

    /**
     * This function decrements count by 1.
     */
    decreaseCount = () => { count -= 1; };

    /**
     * This function resets count to 0.
     */
    resetCount = () => { count = 0 };

    /**
     * This function updates counter DOM element text content with the value of count and
     * updates the text color to green if count is greater than zero, red if count is lesser than zero
     * and #222(shade of black) if count is zero.
     */
    updateCounterColor = () => {
        counterElm.textContent = count; // sets count value to counter DOM element
        counterElm.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#222'; // sets the color to counter DOM element
    }


    // sets initial value to the counter DOM element on page load
    updateCounterColor();

    // add click event to all the button DOM elements
    buttons.forEach(btn => btn.addEventListener('click', (ev) => {
        // list of class names present on the DOM element
        const classList = ev.currentTarget.classList;

        // if class names contains increase class name
        // increment count by 1
        if (classList.contains('increase')) {
            increaseCount();
        }
        // if class names contains decrease class name
        // decrement count by 1
        else if (classList.contains('decrease')) {
            decreaseCount();
        }
        // resets the count
        else {
            resetCount();
        }

        // sets the count value to the counter DOM
        updateCounterColor();
    }));
});