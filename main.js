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

document.getElementById("input").addEventListener("input", handleinput);
const eleLines = document.querySelectorAll(".simulate-dfa .line");
const eleDownArrows = document.querySelectorAll(".simulate-dfa .down-arrow");
const eleCircles = document.querySelectorAll(".simulate-dfa .circle");

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
  "ต้องมีตัวพิมพ์ใหญ่",
  "ต้องมีตัวเลขต่อจากตัวพิมพ์ใหญ่",
  "ต้องมีตัวอักษรพิเศษต่อจากตัวเลข",
  "ต้องมีชื่อของอาจารย์ประจำวิชาต่อจากตัวเลข",
  "ต้องมีชื่อของวิชานี้",
  "ต้องมีวันที่ของวันนี้",
  "ต้องมีชื่อของตึกนี้",
  "รูปนี้มาจากจังหวัดอะไร",
  "code นี้ Output ออกมาเป็นอะไร",
  "Pig + Dog = Chicken หมูมีค่าเท่าไหร่",
];
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

function updateStateDFA(pass_state) {
  eleLines.forEach((ele, idx) => {
    if (idx < pass_state.length) {
      ele.classList.add("pass");
      eleDownArrows[idx].classList.add("pass");
      eleCircles[idx].classList.add("pass");
      console.log("YO");
    } else {
      ele.classList.remove("pass");
      eleDownArrows[idx].classList.remove("pass");
      eleCircles[idx].classList.remove("pass");
    }
  });
}

function handleinput() {
  const pass_state = [];
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
      if (!pass_state.includes(currentState) && states.includes(currentState)) {
        pass_state.push(currentState);
      }
      currentState = transitions[currentState][char] || currentState;
      if (!pass_state.includes(currentState) && states.includes(currentState)) {
        pass_state.push(currentState);
      }

      console.log(pass_state);
      console.log("_curr", currentState);
    }
    updateStateDFA(pass_state);
    if (currentState === finalState) return true;
  }
  const bool_isAccept = isAccepted();
  editAlertBox(pass_state);
  if (bool_isAccept) {
    alert("You Win!!!");
  }
}
function editAlertBox(pass_state) {
  let info_index = 0;
  //loop สร้างalert box
  for (let state of pass_state) {
    info_index = states.indexOf(state);

    const check_Alert = document.getElementById(states[info_index + 1]);
    //ถ้าหากมีคำใบ้ของ state ต่อไปอยู่แล้ว
    if (check_Alert != null && pass_state.includes(states[info_index + 1])) {
      if (check_Alert.querySelector("#Reject") != null) {
        check_Alert.querySelector("#Reject").id = "Accept";
      }
      continue;
    } else if (check_Alert == null && info_index != 10) {
      const template = document.getElementById("q-template");
      const clone = document.importNode(template.content, true);

      clone.getElementById("q-state").id = states[states.indexOf(state) + 1];
      clone.getElementById("Accept-Reject").id = "Reject";

      const str_rule = clone.getElementById("str-rule");
      str_rule.textContent = "กฏข้อที่ ".concat(info_index + 1);

      const str_rule_des = clone.getElementById("str-rule-des");
      str_rule_des.textContent = rule_des[info_index];
      if (info_index == 6) {
        const img = new Image();
        img.src = "/picture/000017.JPG";
        img.id = "image";
        clone.getElementById("rule_description").appendChild(img);
      } else if (info_index == 7) {
        const img = new Image();
        img.src = "/picture/bkk.jpg";
        img.id = "image";
        clone.getElementById("rule_description").appendChild(img);
      } else if (info_index == 8) {
        const para = document.createElement("p");
        const node = document.createTextNode(
          " ++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>+++++++++++++++++++."
        );
        para.appendChild(node);
        clone.getElementById("rule_description").appendChild(para);
      }
      const Alert_Box = document.getElementById("Alert_Box");
      Alert_Box.prepend(clone);
    }
  }
  //loop ทำลาย alertbox
  for (let i = 8; i >= info_index; i--) {
    if (document.getElementById(states[i + 2]) != null) {
      const check_Alert = document.getElementById(states[i + 2]);
      check_Alert.remove();
      document.getElementById(states[i + 1]).querySelector("#Accept").id =
        "Reject";
    }
  }
  if (
    info_index == 9 &&
    document.getElementById("q10").querySelector("#Accept") != null
  ) {
    document.getElementById("q10").querySelector("#Accept").id = "Reject";
  }
}
