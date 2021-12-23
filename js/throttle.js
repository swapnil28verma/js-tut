// Throttling means having a delay of some time between 2 event handler calls
// Execute an event handler, if the time difference from the last event handler exceeds a predetermined value, and user is still executing that event (for e.g., still typing in the text box)
// Throttling vs Debouncing - Throttling is a way of reducing fucntion execution by checking time period difference between 2 event handler executions, 
// whereas Debouncing is a way of reducing function execution by checking time period difference between 2 event emits

let counterThrottle = 1;
const getThrottleData = function (counterParam) {
    console.log("Throttle API call - call #", counterParam);
}

const throttle = function (fn, delay) {
    let flag = true;
    return function () {
        if (flag) {
            let context = this;
            counterThrottle = counterThrottle + 1;
            fn.apply(context, [counterThrottle]);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

const demoThrottle = throttle(getThrottleData, 300);