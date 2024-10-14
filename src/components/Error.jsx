import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return <>
    <h1>
    {"status  : " + error.status} 
    </h1>
    <h1>{" Status-code : " +error.statusText} </h1>
   
    </>
}

export default Error;