function num(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var result = document.getElementById('result').value;
    do {
        var finalResult = eval(result);
        document.getElementById('result').value = finalResult;
    } while (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearAll() {
    document.getElementById('result').value = '';
}