import { useState } from "react";
import { HeaderIngrid } from "./HeaderIngrid";
import { Rodape } from "./rodape";

export const Teste = () => {

    const [nome, setNome] = useState<string>('Ingrid Manfrin');
    const [idades, setIdades] = useState<number>(27);
    const [lista, setLista] = useState<string[]>(['batom','base','rimel']);

    const alterarIdade = () => {
        setIdades(28);
    }

    const alterarNome = () => {
        setNome('Ingrid Caldeira');
    }

    return(
        <div>
            <HeaderIngrid banana={nome} velha={idades}/>
            
            <button onClick={alterarNome}>Altera nome</button>
            <button onClick={alterarIdade}>Altera idade</button>

        
            <ul>
                <li key={1}>{lista[0]}</li>

                {lista.map((abobrinha, id) => (
                    <li key={id}>{abobrinha}</li>
                ))}
            </ul>
            <Rodape/>

        </div>
    );
}