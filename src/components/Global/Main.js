import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About  from '../Pages/About';
import Footer from './Footer';

import Psychotherapy from '../Pages/Services/Psychotherapy';
import MedicationManagement from '../Pages/Services/MedicationManagement';

import ContactInformation from '../Pages/Contact/ContactInformation';


const Main = () => (
  <div>

    <main>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>          
          
          <Route exact path="/Psychotherapy" component={Psychotherapy}/>          
          <Route exact path="/Medication-management" component={MedicationManagement}/>

          <Route exact path="/Contact-information" component={ContactInformation}/>          
        </Switch>
      </HashRouter>
    </main>
      <Footer></Footer>
        {/* <GoogleApiWrapper></GoogleApiWrapper> */}
    </div>
  )

export default Main