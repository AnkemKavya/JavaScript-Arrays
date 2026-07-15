let evenNumbers = [];
let oddNumbers = [];
function onClickToAdd() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value); 
    document.getElementById("txtNumber").value = "";
    let evenContent = "";
    if(number % 2 ==0){
        evenNumbers.push(number);
    }else{
        oddNumbers.push(number);
    }
    let i = 0;
    while(i < evenNumbers.length){
        evenContent += `<p>${i+1}. ${evenNumbers[i]}</p>`;
        i++;
    }
    console.log(evenContent);
    console.log(evenNumbers);
    document.getElementById("divEvenResult").innerHTML = evenContent;
    let j = 0;
    let oddContent = "";
    while(j < oddNumbers.length){
        oddContent += `<p>${j+1}. ${oddNumbers[j]}</p>`;
        j++;
    }
    console.log(oddContent);
    console.log(oddNumbers);
    document.getElementById("divOddResult").innerHTML = oddContent;
}