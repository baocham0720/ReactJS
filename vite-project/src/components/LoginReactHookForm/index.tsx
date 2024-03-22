import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup
    .string()
    .required()
    .email().
    matches( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "email khong dung ding dang"),
    password: yup
    .string()
    .required()
    .matches(/^(?=.*[A-Z])(?=.*[@#!*%?])(?=.*[a-z])(?=.*\d)[A-Za-z@#!*%?\d]{8,}$/, 'password khong dung dinh dang'),
  })
  .required()

const LoginReactHookForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const onSubmit = (data) =>{
        console.log(data),
        reset();
      } 
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="email" {...register("email")} />
          <p>{errors.email?.message}</p>
    
          <input placeholder="password" {...register("password")} />
          <p>{errors.password?.message}</p>
    
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      )
}

export default LoginReactHookForm;