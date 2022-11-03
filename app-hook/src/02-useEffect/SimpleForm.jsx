import { useEffect, useState } from "react"
import { Message } from "./message";

export const SimpleForm =()=>{

    const [formState, setFormState]=useState({
        username:"strider",
        email:"enrique@google.com"
    });

    const { username, email }=formState;

    const onInputChange =({target})=>{
        const{name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    // useEffect(()=>{
    //     console.log("useEffect called!")
    // },[]);

    // useEffect(()=>{
    //     console.log("the formState changed!")
    // },[formState]);

    // useEffect(()=>{
    //     console.log("the formState changed!")
    // },[formState.username]);
    return(
        <>
            <h1>SimpleForm</h1>
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
            {
                (username== "strider2")&&<Message/>
            }
            
        </>
    )
}