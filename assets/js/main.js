
function valida(){
    let price = 0.21;
    let valueKm = document.getElementById('km').value;
    let valueAge = document.getElementById('eta').value;
        console.log(valueKm);
        console.log(valueAge);

    let kmPrice = valueKm * price;
        console.log(kmPrice);

    let discount;
    if (valueAge < 18) {
        discount = 20;
        document.getElementById('preventivo').innerHTML = (kmPrice - ((kmPrice * discount)  / 100)).toFixed(2) + ' €';
    } else if (valueAge > 64){
        discount = 40;
        document.getElementById('preventivo').innerHTML = (kmPrice - ((kmPrice * discount)  / 100)).toFixed(2) + ' €';
    } else {
        discount = 0
        document.getElementById('preventivo').innerHTML = kmPrice.toFixed(2) + ' €';
    }
    console.log(discount);
    

    
    

}
