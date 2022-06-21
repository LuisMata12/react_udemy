import PropTypes from "prop-types"
import { useState } from "react"



const CounterApp = ({ value })=>{

    const [ counter, setCaunter ] = useState( value );

    const handleAdd = () =>{
        setCaunter(counter +1);
    };

    const handleRest =()=>{
        setCaunter(counter - 1);
    };

    const reset = () =>{
        setCaunter(value)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleRest }>-1</button>
            <button onClick={ reset }>Reset</button>
        </>
    )
}





export default CounterApp;