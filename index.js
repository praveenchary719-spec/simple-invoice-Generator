
const tax = 0.18; //Tax Percentage

//Array of objects
let invoice = [
    {name: "Service Fee", price: 50.00, qty: 1},
    {name: "Product License", price: 15.50, qty: 3}
];

//Function load invoice items
function loadData(){
    let trows = ``;
    let sTotal = 0.00;
    for(i = 0; i < invoice.length; i++){
        const item = invoice[i];
        trows += `<tr>
                    <td>
                        <input type="text" value="${item.name}" style="text-align:left" onchange="updateItem(this, ${i}, 'name')" />
                    </td>
                    <td>
                        <input type="text" value="${item.price.toFixed(2)}" onchange="updateItem(this, ${i}, 'price')" />
                    </td>
                    <td>
                        <input type="text" value="${item.qty}" onchange="updateItem(this, ${i}, 'qty')" />
                    </td>
                    <td>${(item.price * item.qty).toFixed(2)}</td>
                    <td class="remove-row" onclick="removeItem(${i})">X</td>
                  </tr>`;
        sTotal += item.price * item.qty;
    }
    invoiceItems.innerHTML = trows;
    subTotal.innerHTML = sTotal.toFixed(2);
    taxAmount.innerHTML = (sTotal * tax).toFixed(2);
    grandTotal.innerHTML = (sTotal + (sTotal * tax)).toFixed(2);
}

//Remove invoice item
function removeItem(index){
    invoice.splice(index, 1); //Delete an item from array
    loadData();               //Reload your front-end table
}

//Add New Item
function addItem(){
    const item = {name: "", price: 0.00, qty: 0}; //Creating New item
    invoice.push(item); //Adding new item into an array
    loadData(); //Reloading your front-end table
}

//Update Item
function updateItem(ele, index, field){
    let item = invoice[index]; //Fetching item from array
    if(field == 'name')
        item.name = ele.value; //Updating name
    else if(field == 'price')
        item.price = parseFloat(ele.value); //Updating price
    else
        item.qty = parseInt(ele.value); //Updating quantity
    loadData(); //Reload your front-end table 
}