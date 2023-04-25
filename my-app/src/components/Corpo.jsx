import React from "react";
import ImgCorpo from '../imgs/lugar.jpg';
import Dados from "./Dados";

export default function Corpo() {
    const canal = () => {
        return('Props por function')
    };

    const pr2 = "12";
    const pr3 = "13";

    const somar = (v1, v2) => {
        return v1+v2;
    }

    return(
        <>
            <img src={ImgCorpo} />
            <Dados props1={canal} props2={pr2} props3={pr3} adicao={somar}/>
        </>
    );
};