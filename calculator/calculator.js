const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Use a safer alternative to eval()
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = 'Error';
    }
}
