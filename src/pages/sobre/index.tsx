import { Link } from "react-router-dom" // npm i react-router-dom

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <div>
                Meu nome é Leonardo, sou desenvolvedor, natural de Osasco-SP, atualmente resido em Indaiatuba.
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}