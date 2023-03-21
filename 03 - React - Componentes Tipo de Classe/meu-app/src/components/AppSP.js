import React, {useState} from 'react';

export default function AppSP(){
const[nome, setNome] = useState('');

    return(
        <>
        Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
        <br/>
        Olá {nome}
        </>
    );
}