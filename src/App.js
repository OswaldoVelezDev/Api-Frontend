import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from './components/ui/Header';
import { DirectoresView } from './components/directores/DirectoresView';
import { MediaView } from './components/media/MediaView';
import { GenerosView } from './components/generos/GenerosView';
import { TiposView } from './components/tipos/TiposView';
import { ProductorasView } from './components/productoras/ProductorasView';

const App = () => {
  return <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={ MediaView } />
            <Route exact path='/productoras' component={ ProductorasView }/>
            <Route exact path='/generos' component={ GenerosView } />
            <Route exact path='/directores' component={ DirectoresView }/>
            <Route exact path='/tipos' component={ TiposView } />
            <Redirect to='/' />
        </Switch>
  </Router>
  
}

export {
    App,
}