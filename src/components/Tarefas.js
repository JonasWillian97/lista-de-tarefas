import React from "react";
import {FaTrashAlt} from 'react-icons/fa';
import {BsPlusSquareFill} from 'react-icons/bs'
import { useState } from "react";

import './Tarefas.css'

function Tarefas () {

    const [tarefa, setTarefa] = useState('');
    const [listaTarefas, setListaTarefas] = useState([]);

    const adicionarTarefa = () => {
        if(tarefa === '')
        return alert('Por favor preencha o campo!')
        setListaTarefas(prev => [...prev, tarefa]);
        setTarefa('');
    }

    const enterAddTarefa = (event) => {
        if(event.code === 'Enter') {
            adicionarTarefa();
        }
    }

    const removerTarefa = (index) => {
        let novoVetor = [...listaTarefas];
        novoVetor.splice(index, 1);
        setListaTarefas(novoVetor);
    }

    const limparTudo = () => {
        setListaTarefas([]);
    }

    return (
        <div>
            <h1 className="titleH1">LISTA DE TAREFAS</h1>
            <input className="input" type='text' placeholder="Digite uma tarefa..." value={tarefa} onChange={(e) => setTarefa(e.target.value)} onKeyUp={enterAddTarefa} />
            <button  className="buttonOne" onClick={adicionarTarefa}><BsPlusSquareFill/></button> <br/>
            <button className="buttonTwo" onClick={limparTudo}>Limpar Tudo</button>

            <h3 className="titleH3">Tarefas:  👇  </h3>

            {
                listaTarefas.map(todo => (
                    <p className="paragrafo">{todo} - <span onClick={() => removerTarefa()}><FaTrashAlt /></span></p>
                ))
            }
        </div>
    )
} 

export default Tarefas;