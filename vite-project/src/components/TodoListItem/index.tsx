

type TProps={
    text : string;
    done?:boolean;
}

/*const TodoListItem=({ text ,done=false}:TProps)=>{
    return
        <li>{text} {done === true ? "v" : null} -> toán tử ba ngôi

        </li>;
        
  };*/

  const TodoListItem=({ text ,done=false}:TProps)=>{
    if(done === true){
    return
        <li>{text} v </li>;
  }
  return <li>{text}</li>; 
};
        
  export default TodoListItem;