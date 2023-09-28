const alphaSet = (dec) => {
    return Array.from(Array(26)).map((_, i) => i + dec);
};

export const upperAlphaSet = () => {
    return alphaSet(65).map((x) => String.fromCharCode(x));
};

export const lowerAlphaSet = () => {
    return alphaSet(97).map((x) => String.fromCharCode(x));
};

export const digitSet = () => {
    return Array.from(Array(10).keys()).map((num) => num.toString());
};

export const speicalCharacterSet = () => {
    return [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "{",
        "}",
        "[",
        "]",
        ";",
        ":",
        '"',
        "'",
        ",",
        "<",
        ".",
        ">",
        "/",
        "\\",
        "?",
        "`",
        "~",
        "|",
    ];
};

export const changeStateByUpperAlpha = (currentState, nextState) => {
    const alpha = upperAlphaSet();
    const localTransition = {};

    alpha.forEach((alp) => {
        localTransition[currentState] = {
            ...localTransition[currentState],
            [alp]: nextState,
        };
    });
    return localTransition;
};

export const changeStateByDigit = (currentState, nextState) => {
    const digit = digitSet();
    const localTransition = {};

    digit.forEach((dig) => {
        localTransition[currentState] = {
            ...localTransition[currentState],
            [dig]: nextState,
        };
    });
    return localTransition;
};

export const changeStateBySpecailLetters = (currentState, nextState) => {
    const speicalLetter = speicalCharacterSet();
    const localTransition = {};

    speicalLetter.forEach((sl) => {
        localTransition[currentState] = {
            ...localTransition[currentState],
            [sl]: nextState,
        };
    });
    return localTransition;
};

export const changeStateByWord = (currentState, nextState, word) => {
    const myWord = word.split("");
    const lengthWord = word.length;
    const localTransition = {};
    let _subCurr = 0;
    let _curr = currentState;

    myWord.forEach((mw) => {
        _subCurr += 1;
        let _nextState = `${currentState}_${_subCurr}`;
        if (_subCurr == lengthWord) _nextState = nextState;
        localTransition[_curr] = {
            ...localTransition[_curr],
            [mw]: _nextState,
            [mw.toUpperCase()]: _nextState,
        };

        _curr = `${currentState}_${_subCurr}`;
    });
    console.log(localTransition);
    return localTransition;
};
