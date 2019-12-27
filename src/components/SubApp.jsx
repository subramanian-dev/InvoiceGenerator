import React, { useState, useEffect,useContext} from "react";

import "./SubApp.css";
import Header from "./Header.jsx";
import { PreviewContent } from "./PreviewContent.jsx";
import InvoiceEditor from "./InvoiceEditor.jsx";
import InvoicePreview from "./InvoicePreview.jsx";

function SubApp() {
  const [toggle, setToggle] = useState("Edit");
  //Not state
  const [Preview, setPreviewStyle] = useState({ cursor: "pointer" });
  const [Edit, setEditStyle] = useState({ cursor: "not-allowed" });
  const [disabled, setDisable] = useState(false);
  const {
    state: [state, setState],
    title: [title, setTitle],
    Bname: [Bname, setBName],
    Bmail: [Bmail, setBMail],
    Baddress: [Baddress, setBadd],
    Bphone: [Bphone, setBphone],
    Bnumber: [Bnumber, setBnumber],

    Cname: [Cname, setCName],
    Cmail: [Cmail, setCMail],
    Caddress: [Caddress, setCadd],
    Cphone: [Cphone, setCphone],

    number: [number, setNumber],
    startDate: [startDate, setStartDate],
    terms: [terms, setTerms]
  } = useContext(PreviewContent);
 // Not state

  useEffect(() => {
    if(title!==null && Bname!==null && Cname !==null && Baddress!==null && Caddress!==null && Bmail!==null && Cmail!==null && Bphone!==null && Cphone!==null && Bnumber!==null && number!==null && startDate!==null && terms!==null)
    setState(false);
  })

  const onToggle = toggleto => {
    setToggle(toggleto);
    setDisable(disabled => !disabled);
    if (toggleto === "Edit") {
      setEditStyle({ cursor: "not-allowed" });
      setPreviewStyle({ cursor: "pointer" });
    } else {
      setEditStyle({ cursor: "pointer" });
      setPreviewStyle({ cursor: "not-allowed" });
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="pl7 mb2">
        <button
          className="left-btn black"
          style={Preview}
          onClick={() => {
            onToggle("Preview");
          }}
          disabled={(disabled || state)}
        >
          Preview
        </button>
        <button
          className="right-btn black"
          style={Edit}
          onClick={() => {
            onToggle("Edit");
          }}
          disabled={!disabled}
        >
          Edit
        </button>
      </div>
        <div className="pa2 ml7">
          <h1>Rate</h1>
          <input type="number" className="pa2 w-10" />
        </div>
        {toggle === "Edit" ? <InvoiceEditor /> : <InvoicePreview />}
    </div>
  );
}

export default SubApp;
