function onClickToDecPyramid() {
    debugger;
    let rows = Number(document.getElementById("txtRows").value);
    let symbol = "*";
    let content = "";
    let i = rows;
    while(i>=1){
        content = content + symbol.repeat(i) + "<br>";
        i--;
    }
    document.getElementById("divPyramid").innerHTML = content;
}