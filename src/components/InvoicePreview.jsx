import React, { useContext } from "react";
import "./InvoicePreview.css";
import { PreviewContent } from "./PreviewContent.jsx";
import ImageHolder from "./ImageHolder.jsx";

const InvoicePreview = () => {
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
    terms: [terms, setTerms],
    price: [price, setPricing],
    total: [total, setTotal]
  } = useContext(PreviewContent);

  const createTablePreview = () => {
    let tableBody = [];
    price.map((p, i) => {
      tableBody.push(
        <tr key={i} className="v-top">
          <td className="pb2 pt2">
            <span className="pa2">{p.itemDesp}</span> <br />
            <span className="pa2 h3 mt1">{p.addDet}</span>
          </td>
          <td className="tr pb2 pt2">
            <span className="pa2 w-40 tr">{p.rate}</span>
          </td>
          <td className="tr pb2 pt2">
            <span className="pa2 w-40 tr">{p.Quantity}</span>
          </td>
          <td className="tr pb2 pt2">{p.amount}</td>
        </tr>
      );
    });
    return tableBody;
  };

  return (
    <div className="InvoicePreview  w-70 center flex-wrap" id="Print">
      <div className="bg-dark-gray h1"></div>
      {/* title image     */}
      <div className="pa4">
        <div className="flex justify-between">
          <div className=" w-60 pa2 dib">
            <span className=" w-100 pa2 f3 black">{title}</span>
          </div>

          <ImageHolder/>
        </div>
        {/* from to */}
        <div className="flex justify-between">
          <div className="w-50 pa2">
            <h2>From</h2>
            <div className="dib w-third pa2">
              <h3>Name</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Bname}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Email</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Bmail}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Address</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Baddress}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Phone</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Bphone}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Business Number</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Bnumber}</span>
            </div>
          </div>
          <div className="w-50 pa2">
            <h2>To</h2>
            <div className="dib w-third pa2">
              <h3>Name</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Cname}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Email</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Cmail}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Address</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Caddress}</span>
            </div>
            <div className="dib w-third pa2">
              <h3>Phone</h3>
            </div>
            <div className="dib w-two-thirds pa2">
              <span className="pa2">{Cphone}</span>
            </div>
          </div>
        </div>
        <hr className="moon-gray" />
        <div>
          <div className="dib w-10 pa2 mr5">
            <h3>Invoice #:</h3>
          </div>
          <div className="dib w-70 pa2">
            <span className="pa2">{number}</span>
          </div>
          <div className="dib w-10 pa2 mr5">
            <h3>Date</h3>
          </div>
          <div className="dib w-70 pa2">
            <span className="pa2">{startDate.toString().substring(4, 15)}</span>
          </div>
          <div className="dib w-10 pa2 mr5 v-top">
            <h3 className="v-top">Terms</h3>
          </div>
          <div className="dib w-70 pa2">
            <span className="pa2">{terms}</span>
          </div>
        </div>

        {/* table */}
        {total !== 0 ? (
          <div>
            <table className="collapse w-100">
              <thead className="bg-dark-gray">
                <tr>
                  <th className="tl white pa3">Description</th>
                  <th className="tr white pa3">Rate</th>
                  <th className="tr white pa3">Qty </th>
                  <th className="tr white pa3">Amount</th>
                </tr>
              </thead>
              <tbody>{createTablePreview()}</tbody>
            </table>

            <div className="w-100 h4 relative">
              <table className="absolute right-0">
                <tr>
                  <td className="pa1">Subtotal</td>
                  <td>₹{total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="pa1">Tax (0%)</td>
                  <td>₹0.00</td>
                </tr>
                <tr>
                  <td className="pa1">Total</td>
                  <td>₹{total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="pa1">Balance Due</td>
                  <td>₹{total.toFixed(2)}</td>
                </tr>
              </table>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default InvoicePreview;
