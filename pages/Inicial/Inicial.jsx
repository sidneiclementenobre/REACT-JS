import { FormCriarTarefa } from "../../FormCriarTarefa";
import { ListaTarefas } from "../../ListaTarefas";
import style from './Inicial.module.css';

const Inicial = () => {
    return (
        <div className={style.Inicial}>
         <FormCriarTarefa/>
         <ListaTarefas/>
        </div>
    )
};

export { Inicial };
