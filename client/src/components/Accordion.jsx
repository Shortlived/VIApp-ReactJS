import React, { useState, useRef } from "react";
import Chart from "./Chart"
import Chevron from "./Chevron";

import "../styles.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);
  const table = "table";
  const info = "info";
  const logo_text = "company logo"

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.tracker}: {props.name}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#665"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <table id={table}>
          <tr>
            <td><div class={info}><img src={props.logo_url} alt={logo_text}/>
              <br/>Industry: {props.industry} 
              <br/> Sector: {props.sector}
              <br/> Country: {props.country}
              <br/> Address: {props.address}
              <br/> State: {props.state}
              <br/> Phone: {props.phone}
              <br/> Website: {props.website}
              <br/> Sector: {props.sector}
            </div></td>

            <td><Chart /></td>
          </tr>
        </table>
        <div><p><b>{props.description}</b></p></div>
      </div>
    </div>
  );
}

export default Accordion;