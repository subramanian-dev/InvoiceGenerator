import React, { createContext, useState } from "react";

export const PreviewContent = createContext();

export const ContentProvider = props => {
  const [title, setTitle] = useState("Invoice");
  const [state, setState] = useState(true);
  const [image,setImage] =useState(null);

  const [Bname, setBName] = useState(null);
  const [Bmail, setBMail] = useState(null);
  const [Baddress, setBadd] = useState(null);
  const [Bphone, setBphone] = useState(null);
  const [Bnumber, setBnumber] = useState(null);

  const [Cname, setCName] = useState(null);
  const [Cmail, setCMail] = useState(null);
  const [Caddress, setCadd] = useState(null);
  const [Cphone, setCphone] = useState(null);

  const [number, setNumber] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [terms, setTerms] = useState();

  const [price, setPricing] = useState([
    {
      itemDesp: "",
      rate: 0,
      Quantity: 0,
      amount: 0,
      addDet: ""
    }
  ]);

  const [total, setTotal] = useState(0);

  const info = {
    state: [state, setState],
    title: [title, setTitle],
    image:[image,setImage],
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
  };

  return (
    <PreviewContent.Provider value={info}>
      {props.children}
    </PreviewContent.Provider>
  );
};
