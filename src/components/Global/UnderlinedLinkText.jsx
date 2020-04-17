import React, { Component } from 'react'

export default class UnderlinedLinkText extends Component {
    createLine(e) {
        console.log("line created");
        let targetedNav = e.target;
        console.log(targetedNav.innerHTML.length);
        if (targetedNav.innerHTML.length > 0 ) {
          let underline = document.createElement("hr");
          underline.classList.add("slide-in");
          targetedNav.appendChild(underline);
    
        }
        
    
      }
    removeLine(e) {
        let targetedNav = e.target;
        let p = targetedNav.childNodes[0];    
        console.log(p);
    
        targetedNav.removeChild(targetedNav.childNodes[1]);
      }
    render() {
        let element;
        if (this.props.animationAllowed  === true) {
            element = <p onMouseOver={this.createLine} onMouseOut={this.removeLine}>{this.props.linkName}</p>  
        } else {
            element = <p>{this.props.linkName}</p>
        }
        return (
        <div>
            {element}
        </div>
            
        )
    }
}
