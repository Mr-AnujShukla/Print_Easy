function calculatePrice(myform) {
    var elt = document.getElementById("memoryItem");
    var memory = elt.options[elt.selectedIndex].value;
    var memoryQty = parseInt(document.getElementById("memoryItemQty").value);
    memory = parseInt(memory) * memoryQty;
    var total = memory;
    document.getElementById("PicExtPrice").value = total;
}



