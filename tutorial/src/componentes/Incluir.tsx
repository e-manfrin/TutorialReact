import { useState, KeyboardEvent } from "react";

type Props = {
    adicionar: (novoNome: string) => void
};

export const Incluir = ({adicionar} : Props) => {

    const [add, setAdd] = useState<string>('');

    const finalizadoEscrever = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && add !== '') {
            adicionar(add);
            setAdd('');
        }
        /*console.log(e.code)*/
    }
    
    return(
        <div>
            <input
            type="text"
            placeholder="Adicione na lista"
            value={add}
            onChange={e => setAdd (e.target.value)}
            onKeyUp={finalizadoEscrever}
            />
            
        </div>
    );
}