let shops = [];
function onClickToAdd() {
    debugger;
    let shopName = document.getElementById("txtShopName").value;
    shops.push(shopName);
    document.getElementById("txtShopName").value = "";
    let i = 0;
    let length = shops.length;
    content = "";
    while(i<length){
        content += `<p>${i+1}.${shops[i]}</p>`;
        i++;
    }
    document.getElementById("pResult").innerHTML = content;
}