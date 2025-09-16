import { Route, Routes } from 'react-router-dom';

import { Inicial, SobreNos } from './components/pages';
import { LayoutPadrao } from './layouts/LayoutPadrao/LayoutPadrao';



const Router = () => {
    return(
        <Routes>
          <Route path="/"element={<LayoutPadrao/>}>
            <Route path="/"element={<Inicial/>}/>
            <Route path="/sobre-nos"element={<SobreNos/>}/>
          </Route>
        </Routes> 
    );
}; 

export { Router };