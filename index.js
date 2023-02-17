
// select the tag that has the class of an input field in which you input the 
// const income = document.querySelector('###')
// let salary = 50;

// const bill = (products, tax) =>{
//     let total = 0;
//     for (let i = 0; i <products.length; i++) {
//         total += products[i] + products[i] * tax;
//        let expens = total - salary;
//     }
//     return expens;
// }

// console.log(bill([10, 15, 30], 0.2));


console.log('hello how are you today'),console.log('hi buddy')

let peopel = ['uthaimin', 'usamah', 'muhsin', 'samad', 'ibn-baz'];


for (let i = 0; i < peopel.length; i++) {
    const names = element[i]
    console.log(names);
    
}


//how to circle through an array and do something with the array using for loop?    
var res = '{"count":"2","bettype":"double","position[0]":"1","oddsa[0]":"2","oddsb[0]":"3","placeodds[0]":"1/5","position[1]":"1","oddsa[1]":"4","oddsb[1]":"6","placeodds[1]":"1/7"}';


//
var getvals = JSON.parse(res);
var count = parseInt(getvals["count"]);

var i = 0;
const array = []; //new Array();
for (var i = 0; i < count; i++) {
  // create new object here
  var line = {};
  line["odds"] = getvals["oddsa[" + i + "]"] + '/' + getvals["oddsb[" + i + "]"];
  line["terms"] = getvals["placeodds[" + i + "]"];
  line["position"] = getvals["position[" + i + "]"];
  array.push(line);
}
console.log(array);



//Source: https://stackoverflow.com/questions/70137276








// peopel.forEach(function(people) {
//     console.log(people);
// })




// const rent = () => {
//     let 
// }













