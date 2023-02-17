let phoneNumber = $('#order-phone').val();
let patt = new RegExp(/^[+]*[0-9]{1,4}-[0-9]{10}$/g); //This is the regex for validation phone number
let res = patt.test(phoneNumber );
console.log(res); //this will return true or false

// the do something with the verified number