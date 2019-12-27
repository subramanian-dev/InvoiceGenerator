import React from "react";
import { useState, useContext, useEffect } from "react";
import { PreviewContent } from "./PreviewContent.jsx";
import uuid from "react-uuid";

const PricingTable = () => {
  let [tableCount, setTable] = useState(1);

  const {
    price: [price, setPricing],
    total: [total, setTotal]
  } = useContext(PreviewContent);
  const [Amount, setAmount] = useState();

  let t = 0;
  useEffect(() => {
    price.map(p => {
      t += p.amount;
    });
    setTotal(t);
  }, [Amount]);

  const priObj = {
    itemDesp: "",
    rate: 0,
    Quantity: 0,
    amount: 0,
    addDet: ""
  };
  const addRow = () => {
    setTable(++tableCount);
    price.push(priObj);
    console.log(price);
  };

  const del = i => {
    console.log(i);
    table.splice(i, 1);
    price.splice(i, 1);
    setPricing(price);
    console.log(table);
    setTable(--tableCount);
  };
  let table;
  const createTable = () => {
    table = [];
    for (let i = 0; i < tableCount; i++) {
      table.push(
        <tr key={i} className="v-top">
          <td className=" bb b--dark-gray pb2 pt2">
            <button
              className="ba bg-dark-gray pa2 white"
              onClick={() => del(i)}
            >
              x
            </button>
          </td>
          <td className=" bb b--dark-gray pb2 pt2">
            <input
              type="text"
              className="pa2"
              placeholder="Item Description"
              onChange={e => {
                price[i].itemDesp = e.target.value;
                setPricing(price);
              }}
            />
            <br />
            <textarea
              type="text"
              className="pa2 h3 mt1 w-100"
              placeholder="Additional Details"
              onChange={e => {
                price[i].addDet = e.target.value;
                setPricing(price);
              }}
            />
          </td>
          <td className="tr bb b--dark-gray pb2 pt2">
            <input
              type="text"
              className="pa2 w-40 tr rate"
              placeholder="0.00"
              onChange={e => {
                setAmount((e.target.value * price[i].Quantity).toFixed(2));
                price[i].rate = e.target.value;
                setPricing(price);
              }}
            />
          </td>
          <td className="tr bb b--dark-gray pb2 pt2">
            <input
              type="text"
              className="pa2 w-40 tr quantity"
              placeholder="0"
              onChange={e => {
                setAmount((e.target.value * price[i].rate).toFixed(2));
                price[i].Quantity = e.target.value;
                price[i].amount = price[i].Quantity * price[i].rate;
                setPricing(price);
              }}
            />
          </td>
          <td className="tr bb b--dark-gray pb2 pt2">
            ₹{price[i].Quantity * price[i].rate}
          </td>
          <td className="tc bb b--dark-gray pb2 pt2">
            <input type="checkbox" className="pa2" />
          </td>
        </tr>
      );
    }
    return table;
  };
  return (
    <div>
      <table className="collapse w-100">
        <thead className="bg-dark-gray">
          <tr>
            <th></th>
            <th className="tl white pa3">Description</th>
            <th className="tr white pa3">Rate</th>
            <th className="tr white pa3">Qty </th>
            <th className="tr white pa3">Amount</th>
            <th className="tr white pa3">Tax</th>
          </tr>
        </thead>
        <tbody>{createTable()}</tbody>
      </table>
      <button
        className="ba bg-dark-gray pa2 br1 white mb2"
        onClick={() => {
          addRow();
        }}
      >
        +
      </button>
      <hr />
      {/* calculation */}
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
  );
};

export default PricingTable;
