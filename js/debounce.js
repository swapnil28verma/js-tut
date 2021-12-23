// Debouncing means waiting for a short while after user input, before firing any event handler
// Event handlers are only called if the delay between 2 user inputs exceeds the pre determined delay limit
// This is useful in making the application more performant in cases where user inputs can cause network calls
// For e.g. typing inside a search bar makes a network call and gives results instaneously, without requiring enter key press

let counterDebounce = 1;
const getDebounceData = function (counterParam) {
    console.log("Debounce API call - call #", counterParam);
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            counterDebounce++;
            fn.apply(context, [counterDebounce]);
        }, delay);
    }
}

const demoDebounce = debounce(getDebounceData, 300);