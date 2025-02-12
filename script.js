let expression = '';

function appendSymbol(symbol) {
    if (symbol === '+/-') {
        expression = eval(expression) * -1;
    } else if (symbol === 'Math.sqrt(') {
        expression += 'Math.sqrt(';
    } else {
        expression += symbol;
    }
    document.getElementById('expression').value = expression;
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById('expression').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('expression').value = '';
    document.getElementById('result').innerText = '0';
}

function calculateResult() {
    try {
        let result = eval(expression);
        document.getElementById('result').innerText = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}

function getAnswer() {
    document.getElementById('expression').value = document.getElementById('result').innerText;
}
