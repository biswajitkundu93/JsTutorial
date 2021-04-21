function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getoutput() {
    return document.getElementById("output-value").innerText;
}

function printoutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == '-') {
        return ""
    } else {
        var n = Number(num);
        var value = n.toLocaleString('en');
        return value;
    }
}

function reversenumberformat(num) {
    return Number(num.replace(/,/g, ''));
}

var oparation = document.getElementsByClassName('operator');
for (var i = 0; i < oparation.length; i++) {
    oparation[i].addEventListener('click', function() {
        if (this.id == 'clear') {
            printHistory("");
            printoutput("");
        } else if (this.id == 'backspace') {
            var output = reversenumberformat(getoutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printoutput(output);
            }
        } else {
            var output = getoutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substring(0, history.length - 1)
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reversenumberformat(output);
                history += output;
                if (this.id == "=") {
                    var result = eval(history);
                    printoutput(result);
                    lastelementofhistory = history[history.length]
                    printHistory("");
                } else {
                    history += this.id;
                    printHistory(history)
                    printoutput("")
                }
            }
        }
    });

}

var Numbers = document.getElementsByClassName('number');
for (var i = 0; i < Numbers.length; i++) {
    Numbers[i].addEventListener('click', function() {
        var output = reversenumberformat(getoutput());
        if (output != NaN) {
            output += this.id;
            printoutput(output)
        }
    });
}