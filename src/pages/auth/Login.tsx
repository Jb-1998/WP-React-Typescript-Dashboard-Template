import React from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
};

const Login = () => {
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit = (data : any) => {
        console.log(data)
        // login redux action
        // dispatch(login(data));
    };
  
    console.log(watch("email")) // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input type="text" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
}

export default Login;
