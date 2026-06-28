var fuits = ["Apples","Bananas","Grapes","Oranges","Kiwis","Pineapples","Watermelon"]
function onClickToCheck() {
    debugger;
    var value = Number(document.getElementById("txtIndex").value);
    var index = fuits[value];
    document.getElementById("pResult").innerHTML = `Index of ${value} is ${index}`;
}