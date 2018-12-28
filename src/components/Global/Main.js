import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About  from '../Pages/About';
import Treatments  from '../Pages/Treatments';
import Policies  from '../Pages/Policies';
import Contact  from '../Pages/Contact';
import Footer from './Footer';

import Psychotherapy from '../Pages/Services/Psychotherapy';
import Pharmacology from '../Pages/Services/Pharmacology';
import GoogleApiWrapper from './MapContainer';

const Main = () => (
  <div>

    <main>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/treatments" component={Treatments}/>
          <Route exact path="/policies" component={Policies}/>
          <Route exact path="/contact" component={Contact}/>

          <Route exact path="/Psychotherapy" component={Psychotherapy}/>
          <Route exact path="/Pharmacology" component={Pharmacology}/>
        </Switch>
      </HashRouter>
    </main>
      <Footer></Footer>
        {/* <GoogleApiWrapper></GoogleApiWrapper> */}
    </div>
  )

export default Main