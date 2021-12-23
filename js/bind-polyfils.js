// Polyfils is used when a browser does not support some functionality/method, and a custom implementation is required in order to be able to support it
// Below example demonstrates how to give a custom implementation of the method 'bind' functionality via polyfils 

let name = {
    firstName: "Swapnil",
    lastName: "Verma"
}

let getFullName = function (city, state, country) {
    console.log(this.firstName + " " + this.lastName + ", " + city + ", " + state + ", " + country);
}

Function.prototype.myBind = function (...bindArgs) {
    let methodInstance = this;
    let thisInstance = bindArgs[0];
    let params = bindArgs.splice(1);

    return function(...methodArgs) {
        let finalArgs = [...params, ...methodArgs];
        
        //Using call
        console.log("Using call");
        methodInstance.call(thisInstance, ...finalArgs);

        // Using apply
        console.log("Using apply");
        methodInstance.apply(thisInstance, finalArgs);
        
        // Without using call or apply
        console.log("Without using call/apply");
        thisInstance.method = methodInstance;
        thisInstance.method(...finalArgs);
    }
}
let demoBind = function () {
    console.log("With default bind operator");
    let printMyName = getFullName.bind(name, "NOIDA", "Uttar Pradesh");
    printMyName("India");
    
    console.log("With custom myBind operator");
    let printMyNameWithMyBind = getFullName.myBind(name, "NOIDA", "Uttar Pradesh");
    printMyNameWithMyBind("India");
}
