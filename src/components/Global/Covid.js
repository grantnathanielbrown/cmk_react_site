import React, { Component } from 'react';

export default class Covid extends Component {
    render() {
        return (
            <div className="covid-container">
                
                <p className="covid-content">
                    <h1>COVID-19 Update</h1>
                    During the COVID-19 pandemic I am committed to protecting your continuity of care and providing care in the safest possible environment. To achieve these goals, I am recommending treatment be delivered via telephone appointments and video conferences.  I will try to be as flexible as possible in order to minimize any disruption of your care.
                    <br/><br/>
                
                    To do your appointment via telephone please let me know prior to your appointment and call 
                    me at <a href="tel:+1-703-867-4710">703-867-4710</a> at your scheduled appointment time.
                    <br/><br/>
                    If you would prefer to do your appointment via videoconferencing, notify me in advance, 
                    then go to <a href="https://doxy.me/DrKerr">doxy.me/DrKerr</a>. <a href="https://doxy.me">Doxy.me</a> requires no account, is free of charge and is available on Desktop, Laptop, Tablet and Smartphone. Please test your microphone, camera and internet connection prior to your appointment and be in the virtual waiting room 5 minutes prior to your appointment time. If you have any problems with setup please let me know so we do not spend your appointment time troubleshooting technical issues.
                    <br/><br/>
                    Before you initiate a telephone or video conference appointment, please review my informed consent
                    statement.
                    <br/><br/>
                    <p>
                        <button id="about-button" className="btn btn-primary button-triad" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Informed Consent
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="consent-text card card-body">
                        <h1>
                            Informed consent for appointments via telephone or video conference
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
                        3.Press # and hang up.
                        If you page me, please leave a message at my office at 703-734-7961.
                        <br/><br/>
                        In the case of a technical failure during a video conference, please call me at 703-867-4710 or use the instructions above to page me.
                        <br/><br/>
                        If you would like for me to collaborate with your primary care physician or other specialists or caregivers, please notify me and print out an authorization for release of information under the policies link on this website and return it to me.
                        <br/><br/>
                        I do not participate with any insurance companies. Payment should be made directly to me at time of service by check by mail or by credit card.
                        The statement will be provided to you by mail. You may present that to your insurance company for reimbursement. Some fees are listed below:
                        <br/><br/>
                        Diagnostic evaluation: $450
                        45 minute follow up visit: $260 Completion of forms: $50
                        <br/><br/>
                        A fee of $260 is charge for missed appointments unless they’re canceled or rescheduled at least 24 hours prior. These are subject to a 2% increase every January.
                        <br/><br/>
                        If you feel that treatment outside the office is not meeting your needs or if I feel that your condition is not appropriate for this mode of treatment, a referral to another practitioner can be made.
                        </div>
                    
                    </div> 
                    <br/>
                    Thank you for your patience during this transition.  Best wishes for your safety and good health,
                    <br/><br/>
                    ~ Christen M. Kerr, M.D. P.C.
                </p>
            </div>
        )
    }
}
