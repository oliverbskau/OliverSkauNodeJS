//Smartphones

//why don't we like for loops in javascript
//overly verbose
//error prone
//not functional

const smartPhones = [
    {brand: "Samsung", price: 5000},
    {brand: "IPhone", price: 9000},
    {brand: "Sony Experia", price: 1000} 
]
   
//task  create a phone sale by subtracting 500 from each phone
//Wrong way to do this(even though it works):
/*const discountedPhones = smartPhones.forEach(smartPhone => {
    smartPhone.price -= 500;
});
console.log(smartPhones);
*/

//right way to do it
const discountedPhones = smartPhones.map(smartPhone => {
    smartPhone.price -= 500;
    return smartPhone;
});
console.log(discountedPhones);

const phonesICanAfford = smartPhones.filter(smartPhone =>
    smartPhone.price <= 4000);
console.log(phonesICanAfford);
