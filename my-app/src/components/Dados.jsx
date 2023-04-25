import React from 'react';
import '../App.css';

export default function Dados(props) {
    
    const a1 = 10;
    const a2 = 25;

    return(
        <div className='div-dados'>
            <p className='box-soma'>Teste {props.props1()}</p>
            <p className='box-soma'>Teste {props.props2}</p>
            <p className='box-soma'>Teste {props.props3}</p>
            <p className='box-soma'>{'Somando ' + a1 + ' mais ' + a2 + ' é igual ' + props.adicao(a1,a2)}</p>
        </div>
    );
}