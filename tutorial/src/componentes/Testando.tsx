import { useState } from "react";

import { HeaderTestando } from "./HeaderTestando";
import { Incluir } from "./Incluir";

export const Testando = () => {

    const[nome, setNome] = useState<string>('Ana');
    const[idade, setIdade] = useState<number>(21);
    const[cor, setCor] = useState<string>('#FF7F00');
    
    const[deletar, setDeletar] = useState();

    const[lista, setLista] = useState(['bolo','suco','coxinha']);
    const[user, setUser] = useState([
        {id: 1, nome: 'Matheus'},
        {id: 2, nome: 'Gabriel'},
        {id: 3, nome: 'Daniela'},
    ]);

    const adicionar = (novoNome : string) => {
        let novaLista = [...user];
        novaLista.push({
            id: lista.length + 1,
            nome: novoNome
        });
       setUser(novaLista);
    }

    // const deletarItem = (index:number) => {
    //     let excluir = [...lista]
    //     console.log(excluir.length);

    //     let remover = excluir.splice(index,1);
    //     console.log(excluir.length);
    //     alert('Item removido com sucesso');
    //     setLista(remover);
    // }
    

    const handleExcluir = () => {

        //Abaixo pega um número específico
        let randomNumber = 2;

        //Abaixo pega um número aleatório
        //let randomNumber = Math.floor(Math.random() * 4);

        setUser((prevUser) => {
            console.log(prevUser);
            return prevUser.filter((user) => randomNumber !== user.id);
        });
    }

    const modificaNome = () => {
        setNome('Vitória');
        setCor('#8B00FF');
    }

    const modificaIdade = () => {
        setIdade(22);
        setCor('CCCCC')
    }

    return(
        <div style={{background: cor}}>
            <HeaderTestando nome={nome} niver={idade}/>
            <button onClick={modificaNome}>Alterar nome</button>
            <button onClick={modificaIdade}>Alterar idade</button>

            <Incluir adicionar={adicionar}/>
            
            <ul>
                {lista.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
                
                {user.map((item) => (
                    <li key={item.id}>{item.id} - {item.nome}</li>
                ))}

                
                <button onClick={handleExcluir}>excluir user</button>
            </ul>

            
        </div>
    );
}