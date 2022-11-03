import { useState } from "react"


export const useCounter =(initialValue =10)=>{

    const [counter,setCounter]=useState(initialValue);

    const increment =(value=1)=>{
        setCounter(counter+value);
    }
    const decremet =(value=1)=>{
        if(counter<=1){
            alert("Esta es la primer frase, no se puede acceder a una anterior")
        }else{
            setCounter(counter-value)
        }
    }
    const reset =()=>{
        setCounter(0)
        
    }


    return{
        counter,
        increment,
        decremet,
        reset
    }
}