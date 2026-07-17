let animals = [];
function onClickToPush() {
    debugger;
    let animalName = document.getElementById("txtAnimals").value;
    document.getElementById("txtAnimals").value = "";
    animals.push(animalName);
    let content = "";
    let i =0;
    while(i < animals.length){
        content += `<p>${i+1}. ${animals[i]}</p>`;
        i++;
    }
    document.getElementById("divPush").innerHTML = content;
}
function onClickToPop() {
    debugger;
    let animalName = document.getElementById("txtAnimals").value;
    document.getElementById("txtAnimals").value = "";
    animals.pop(animalName);
    let content = "";
    let i =0;
    while(i < animals.length){
        content += `<p>${i+1}. ${animals[i]}</p>`;
        i++;
    }
    document.getElementById("divPop").innerHTML = content;
}
function onClickToSlice() {
    debugger;
    let animalName = document.getElementById("txtAnimals").value;
    let startIndex = Number(document.getElementById("txtStartIndex").value);
    let endvalue = Number(document.getElementById("txtEndIndex").value);
    document.getElementById("txtAnimals").value = "";
    animals.slice(animalName);
    let content = "";
    let i = startIndex;
    while(i < endvalue){
        content += `<p>${i+1}. ${animals[i]}</p>`;
        i++;
    }
    document.getElementById("divSlice").innerHTML = content;
}

function onClickToSplice() {
    debugger;
    let animalName = document.getElementById("txtAnimals").value;
    let startIndex = Number(document.getElementById("txtStartIndex").value);
    let endvalue = Number(document.getElementById("txtEndIndex").value);
    document.getElementById("txtAnimals").value = "";
    animals.splice(startIndex, endvalue, ...animalName);
    document.getElementById("divSplice").innerHTML = 
}