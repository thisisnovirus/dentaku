var display = document.getElementById('display');

function insert(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var result = eval(display.value);
    display.value = result;
}
