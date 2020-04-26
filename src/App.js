import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Home } from './pages/home';
import {AboutUs} from './pages/aboutUs'; 
import {FAQ} from './pages/FAQ';


import {Profile} from './pages/profile';
import {Pulpo} from './pages/pulpo';
import {Sushi} from './pages/sushi';
import {Log} from './pages/login';
import {TipoUsuario} from './pages/tipoUsuario';
import {ProfileRest} from './pages/profileRest';
import {ProfileDel} from './pages/profileDel';
import {Log2} from './pages/login2';
import {Log3} from './pages/login3';
import {HomePirata} from './pages/homePirata';










import {Reservar} from './pages/Reservar';
import {Pedir} from './pages/Pedir';
import {ResMestizzo} from  './pages/ResMestizzo';

function App() {
  return (
    <React.Fragment><div className='letra'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/About'component={AboutUs}/> 
          <Route path='/FAQ' component={FAQ}/>
          
          
          <Route path='/TypUser/Log/Profile' component={Profile}/>
          <Route path='/Search+Result/Pulpo' component={Pulpo}/>
          <Route path='/Search+Result/Sushi' component={Sushi}/>
          <Route path='/TypUser/Log' component={Log}/>
          <Route path='/TypUser' component={TipoUsuario}/>
          <Route path='/Log2/Restaurant' component={ProfileRest}/>
          <Route path='/Log3/Delivery' component={ProfileDel}/>
          <Route path='/Log2' component={Log2}/>
          <Route path='/Log3' component={Log3}/>
          <Route path='/HomePage' component={HomePirata}/>







{/* Fin de trabajo Villar */ }
          <Route path='/Search+Result/Res/Mestizzo/Tabla+sushi'component={ResMestizzo}/>
          <Route path='/Reserve/Mestizzo' component={Reservar}/>
          <Route path='/Order14167605/Mestizzo' component={Pedir}/>












        </Switch>
      </BrowserRouter> </div>     
    </React.Fragment>
  );
}

export default App;