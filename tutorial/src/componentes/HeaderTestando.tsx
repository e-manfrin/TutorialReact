
type Props = {
    nome: string;
    niver: number;
} 


export const HeaderTestando = ({nome, niver} : Props) => {
    return(
        <div>
            <h1>Olá! {nome}, tudo bem? Tenha {niver} anos.</h1>   
        </div>    
    );
}