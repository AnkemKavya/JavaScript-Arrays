let fiveDivisibles = [];
let threeDivisibles = [];
let remaining = [];
function array(num){
    debugger;
    let divisibleBy5 = num / 5;
    let divisibleBy3 = num / 3;
    return divisibleBy5;
    return divisibleBy3;
}

function onClickToDivide() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    let arrayDivision = array(number);
    if(number % 5 == 0){
        fiveDivisibles.push(number);
        document.getElementById("divFiveResult").innerHTML = `Divisible by 5: ${fiveDivisibles}`;
    }
    if(number % 3 == 0){
        threeDivisibles.push(number);
        document.getElementById("divThreeResult").innerHTML = `Divisible by 3: ${threeDivisibles}`;
    } else{
        remaining.push(number);
        document.getElementById("divremainingResult").innerHTML = `Divisible by remaining numbers: ${remaining}`;
    }
}