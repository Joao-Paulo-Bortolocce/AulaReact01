import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

//useEffect é um hook que permite gerenciar o ciclo de vida do compontente quando ele pe desenvolvido utilizando a sintaxe JSX

/*useEffect( functio (){

    return function () <-- willUnmout quando o componente é desmontado
}, [] didMount //executa só uma vez)
    [lista de valores obersavod] didUpdate para cada valor que foi atualizado 
*/


export default function DataV2(props){
    const[dataAtual,setDataAtual]=useState(new Date().toLocaleString());

    
    function pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDb = parseInt(timeZone);
        let diferencaTempo= timeZoneFromDb *60 +dataAtual.getTimezoneOffset();
        let milisegundos =parseInt(dataAtual.getTime() + (diferencaTempo *60 *1000));
        const data = new Date(milisegundos);
        return data;
    }

    //exemplo de didMount
    useEffect(()=>{
        setDataAtual(new Date().toLocaleString())
        return ()=>{}
    },[]);

    //exemplo de didUpdate
    useEffect(()=>{
        setTimeout(()=>{
            setDataAtual (pegaDataDe(props.timeZone).toLocaleString());
        },1000);
    },[dataAtual]) // <-- Observa este atributo e quando o mesmo for alterado chama essa função

    return(
        <h1>{props.texto || ""}{dataAtual}</h1>
    );
}