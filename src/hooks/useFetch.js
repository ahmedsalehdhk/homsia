import { useEffect } from "react";
import { useState } from "react";
const useFetch = (url) =>{
    const [ data, setData] = useState(null
        // {title: 'My new website', body: "lorem ipsum......", author:"maria", id: 1},
        // {title: 'Welcome Party!', body: "lorem ipsum......", author:"yoshi", id: 2},
        // {title: 'Web dec top tips', body: "lorem ipsum......", author:"maria", id: 3}
    );
    const [isPending, setIsPending]= useState(true);
    const [error, setError]= useState(null);
    
    useEffect(() => {
        // console.log('use effect run');
        // console.log(name);
        const abortCont = new AbortController();
        setTimeout(() =>{
        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
            return res.json();
            })
            .then((data) =>{
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
                
            })
        }, 1000);

        return () => abortCont.abort();


    }, [url]);
    return {data, isPending, error};
}

export default useFetch;