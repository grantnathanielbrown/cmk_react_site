import React, { Component } from 'react';
import documentIcon from '/Users/grant/Desktop/cmk_react_site/src/components/Images/documenticon.png';
export default class Resources extends Component {
    render() {
        let documentTitles = ["Authorization", "Beck Depression Inventory", "Beck Anxiety Inventory",
        "PTSD Checklist", "Mood Disorder Questionnaire", 
        "Young Mania", "Adult ADHD", "MAST", "MOCA", "Test Your Thinking", 
        "Thought Record", "Thinking Errors"];
        
        let documents = documentTitles.map( (title, key) => {
            let path = `Documents/${title}.pdf`;
            return (
                
                <div key={key} className="generated-document">

                    <a className="tired" href={path} download>                        
                        <h6>{title}</h6>
                        <img src={documentIcon} alt="document"/>
                    </a>
                </div>
              )
        })
        return (
            <div>
                <h1>Resources</h1>
                <div className="document-grid">
                    {documents}
                </div>               
            </div>
        )
    }
}
