import { Link } from "react-router-dom"
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputFatec from "../../components/inputFatec"

export default function Home() {
    return (
        <div>
            <p>Este Projeto foi criado por Leonardo Costa </p>
            
            <Link to="/contato">Contato</Link>
            <Link to="/tarefas">Tarefas</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}