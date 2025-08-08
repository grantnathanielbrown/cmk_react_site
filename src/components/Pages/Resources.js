import React, { Component } from "react";
import documentIcon from "../Images/documenticon.png";
export default class Resources extends Component {
  render() {
    let documentTitles = [
      "Adult ADHD",
      "AUDIT",
      "Authorization",
      "Beck Anxiety Inventory",
      "Beck Depression Inventory",
      "Epworth Sleepiness Scale",
      "Geriatric Depression Scale",
      "MOCA",
      "Mood Disorder Questionnaire",
      "PTSD Checklist",
      "Test Your Thinking",
      "Thinking Errors",
      "Thought Record",
      "YBOC",
      "Young Mania",
    ];

    let documents = documentTitles.map((title, key) => {
      let path = `Documents/${title}.pdf`;
      return (
        <div key={key} className="generated-document">
          <a className="tired" href={path} download>
            <h6>{title}</h6>
            <img src={documentIcon} alt="document" />
          </a>
        </div>
      );
    });
    return (
      <div>
        <h1>Resources</h1>
        <div className="document-grid">{documents}</div>
      </div>
    );
  }
}
