let birds = ["eagle", "parrot", "owl", "sparrow", "nightingale", "pegion", "peacock", "crow", "duck", "swan", "owl"];
function onClickToCheck() {
    debugger;
    let bird = document.getElementById("txtBirds").value;
    document.getElementById("txtBirds").value = "";
    if(birds.includes(bird)){
        document.getElementById("pResult").innerHTML = `The Word ${bird} is in the array.`;
    } else{
        document.getElementById("pResult").innerHTML = `The Word ${bird} is not in the array.`;
    }
}

function onClickToCheckIndex() {
    debugger;
    let index = document.getElementById("txtIndex").value;
    document.getElementById("txtIndex").value = "";
    document.getElementById("pIndexResult").innerHTML = `The word ${index} is at ${birds.indexOf(index)}`;
}

function onClickToCheckLastIndexOf() {
    debugger;
    let index = document.getElementById("txtLastIndexOf").value;
    document.getElementById("txtLastIndexOf").value = "";
    document.getElementById("pLastIndexResult").innerHTML = `The word ${index} is at ${birds.lastIndexOf(index)}`;
}