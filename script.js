const dfa = {
    states: ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'TRAP0', 'TRAP1', 'TRAP2', 'TRAP3', 'TRAPf', 'qf'],
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789TRAP', // #1
    startState: 'q0',
    acceptStates: ['qf'],
    transitions: {
        //'q0': { '_': 'TRAP', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ': 'q1' },
        'q0': {
            'TRAP': 'TRAP0', 'A': 'q1', 'B': 'q1', 'C': 'q1', 'D': 'q1', 'E': 'q1', 'E': 'q1', 'F': 'q1', 'G': 'q1', 'H': 'q1', 'I': 'q1', 'J': 'q1', 'K': 'q1', 'L': 'q1',
            'M': 'q1', 'N': 'q1', 'O': 'q1', 'P': 'q1', 'Q': 'q1', 'R': 'q1', 'S': 'q1', 'T': 'q1', 'U': 'q1', 'V': 'q1', 'W': 'q1', 'X': 'q1', 'Y': 'q1', 'Z': 'q1'
        },
        'q1': {
            'TRAP': 'TRAP1', 'A': 'q1', 'B': 'q1', 'C': 'q1', 'D': 'q1', 'E': 'q1', 'E': 'q1', 'F': 'q1', 'G': 'q1', 'H': 'q1', 'I': 'q1', 'J': 'q1', 'K': 'q1', 'L': 'q1',
            'M': 'q1', 'N': 'q1', 'O': 'q1', 'P': 'q1', 'Q': 'q1', 'R': 'q1', 'S': 'q1', 'T': 'q1', 'U': 'q1', 'V': 'q1', 'W': 'q1', 'X': 'q1', 'Y': 'q1', 'Z': 'q1',
            '0': 'q2', '1': 'q2', '2': 'q2', '3': 'q2', '4': 'q2', '5': 'q2', '6': 'q2', '7': 'q2', '8': 'q2', '9': 'q2'
        },
        'q2': { 'TRAP': 'TRAP2', '0': 'q2', '1': 'q2', '2': 'q2', '3': 'q2', '4': 'q2', '5': 'q2', '6': 'q2', '7': 'q2', '8': 'q2', '9': 'q2' },
        'q3': { 'TRAP': 'TRAP', '1': 'q4' },
        'q4': { 'TRAP': 'TRAP', '1': 'q5' },
        'q5': { 'TRAP': 'TRAP', '1': 'q6' },
        'q6': { 'TRAP': 'TRAP', '1': 'q7' },
        'q7': { 'TRAP': 'TRAP', '1': 'q8' },
        'q8': { 'TRAP': 'TRAP', '1': 'q9' },
        'q9': { 'TRAP': 'TRAP', '1': 'qf' },
        'qf': { 'TRAP': 'TRAPf' },
        'TRAP0': { 'TRAP': 'TRAP0' },
        'TRAP1': { 'TRAP': 'TRAP1' },
        'TRAP2': { 'TRAP': 'TRAP2' },
        'TRAP3': { 'TRAP': 'TRAP3' },
        'TRAPf': { 'TRAP': 'TRAPf' }
    }

};



// const dfaATZ = {
//     state: ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q23', 'q24', 'q25', 'TRAP', 'qf'],
//     alphabet: '01',
//     startState: 'q0',
//     acceptStates: ['qf'],
//     transitions: {
//         'q0': {
//             '0': 'TRAP', 'A': 'q1', 'B': 'q1', 'C': 'q1', 'D': 'q1', 'E': 'q1', 'E': 'q1', 'F': 'q1', 'G': 'q1', 'H': 'q1', 'I': 'q1', 'J': 'q1', 'K': 'q1', 'L': 'q1', 'M': 'q1', 'N': 'q1', 'O': 'q1', 'P': 'q1', 'Q': 'q1', 'R': 'q1', 'S': 'q1', 'T': 'q1', 'U': 'q1', 'V': 'q1', 'W': 'q1', 'X': 'q1', 'Y': 'q1', 'Z': 'q1'
//         },



//         //     }


//         // const regexMatch = [/^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)(TOC)(31)(ecc)(bangkok)(1)(chicken-dog)$/gi, // 10
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)(TOC)(31)(ecc)(bangkok)(1)$/gi, // 9
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)(TOC)(31)(ecc)(bangkok)$/gi, // 8
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)(TOC)(31)(ecc)$/gi, // 7
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)(TOC)(31)$/gi, // 6
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)(TOC)$/gi, // 5
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~](KIETIKUL)$/gi, // 4
//         //     /^[A-Z][0-9][!@#$%^&*()_\-+=\{\}\[\];:'",<.>\/?`~]$/gi, // 3
//         //     /^[A-Z][0-9]$/gi, // 2
//         //     /^[A-Z]$/gi // 1
//         // ];
//         let currentState = dfa.startState;
function checkString(inputString) {
    currentState = dfa.startState;

    for (const symbol of inputString) {
        if (!dfa.alphabet.includes(symbol)) {
            currentState = dfa.transitions[currentState]['TRAP'];
        }
        else {
            currentState = dfa.transitions[currentState][symbol];
        }


        // check trap state
        if (currentState === 'TRAP') {
            return false;
        }
    }

    return dfa.acceptStates.includes(currentState);
}

var input = '0';

document.getElementById('checkButton').addEventListener('click', () => {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');

    // for (let i = 0; i < 10; i++) {
    //     if (inputString.match(regexMatch[i])) {
    //         input = '1'.repeat(10 - i);
    //         console.log(input);
    //         break;
    //     }
    //     else if (!inputString.match(regexMatch[i])) {
    //         input = '0';
    //         console.log('fail loop{i}');
    //     }
    // }


    // if (checkString(input)) {
    //     resultElement.textContent = 'Accepted ' + currentState;
    // } else {
    //     resultElement.textContent = 'Rejected ' + currentState;
    // }
    // console.log(currentState);
    if (checkString(inputString)) {
        resultElement.textContent = 'Accepted ' + currentState;
    } else {
        resultElement.textContent = 'Rejected ' + currentState;
    }
    console.log(currentState);
});