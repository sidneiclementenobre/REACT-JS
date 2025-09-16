import { ListaTarefasItem } from "./ListaTarefasItem";

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
    const tarefas = [
        { id: 1, nome: 'Item 1'},
        { id: 2, nome: 'Item 2'},
        { id: 3, nome: 'Item 3'},
    
        
    ];
    return(
        <ul className={style.ListaTarefas}>
            {tarefas.map(Item => <ListaTarefasItem Key={Item.id} nome={Item.nome}/>)}
        </ul>
    );

};

export { ListaTarefas};