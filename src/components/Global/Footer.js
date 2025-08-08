import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="prefooter">
          Christen M. Kerr, M.D. P.C.
          <br />
          <p>
            This website is for informational purposes only, and does not imply
            a doctor-patient relationship.
          </p>
        </div>
        <div className="footer">
          MCLEAN, VA
          <a href="tel:703-734-7961"> 703-734-7961 </a>
          COPYRIGHT 2025 CHRISTEN M. KERR | ALL RIGHTS RESERVED
        </div>
      </div>
    );
  }
}
