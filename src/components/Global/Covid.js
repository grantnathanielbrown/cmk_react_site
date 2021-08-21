import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Covid extends Component {
    render() {
        return (
            <div className="covid-container">
                
                <p className="covid-content">
                    <h1>Covid-19 Update</h1>
                    Your health and safety are my first concern. In-person appointments are available to fully vaccinated patients and provide the highest quality experience. I recommend all initial consultations be done in-person, unless you are not fully vaccinated. Before initiating an in-person appointment, please review my Covid-19 guidelines below, and my policies by clicking <Link to="/Policies">here.</Link>

                    <br/><br/>
                    

                    <p>
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#guidelines" aria-expanded="false" aria-controls="guidelines">
                            Covid-19 Guidelines
                        </button>
                        </p>
                        <div className="collapse" id="guidelines">
                        <div className="card card-body">


                            Please understand that by coming to the office, you are assuming the risk of exposure to the coronavirus
                             (or other public health risk).
                            <br/><br/>
                            This risk may increase if you travel by public transportation, cab, or ride sharing service.
                            <br/><br/>
                            Do not come into the office if:
                            <br/><br/>
                            1.  You have symptoms of Covid such as cough, shortness of breath, fever, nausea, headache or sore throat.
                            <br/><br/>
                            2.  You have tested positive for Covid-19 in the last 14 days.
                            <br/><br/>
                            3.  You have been exposed to someone with symptoms of Covid-19 or who has tested positive for Covid-19 in the last 14 days.
                            You will not be charged a late cancellation fee if you are unable to come to your appointment for these reasons.
                            
                            <br/><br/>
                            4. In compliance with CDC guidelines, please wear face coverings when you are in the building including in the foyer, elevator, waiting room, and in my office for appointments. Masks are available if you need one. Please practice social distancing of 6 feet from other patients if they are in the waiting room.  
                            <br/><br/>
                            5. If you have tested positive for the coronavirus, I may be required to notify local health authorities that you have been in the office.
                            If I have to report this, I will only provide the minimum information necessary 
                            for their data collection and will not go into any details about the reason(s) for our visits.  
                            <br/><br/>
                            Thank you for your attention to these guidelines.  Your safety is my highest priority.  Christen Kerr MD, PC


                        </div>
                        </div>

                        <br/>

                    If you are not fully vaccinated, or would prefer to do your appointment via videoconferencing, notify me in advance, 
                    then go to <a href="https://doxy.me/DrKerr">doxy.me/DrKerr</a>. The Doxy.me site requires no account, is free of charge and is available on Desktop, Laptop, Tablet and Smartphone. Please test your microphone, camera and internet connection prior to your appointment and be in the virtual waiting room 5 minutes prior to your appointment time. If you have any problems with setup, please let me know so we do not spend your appointment time troubleshooting technical issues.
                    <br/><br/>
                    Before you initiate a video conference appointment, please review my informed consent
                    statement.
                    <br/><br/>
                    <p>
                        <button id="about-button" className="btn btn-primary button-triad" type="button" data-toggle="collapse" data-target="#consent" aria-expanded="false" aria-controls="consent">
                            Informed Consent For Videoconferencing
                        </button>
                    </p>
                    <div className="collapse" id="consent">
                        <div className="consent-text card card-body">
                        <h1>
                            Informed consent for appointments via video conference
                        </h1>
                        <br/><br/>
                        At the start of your appointment, please let me know your location.
                        <br/><br/>
                        Prescriptions will be filled via telephone. Please provide a preferred pharmacy telephone number. Alternatively, I can mail prescription slips to your address.
                        <br/><br/>
                        To schedule appointments or to contact me with routine questions between appointments, please call my office at 703-734-7961.
                        <br/><br/>
                        Refer to the "Resources" link on this website for forms and questionnaires.
                        <br/><br/>
                        I use a secure encrypted platform for videoconferencing but all technologies involve some risk to your privacy.
                        <br/><br/>
                        Your medical records remain secure in my possession. I take care not to release protected health information without your written consent, except in situations where the patient or others are at risk of injury or under certain court orders.
                        <br/><br/>
                        In case of emergency, please go to the nearest emergency room.. Alternatively, you may page me by following the steps below.
                        1. Dial 301-901-2170.
                        2. Dial your own telephone number.
                        3. Press # and hang up.
                        If you page me, please leave a message at my office at 703-734-7961.
                        <br/><br/>
                        In the case of a technical failure during a video conference, please call me at 703-867-4710 or use the instructions above to page me.
                        <br/><br/>
                        If you would like for me to collaborate with your primary care physician or other specialists or caregivers, please notify me and print out an authorization for release of information under the policies link on this website and return it to me.
                        <br/><br/>
                        I do not participate with any insurance companies. Payment should be made directly to me at time of service by mailed check or credit card,
                        The statement will be provided to you by mail. You may present that to your insurance company for reimbursement. Some fees are listed below:
                        <br/><br/>
                        Diagnostic evaluation: $500
                        <br/><br/>
                        45 minute follow-up visit: $270
                        <br/><br/>
                        Completion of forms: $50
                        <br/><br/>
                        A fee of $270 is charged for missed appointments unless they’re canceled or rescheduled at least 24 hours prior. Fees are subject to a 2% increase every January.
                        <br/><br/>
                        If you feel that treatment outside the office is not meeting your needs or if I feel that your condition is not appropriate for this mode of treatment, a referral to another practitioner can be made.
                        </div>
                    
                    </div>
                    
                    <br/>
                    
                        
                        Welcome to my practice. I hope this information provides guidelines for your therapy experience. If you have questions, please bring them to my attention. I look forward to taking this journey together.
                    <br/><br/>
                    ~ Christen M. Kerr, M.D. P.C.
                </p>
            </div>
        )
    }
}
