import {useEffect, useState} from 'react'

/*const computeLetterCount = (word : string) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
};*/

const EffectExample = ({name} : {name :string}) => {
    const message = `Hello, ${name}!`;  // Calculates output

    ///document.title = `Greetings to ${name}`;// Side-effect!
    console.log('EffectExample Render')

    /*const letterCount = computeLetterCount("nhan") ;
    document.title = `${letterCount}`;*/
    /*
    useEffect(()=>{}, [array])
    - Tham số 1 : callback function
    - Tham số 2 : mảng tuỳ chọn
     */
// TH1: chỉ có tham só thứ 1 => chạy lần đầu tiên và mỗi khi component render
  /* useEffect(()=>{
        console.log("2");
       document.title = `Greetings to ${name}`;// Side-effect!
     });*/
//TH2: có tham số thứ 2 nhưng là một mảng rỗng []

    /* useEffect(()=>{
        console.log("2");
       document.title = `Greetings to ${name}`;
     }, []);*/ // dependency
     //Những Effect nào mà bạn muốn chỉ chạy duy nhất lần đầu, khi component render thì dùng trường hợp này

    const [myName, setMyname] = useState("");
    const [person, setPerson] = useState("Alice");
    
    //TH3: có tham số thứ 2 nhưng là một mảng không rỗng, TH sử dụng khi đi làm
    useEffect(()=>{
        console.log("2");
       document.title = `Greetings to ${person}`;
     },[person]);  //dua State vao mang se thay doi ben tren theo ten, chay lai khi bien thay doi
     console.log("Person >>>>", person);

     const [count, setCount] = useState(0);

     useEffect(()=> {
       const interval= setInterval(() => {
            setCount((count) => count + 1);
            console.log('This will run every second!');
        }, 1000);
        return () =>{
            console.log('Da Unmouting');
            clearInterval(interval);
        };
    },[]);


  return (
    <>
    <h2>{count}</h2>
    {console.log("1")}
  <p>{message}</p>  
  <input value={myName} onChange={(e)=>{
    setMyname(e.target.value);
  }} placeholder="name" type="text"/>
  <hr/>
  <button onClick={()=>{
    setPerson('Alice')
  }} className='btn'>Alice</button>
  <button onClick={()=>{
    setPerson('Tom') }}  className='btn'>Tom</button>
  <button onClick={()=>{
    setPerson('David') }} className='btn'>David</button>
  </>  
  );
   
};


export default EffectExample;