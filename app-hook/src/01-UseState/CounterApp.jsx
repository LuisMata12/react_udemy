import { useState } from "react"

export const CounterApp = () =>{

		const [counter,setCounter]=useState(10)

    return (
        <>
				<h3>useState</h3>
				<div className="card" style={{width:'18rem',}}>
					<h1>Counter: { counter }</h1>

					<hr/>

					<button className="btn btn-primary" style={{marginBottom:'5px'}} onClick={()=> setCounter(counter+1)}>+1</button>
					<button className="btn btn-primary" style={{marginBottom:'5px'}} onClick={()=>setCounter(counter-1)}>-1</button>
					<button className="btn btn-danger" style={{marginBottom:'5px'}} onClick={()=>setCounter(0)}>reset</button>
				</div>
        </>
    )
}