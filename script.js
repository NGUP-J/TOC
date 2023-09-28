import {
    changeStateByDigit,
    changeStateBySpecailLetters,
    changeStateByUpperAlpha,
    changeStateByWord,
    digitSet,
    lowerAlphaSet,
    speicalCharacterSet,
    upperAlphaSet,
} from "./utils.js";

document.getElementById("button").addEventListener("click", handleClick);
const userInput = document.getElementById("input");
const result = document.getElementById("result");

let initialState = "q0";
let states = [
    "q0",
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
    "trap",
];
let alphabets = [
    ...upperAlphaSet(),
    ...lowerAlphaSet(),
    ...digitSet(),
    ...speicalCharacterSet(),
];
let finalState = "q10";
const date = new Date().getDate().toString();
//sub transition
const firstTransition = changeStateByUpperAlpha("q0", "q1");
const secondTransition = changeStateByDigit("q1", "q2");
const thirdTransition = changeStateBySpecailLetters("q2", "q3");
const forthTransition = changeStateByWord("q3", "q4", "kietikul");
const fifthTransition = changeStateByWord("q4", "q5", "toc");
const sixthTransition = changeStateByWord("q5", "q6", date);
const seventhTransition = changeStateByWord("q6", "q7", "ecc");
const eightTransition = changeStateByWord("q7", "q8", "bangkok");
const ninthTransition = changeStateByWord("q8", "q9", "1");
const tenthTransition = changeStateByWord("q9", "q10", "chicken-dog");

let transitions = {
    ...firstTransition,
    ...secondTransition,
    ...thirdTransition,
    ...forthTransition,
    ...fifthTransition,
    ...sixthTransition,
    ...seventhTransition,
    ...eightTransition,
    ...ninthTransition,
    ...tenthTransition,
};
console.log(firstTransition);
function handleClick() {
    function isAccepted() {
        const word = userInput.value;
        let currentState = initialState;

        for (let char of word) {
            if (!alphabets.includes(char)) return false;
            currentState = transitions[currentState][char] || "trap";
            console.log("_curr", currentState);
            if (currentState === "trap") return false;
        }

        if (currentState === finalState) return true;
    }
    if (isAccepted()) {
        result.innerHTML = "Accepted";
    } else {
        result.innerHTML = "Rejected";
    }
}
