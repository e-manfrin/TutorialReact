
type Props = {
    banana: string;
    velha: number;
}


export const HeaderIngrid = ({ banana, velha }: Props) => {
    return(
        <div>
            <h1> Olá {banana} Minha idade é {velha} anos.</h1>
        </div>
        
    );
}


