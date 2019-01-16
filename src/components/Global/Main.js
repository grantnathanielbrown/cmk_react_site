import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About  from '../Pages/About';
import Footer from './Footer';

import Psychotherapy from '../Pages/Services/Psychotherapy';
import Pharmacology from '../Pages/Services/Pharmacology';
import MedicationManagement from '../Pages/Services/MedicationManagement';
import Consultation from '../Pages/Services/Consultation';
import GoogleApiWrapper from './MapContainer';

const Main = () => (
  <div>

    <main>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>          
          
          <Route exact path="/Psychotherapy" component={Psychotherapy}/>
          <Route exact path="/Pharmacology" component={Pharmacology}/>
          <Route exact path="/Medication-management" component={MedicationManagement}/>
          <Route exact path="/Consultation" component={Consultation}/>
        </Switch>
      </HashRouter>
    </main>
      <Footer></Footer>
        {/* <GoogleApiWrapper></GoogleApiWrapper> */}
    </div>
  )

export default Main