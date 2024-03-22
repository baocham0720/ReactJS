//var age = 35;
//age = "bala"
//console.log(age);

let arr=[1,2,3, "bala"];
arr[4]="coc";
console.log(arr);

//cách khác với ES6
//const[ , , , str]=arr;
//const[con1, ...conlai]=arr;
//console.log("con1:",con1,"conlai:", conlai);

//let user={
   // name: "Nhan",
   // age: 25,
    //isMale:true,
//};
//user.isMale ="Nam";
//console.log(user);

//arrow function es6
//const sunCal=(a,b)=>{
 //return a+b;
//};
//console.log(sunCal(2,5));

let user={
   name: "Nhan",
    age: 25,
    isMale:true,
};
user ={...user,phone:"098908777"};
console.log(user);