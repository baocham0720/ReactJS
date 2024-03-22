//import React from "react";
import { useBankStore } from "../../Hooks/useBankStore";

/*type TTodo ={
    id : number;
    name : string;
};

const todoLists=[
    {id:1 , name:"quet nha"},
    {id:2 , name:"lau nha"},
];*/
//todoList - [...todoLists, {id:3, name:"nau com"}] :cu phap bs mang

const SimpleCount = ()=>{
   // let count=0;
    //const increment =() =>{
     //   count = count +1;
      //  console.log('clicked');

   // };

   console.log('SimpleCount Reader');

  /* useState =() =>{
    return [count, setCount]
   }*/

   const {balance, deposiMoney, withdramMoney} = useBankStore();

   //const [count, setCount] = React.useState<number>(0);

   /*const [isShow, setIsShow] = React.useState<boolean>(false);

   console.log("<<=== isShow ===>>", isShow);

   const [todos, setTodos] = useState<TTodo[]>(todoLists);*/

    return (
        <>
       
       {/* <ul>
        {todos.map((todo)=>{
            return (
                <li key={todo.id}>{todo.name}</li>
            )
        })}
    </ul>
        <button onClick={()=>{
            const newArr= [...todoLists, {id:3, name:"nau com"}];
            setTodos(newArr);
        }} className="btn btn-primary">Add Todo</button>
    <hr/>*/}
        {/*<h2>{count}</h2>
        <button onClick={()=>{
           // setCount(count +1);
            //setCount(count +1);
            //setCount(count +1);

            setCount((prev) => prev +1); //hang doi, dong 1 -> 1, dong 2 -> 1+1 =2, dong 3 -> 2+1 = 3
            setCount((prev) => prev +1); //prev la snapshot -> prev = 0, dai dien gia tri truoc khi bien count thay doi
            setCount((prev) => prev +1); //prev la am chi gia tri truoc do cua state
        }} 
    className="btn">+3</button> */}
        
        <br/>
        <h1>SimpleCount</h1>
        <h2>{balance}</h2>
        <button onClick={()=>{
                deposiMoney (10);
            }}
            className="btn" >+10$</button>
         <button onClick={()=>{
                withdramMoney (5);
            }}
            className="btn" >-5$</button>
               

        {/*<button onClick={()=>{
            setIsShow(!isShow); //phủ định true false khi click(true show, false hide
        }} className="btn">Toogle Content</button>
        {isShow && (
             <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Facere eveniet voluptas accusantium suscipit impedit placeat expedita laudantium praesentium autem.
              Nobis, nisi odit. Nostrum beatae molestiae voluptate sint temporibus. Aut, doloremque.</div>
        )} */}
       
        </>
    );
};
export default SimpleCount;