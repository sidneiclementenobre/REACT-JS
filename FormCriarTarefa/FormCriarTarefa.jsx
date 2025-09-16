import { Botao, CampoTexto, TIPO_BOTAO } from "../../components";

import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
    return (
        <form className={style.FormCriarTarefa}>
            <CampoTexto/>
            <Botao texto= "+" />
        </form>
    );
};

export { FormCriarTarefa };