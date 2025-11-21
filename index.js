const tax = 0.18;

// Array of objects
let invoice =[
    {name: "Service Fee", price: 50.00, qty: 1},
    {name: "Product License", price: 15.50, qty: 3}
];
//Function load invoice items
function loadData(){
    let trows = ``;
    for(i = 0; i < invoice.length; i++){
        const item = invoice[i];
        trows += `<tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.qty}</td>
                    <td>${(item.price * item.qty).toFixed(2)}</td>
                </tr>`;
    }
    invoiceItems.innerHTML = trows;
}