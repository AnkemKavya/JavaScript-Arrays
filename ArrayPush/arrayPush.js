var Vegitables = [];
function onClickToPush() {
    debugger;
    console.log(`Original Array: ${Vegitables}`);
    let Vegitable = document.getElementById("txtVeggies").value;
    Vegitables.push(Vegitable);
    document.getElementById("pResult").innerHTML = `After pushing new element: ${Vegitables.join(", ")}`;
    document.getElementById("txtVeggies").value = "";
}