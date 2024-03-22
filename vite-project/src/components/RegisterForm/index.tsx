import React, { useState } from 'react';

interface IUser{
    username: string;
    email: string;
    checked: number[]
}
const RegisterForm = () => {

   /*
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); */ 

    //Cach toi uu hoa khi nhieu bien State:
    const[user, setUser] =useState<IUser>({
        username :'',
        email:'',
        checked:[]
    })

    const courses =[
        {id:1, name: "Html"},
        {id:2, name:"Javascript"},
        {id:3, name:"React Js"},
    ];

    const handelCheck = (id : number) => {
        setUser((prev) => {
          const isCheck = prev.checked.includes(id);
          //Bỏ check nếu đã check
          if (isCheck) {
            return {...prev,checked: prev.checked.filter((item)=> item !== id)}
          }
          //Còn lại thêm mới để check
          return {...prev, checked: [ ...prev.checked, id]};
        });
      };

    console.log(user);
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault(); //ngan form fresh trang
            console.log('submited');

        }}>
            <div>
            <input 
            value={user.username} onChange={(e)=>{
                setUser({...user, username: e.target.value}); }} 
                placeholder="username" type="text" name="username" />
            </div>
            <div>
            <input 
            value={user.email} onChange={(e)=>{
                setUser({...user, email: e.target.value}); }} 
                placeholder="email" type="text" name="email" />
            </div>
            <div>
                {
                  courses.map((course : {id: number, name: string})=>{
                    return (
                        <label htmlFor={`${course.id}`}>
                            <input
                            id={`${course.id}`} type="checkbox" 
                            checked={user.checked.includes(course.id)} 
                            onChange={()=> handelCheck(course.id)} />
                            {course.name}
                        </label>
                    )
                  })  
                }
            </div>
            
            <button type="submit" className='btn btn-primary'>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm;