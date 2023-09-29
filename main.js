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
let rule_des = [
  "ต้องมีตัวพิมพ์ใหญ่นำหน้า",
  "ต้องมีตัวเลขต่อจากตัวพิมพ์ใหญ่",
  "ต้องมีตัวอักษรพิเศษต่อจากตัวเลข",
  "ต้องมีชื่อของอาจารย์ประจำวิชาต่อจากตัวเลข",
  "ต้องมีชื่อขอวชิชานี้",
  "ต้องมีวันที่ของวันนี้",
  "ต้องมีชื่อของตึกที่เรียน",
  "รูปนี้มาจากจังหวัดอะไร",
  "code นี้ Output ออกมาเป็นอะไร",
  "หมู + หมา = ไก่ หมูมีค่าเท่าไหร่",
]
let alphabets = [
  ...upperAlphaSet(),
  ...lowerAlphaSet(),
  ...digitSet(),
  ...speicalCharacterSet(),
];
let finalState = "q10";
const date = new Date().getDate().toString();
// transition
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

function handleClick() {
  function isAccepted() {
    const word = userInput.value;
    let currentState = initialState;
    for (let char of word) {
      if (
        !states.includes(currentState) &&
        !(char in transitions[currentState])
      ) {
        currentState = "trap";
        return false;
      }
      if (!alphabets.includes(char)) return false;
      editAlertBox(currentState)
      currentState = transitions[currentState][char] || currentState;
      console.log("_curr", currentState);
      if (currentState === finalState) return true;
    }
  }
  isAccepted()
}
function editAlertBox(currentState) {


  const info_index = states.indexOf(currentState);
  
  const check_Alert = document.getElementById(states[info_index + 1]);
  if (check_Alert!=null || !states.includes(currentState)){
    return
  }

  const template = document.getElementById('q-template');
  const clone = document.importNode(template.content, true);

  clone.getElementById("q-state").id = states[states.indexOf(currentState) + 1];
  clone.getElementById("Accept-Reject").id = "Reject";

  const str_rule = clone.getElementById('str-rule');
  str_rule.textContent = 'กฏข้อที่ '.concat(info_index + 1);

  const str_rule_des = clone.getElementById('str-rule-des');
  str_rule_des.textContent = rule_des[info_index];

  const Alert_Box = document.getElementById("Alert_Box");
  Alert_Box.prepend(clone);
}