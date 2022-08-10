
type Props = {
    nome: string;
    idade: number;
}

const Header = ({ nome, idade } : Props) => {
    return(
        <header>
            <h1>Olá! {nome} ,tudo bem? Tenho {idade} anos</h1>
        </header>
    );

}

export default Header;