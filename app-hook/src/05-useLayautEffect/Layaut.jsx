import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { Loading } from "../03-examples/Loading";
import { Quote } from "../03-examples/Quote";

export const Layaut = ()=>{

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