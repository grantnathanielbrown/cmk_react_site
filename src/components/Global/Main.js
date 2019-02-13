import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import About  from '../Pages/About';
import Footer from './Footer';

import Psychotherapy from '../Pages/Services/Psychotherapy';
import MedicationManagement from '../Pages/Services/MedicationManagement';
import GeneticTesting from '../Pages/Services/GeneticTesting';

import Anxiety from '../Pages/Treatments/Anxiety';
import Depression from '../Pages/Treatments/Depression';
import SleepDisorders from '../Pages/Treatments/SleepDisorders';
import PTSD from '../Pages/Treatments/PTSD';
import GeriatricPsychiatry from '../Pages/Treatments/GeriatricPsychiatry';

import Policies from '../Pages/Policies';

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
          <Route exact path="/Genetic-testing" component={GeneticTesting}/>

          <Route exact path="/Anxiety" component={Anxiety}/>
          <Route exact path="/Depression" component={Depression}/>
          <Route exact path="/Sleep-disorders" component={SleepDisorders}/>
          <Route exact path="/PTSD" component={PTSD}/>
          <Route exact path="/Geriatric-psychiatry" component={GeriatricPsychiatry}/>

          <Route exact path="/Policies" component={Policies}/>

          <Route exact path="/Contact-information" component={ContactInformation}/>          
        </Switch>
      </HashRouter>
    </main>
      <Footer></Footer>
        {/* <GoogleApiWrapper></GoogleApiWrapper> */}
    </div>
  )

export default Main