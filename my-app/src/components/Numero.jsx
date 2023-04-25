import React, {useState} from "react";

export default function Numero(props) {
    return(
        <>
            <p>Valor de num no componente Numero: {props.num}</p>

            <button onClick={()=>props.setNum(props.num+10)}>Somar 10</button>
        </>
    );
}