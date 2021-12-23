// Temp file to test simple js code
// implement sum(x)(y)(a)(b).....() => Should return a sum of all parameters  
let sum = (x) => {
    return (y) => {
        return y ? sum (x + y) : x;
    }
}
// ES6 syntax
let sum2 = x => x ? y => y ? sum2 (x + y) : x : 0;



// Random stuff

var temp = 20;
function func () {
    console.log(temp);
    var temp = 21;
}
// func();

let varLetDiff = () => {
    var temp = 0;
    // for (temp = 0; temp < 5; temp++) {
        setTimeout (() => {
            for (temp = 0; temp < 5; temp++) {
                console.log(temp);
            }
        });
    // }
    console.log(temp);
}

function replacer() {
    let s1 = "123<asdf>fdg:5{asdasd}"
    let chars = [...s1];
    let str = '';
    let regExp = new RegExp('([^a-zA-Z0-9\s])');
    chars.forEach(c => {
        let charCode = c.charCodeAt(0);
        if (regExp.test(c)) {
            charCode = charCode + 1;
        }
        str += String.fromCharCode(charCode);

    });
    console.log(s1);
    console.log(str);
}

function constTest() {
    const a = [5, 6, 7, 8];
    console.log(a);
    a.unshift(1);
    console.log("after unshift");
    console.log(a);
    a = [1, 2, 3, 4];
    console.log("after re-assign");
    console.log(a);
}