let container = document.getElementById('container');
container.addEventListener('input', update);

function update(){

    let bill = Number(document.getElementById('billInput').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitRange').value;
    document.getElementById('tipPercent').innerHTML = tipPercent + "%";
    
    if (split > 1){
        document.getElementById('splitNumber').innerHTML = split + " people";
    } else {
       document.getElementById('splitNumber').innerHTML = split + " person"; 
    }
    
    let tip = Math.round(bill * (tipPercent/100));
    document.getElementById('tip').innerHTML = formatMoney(tip);

    let totalAmount = Math.round(bill + tip);
    document.getElementById('totalAmount').innerHTML = formatMoney(totalAmount);

    let splitAmount = Math.round(totalAmount / split);
    let splitTip = Math.round(tip / split);

    document.getElementById('tipEach').innerHTML = formatMoney(splitTip);
    document.getElementById('amountEach').innerHTML = formatMoney(splitAmount);
}

function formatMoney(value){
    value = value.toFixed(2);
    return "R " + value;
}