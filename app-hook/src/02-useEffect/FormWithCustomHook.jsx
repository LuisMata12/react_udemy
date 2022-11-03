import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook =()=>{

    const {formState,onInputChange,onResetForm}=useForm({
        username:"",
        email:"",
        password:""
    });

    const{username,email,password}=formState
    return(
        <>
            <h1>CustomHook</h1>
            <hr/>

            <input 
               type="text" 
               className="form-control"
               placeholder="UserName"
               name="username"
               value={username}
               onChange={onInputChange}
            />
             <input 
               type="email" 
               className="form-control mt-3"
               placeholder="enrique@gmail.com"
               name="email"
               value={ email }
               onChange={onInputChange}
            />
              <input 
               type="password" 
               className="form-control mt-3"
               placeholder="contraseña"
               name="password"
               value={ password }
               onChange={onInputChange}
            />
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}