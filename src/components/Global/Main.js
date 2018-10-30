import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About  from '../Pages/About';
import Services  from '../Pages/Services';
import Treatments  from '../Pages/Treatments';
import Policies  from '../Pages/Policies';
import Contact  from '../Pages/Contact';

const Main = () => (
    <main>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/treatments" component={Treatments}/>
          <Route exact path="/policies" component={Policies}/>
          <Route exact path="/contact" component={Contact}/>
          

        </Switch>
      </HashRouter>
    </main>
  )

export default Main