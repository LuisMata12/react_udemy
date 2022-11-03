import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { Loading } from "./Loading";
import { Quote } from "./Quote";

export const MultipleCustomHooks = ()=>{

        const {counter,increment,decremet}=useCounter(1)        

		const {data, isLoading, hasError}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
        const{author,quote}=!!data && data[0];


    return(
        <>
					<h1>BreakingBad Quotes</h1>
					<hr />
                    {
                      (isLoading)
                        ?<Loading/>
                        :<Quote author={author} quote={quote}/>
                    }

                    <button className="btn btn-primary" onClick={()=>increment()}>
                        Next quote
                    </button>
                    <button className="btn btn-danger" onClick={()=>decremet()}>
                        Previus quote
                    </button>

        </>
    )
}