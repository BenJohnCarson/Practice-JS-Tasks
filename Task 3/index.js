// 3. Write a program to convert into keys to object and vice versa.
// a. Create a JSON Object with 10 values and change them from Key to Value & Value to Key.

let json = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten"
}

function invertJson(json) {
    return Object.keys(json).reduce((obj,key) => {
        obj[json[key]] = key;
        return obj;
    },{});
};

console.log(invertJson(json));
