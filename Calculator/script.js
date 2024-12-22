const nums = document.querySelectorAll('.val');
const operators = document.querySelectorAll('.operator');
const ctrl = document.querySelectorAll('.ctrl');
const display = document.getElementById('ans');

function updateScroll() {
    display.scrollLeft = display.scrollWidth;
}

function keyPress(e) {
    if(e.key==='Enter' || e.key==='=') {
        document.getElementById('exp').value = display.value;
        display.value = display.value.replaceAll('×', '*');
        display.value = display.value.replaceAll('%', '*0.01');
        try {
            display.value = eval(display.value);
        }
        catch(err) {
            display.value = 'Syntax Error';
        }
    }
    if(e.key==='Backspace') {
        display.value = display.value.slice(0, -1);
    }
    if(e.key==='Escape') {
        display.value = '0';
        document.getElementById('exp').value = '';
    }
    if(e.key==='%' || e.key==='+' || e.key==='-' || e.key==='/' || e.key==='*' || e.key==='.' || e.key==='(' || e.key===')') {
        if(e.key==='*')
            display.value += '×';
        else if(e.key==='(')
            display.value += '(';
        else
            display.value += e.key;
    }
    if(e.key==='0' || e.key==='1' || e.key==='2' || e.key==='3' || e.key==='4' || e.key==='5' || e.key==='6' || e.key==='7' || e.key==='8' || e.key==='9') {
        if(display.value==='0' || display.value==='Syntax Error') {
            display.value='';
        }
        display.value += e.key;
    }
    updateScroll();
}

document.addEventListener('keydown', keyPress);

nums.forEach((button) => {
    button.addEventListener('click', () => {
        if(display.value==='0' || display.value==='Syntax Error') {
            display.value='';
        }
        display.value += button.textContent;
        updateScroll();
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent==='=') {
            document.getElementById('exp').value = display.value;
            display.value = display.value.replaceAll('×', '*');
            display.value = display.value.replaceAll('%', '*0.01');
            try {
                display.value = eval(display.value);
            }
            catch(err) {
                display.value = 'Syntax Error';
            }
            return;
        }
        display.value += button.textContent;
        updateScroll();
    });
});

ctrl.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent==='AC') {
            display.value = '0';
            document.getElementById('exp').value = '';
        }
        if(button.textContent==='C') {
            display.value = display.value.slice(0, -1);
        }
        if(button.textContent==='%') {
            display.value += button.textContent;
        }
        updateScroll();
    });
});