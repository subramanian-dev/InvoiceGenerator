import React, { useState, useContext } from "react";
import "./InvoiceEditor.css";
import DatePicker from "react-datepicker";
import PricingTable from "./PricingTable.jsx";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { PreviewContent } from "./PreviewContent.jsx";
import Error from "./Error.jsx";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import ImageHolder from "./ImageHolder.jsx";

const InvoiceEditor = () => {
  const {
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

  //regex
  const rname = /^[a-zA-Z]+((['. ][a-zA-Z ])?[a-zA-Z]*)*$/;
  // const rmail =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  const rmail = /^$|^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  const rphno = /(?<!\d)\d{10}(?!\d)/;

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div className="InvoiceEditor w-70 center">
      <div className="bg-dark-gray h1"></div>
      {/* title image     */}
      <div className="pa4">
        <div className="flex justify-between">
          <div className=" w-60 pa2 dib">
            <input
              type="text"
              className=" w-100 pa2 f3 black"
              id="invoice-title"
              name="invoice-title" 
              autoComplete="off"
              placeholder="Invoice"
              onChange={e => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <ImageHolder/>
        </div>
        {/* from to */}
        <div className="flex justify-between">
          <div className="w-50 pa2">
            <h2>From</h2>
            <div className="dib w-third pa2">
              <h3>Name <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="Business Name"
                onChange={e => {
                  setBName(e.target.value);
                }}
                value={Bname}
              />
            </div>
                {(!rname.test(Bname) && Bname!==null) ? <Error type="name" /> : null}
            <div className="dib w-third pa2">
              <h3>Email <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="name@business.com"
                onChange={e => setBMail(e.target.value)}
                value={Bmail}
              />
            </div>
             {(!rmail.test(Bmail) && Bmail !== null || Bmail==="") ? <Error type="email" /> : null}
            <div className="dib w-third pa2">
              <h3>Address <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="Street"
                onChange={e => setBadd(e.target.value)}
                value={Baddress}
              />
            </div>
            <div className="dib w-third pa2">
              <h3>Phone <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="(123) 456 789"
                onChange={e => setBphone(e.target.value)}
                value={Bphone}
              />
            </div>
              {(!rphno.test(Bphone)&& Bphone !== null || Bphone==="") ? <Error type="phone number" /> : null}
            <div className="dib w-third pa2">
              <h3>Business Number <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="E.g. 123-45-6789"
                onChange={e => setBnumber(e.target.value)}
                value={Bnumber}
              />
            </div>
              {(!rphno.test(Bnumber)&& Bnumber !== null || Bnumber==="") ? <Error type="business number"/> : null}
          </div>
          <div className="w-50 pa2">
            <h2>To</h2>
            <div className="dib w-third pa2">
              <h3>Name <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="Client Name"
                onChange={e => setCName(e.target.value)}
                value={Cname}
              />
            </div>
              {(!rname.test(Cname)&& Cname !== null) ? <Error type="name" /> : null}
            <div className="dib w-third pa2">
              <h3>Email <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="name@business.com"
                onChange={e => setCMail(e.target.value)}
                value={Cmail}
              />
            </div>
              {(!rmail.test(Cmail)&& Cmail !== null || Cmail==="") ? <Error type="email" /> : null}
            <div className="dib w-third pa2">
              <h3>Address <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="Street"
                onChange={e => setCadd(e.target.value)}
                value={Caddress}
              />
            </div>
            <div className="dib w-third pa2">
              <h3>Phone <sup>*</sup> </h3>
            </div>
            <div className="dib w-thirds pa2">
              <input
                type="text"
                className="pa2"
                placeholder="(123) 456 789"
                onChange={e => setCphone(e.target.value)}
                value={Cphone}
              />
            </div>
              {(!rphno.test(Cphone)&& Cphone !== null || Cphone==="") ? <Error type="phone number"/> : null}
          </div>
        </div>
        {/* new line */}
        <hr className="moon-gray" />
        <div>
          <div className="dib w-10 pa2 mr5">
            <h3>Number <sup>*</sup> </h3>
          </div>
          <div className="dib w-70 pa2">
            <input
              type="text"
              className="pa2"
              placeholder="INV0000"
              onChange={e => setNumber(e.target.value)} 
              value={number}
            />
          </div>
          <div className="dib w-10 pa2 mr5">
            <h3>Date</h3>
          </div>
          <div className="dib w-70 pa2">
            <DatePicker
              className="pa2"
              selected={startDate}
              onChange={date => {
                setStartDate(date);
              }}
              value={startDate}
            />
          </div>
          <div className="dib w-10 pa2 mr5 v-top">
            <h3 className="v-top">Terms</h3>
          </div>
          <div className="dib w-70 pa2">
            <Dropdown
              className="w-50 pr3"
              options={options}
              value={defaultOption}
              placeholder="Select an option"
              onChange={e => setTerms(e.value)}
            />
          </div>
        </div>
        {/* table cal */}
        <PricingTable />
        {/* notes */}

        <h3 className="db">Notes</h3>
        <textarea
          className="h4 w-100 "
          placeholder="Notes - any relevant information not covered, additional terms and conditions"
          type="text"
        />
      </div>
    </div>
  );
};

export default InvoiceEditor;
