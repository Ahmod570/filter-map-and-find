let ssc = 4.00 ;
let hsc = 3.50 ;
if (ssc> 4.00 && hsc > 4.00){
    console.log( "you will win");
}
else {
    console.log("you are not able to get");
}


let ssc = 5.00
let hsc = 2.00
if(ssc> 4.00 && hsc > 3.00 ){
    console.log("you get the gift");
}else{
    console.log("you did not get the gift");
}


// filter methode
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.filter ((n)=>{console.log(n);})
let tukaiaBarkortam =6;
var barkormu  = arr.filter((n)=>n==tukaiaBarkortam);
console.log(barkormu);

?flter?
const num =[ 1,2,3,4,5,6,7,8,9,10,10,10];
// num.filter((n)=>{console.log(n);})
var desire = 10;
const barKormu = num.filter((n)=>n==desire)
console.log(barKormu);

// find 
var arrey = [ 1,2,3,4,5,6,7,8,9,11,10,10];
// arrey.find((n)=>{console.log(n);})
var tukaitam = 11;
var dekmu = arrey.find((n)=>n==tukaitam);
console.log(dekmu);



map

var arrey = [ 1,2,3,4,5,6,7,8,9,11,10,10];
arrey.map((n)=>{console.log(n);})

const list =[
     { id: 1, name: "Ayaan", age: 21, city: "Dhaka" },
  { id: 2, name: "Mira", age: 19, city: "Chittagong" },
  { id: 3, name: "Rafi", age: 24, city: "Sylhet" },
  { id: 4, name: "Sohana", age: 22, city: "Rajshahi" },
  { id: 5, name: "Nabil", age: 20, city: "Khulna" }
];
list.map((n)=>{console.log(n);})
let dekmu = "Dhaka";
const tukaimu = list.map((one)=>one.city==dekmu);
if(!tukaimu){
    console.log("pailam  na ba")
}
console.log(tukaimu);



