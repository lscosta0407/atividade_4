import { Link } from "react-router-dom" // npm i react-router-dom

export default function Tarefas() {
    return (
        <>
            <h1>Tarefas</h1>
            <div>
                <hr>Tarefa 1</hr>
                <hr>Tarefa 2</hr>
                <hr>Tarefa 3</hr>
                <hr>Tarefa 4</hr>
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}