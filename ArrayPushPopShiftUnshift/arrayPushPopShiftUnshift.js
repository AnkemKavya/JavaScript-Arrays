let workTypes = [];
function onClickToAdd() {
    debugger;
    let workType = document.getElementById("txtWorkType").value;
    document.getElementById("txtWorkType").value = "";
    workTypes.push(workType);
    let i = 0;
    let content = "";
    while(i < workTypes.length){
        content += `<p>${i+1}.${workTypes[i]}</p>`
        i++;
    }
    document.getElementById("divAdd").innerHTML = content;
}

function onClickToRemove() {
    debugger;
    let workType = document.getElementById("txtWorkType").value;
    document.getElementById("txtWorkType").value = "";
    workTypes.pop(workType);
    let i = 0;
      let content = "";
    while(i < workTypes.length){
    content += `<p>${i+1}.${workTypes[i]}</p>`;
    i++;
    }
    document.getElementById("divRemove").innerHTML = content;
}
function onClickToUnshift() {
    debugger;
    let workType = document.getElementById("txtWorkType").value;
    document.getElementById("txtWorkType").value = "";
    workTypes.unshift(workType);
    let i = 0;
      let content = "";
    while(i < workTypes.length){
    content += `<p>${i+1}.${workTypes[i]}</p>`;
    i++;
    }
    document.getElementById("divUnshift").innerHTML = content;
}
function onClickToShift() {
    let workType = document.getElementById("txtWorkType").value;
    document.getElementById("txtWorkType").value = "";
    workTypes.shift(workType);
    let i = 0;
      let content = "";
    while(i < workTypes.length){
    content += `<p>${i+1}.${workTypes[i]}</p>`;
    i++;
    }
    document.getElementById("divShift").innerHTML = content;
}