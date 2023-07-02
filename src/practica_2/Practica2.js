import { Body } from "./Components/Body/Body";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Title } from "./Components/Title/Title";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};
 
export default function Practica2 () {
    return (
        <div> 
            <Header Title={site.pageTitle}/>
            <Main Body={site.pageBody} />
        </div>
    );
}