import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = ()=>{

    const { counter, increment, decremet, reset }=useCounter();

    return(
        <>
                <h3>Custom Hook</h3>
				<div className="card" style={{width:'18rem',}}>
					<h1>Counter with Hook:{counter}</h1>

					<hr/>

					<button className="btn btn-primary" style={{marginBottom:'5px'}} onClick={()=>increment(2)}>+</button>
					<button className="btn btn-primary" style={{marginBottom:'5px'}} onClick={()=>decremet(2)}>-</button>
					<button className="btn btn-danger" style={{marginBottom:'5px'}} onClick={()=>reset()}>reset</button>
				</div>
        </>
    )
}