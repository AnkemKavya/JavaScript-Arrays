function onClickToAscPyramid() {
    debugger;
    let rows = Number(document.getElementById("txtRows").value);
    let i = 1;
    let content = "";
    let symbol = "*";
    while(i<=rows){
        content = content + symbol.repeat(i) + "<br>";
        i++;
    }
    document.getElementById("divPyramid").innerHTML = content;
}