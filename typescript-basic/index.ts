let age : number = 35;

let arr:number[] =[1,2,3];
arr[3]=9;
console.log(arr);

const isAdmin: boolean = true;

let ourTuple:[number, boolean, string];
ourTuple=[1,true,"hello"];

let fruits:['cam','xoai'];

//let user : {
    //name:string,
   // age:number,
   // isMale:boolean,
//}={
    //name: "Nhan",
    //age: 25,
    //isMale:true,
//};
//console.log(user);

 //type TUser = {
   // name:string,
   // age:number,
    //isMale:boolean,
//};
//let user: TUser={
  //  name: "Nhan",
   // age: 25,
    //isMale:true,
//};

//console.log(user);


interface IUser{
    name:string,
    age:number,
    isMale:boolean,
};
interface IUser2 extends IUser{
    phone:string,
}
let user: IUser={
    name: "Nhan",
    age: 25,
    isMale:true,
};
let user2: IUser2={
    name: "Nhan",
    age: 25,
    isMale:true,
    phone:"098978787"
};

console.log(user);

const sunCal=(a : number,b:number) :number=>{
    return a+b;
   };
   console.log(sunCal(2,5));
   
   //khai chuỗi
   //const sunCal=(a : number,b:number) :string=>{
    //return '${a} + $(b)';
   //};
   //console.log(sunCal(2,5));

   //khai hàm
   //const sayHello =(nam:string) :void=>{
    //console.log(name);
   //};
   //sayHello('Nhan');