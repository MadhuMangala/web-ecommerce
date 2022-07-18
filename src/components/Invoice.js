import React, { useState, useEffect } from "react";
import axios from "axios";

const Invoice = () => {
  //=============================
  // state variables declarations
  //==============================
  const [invoiceinfo, setInvoiceinfo] = useState([]);
  const [totalBill, setTotalBill] = useState("");

  //==============================
  //section for billing the invoice
  //===============================
  const invoicedata = () => {
    const cartid = localStorage.getItem("CART-ID");
    axios({
      url: `https://api.chec.io/v1/carts/${cartid}`,
      headers: {
        "X-Authorization": "pk_185066f1f96affca255ca48cd4a64803a4b791d6d0d5b",
      },
    })
      .then((res) => {
        console.log(" responce from the invoice", res);
        console.log(res.data.line_items);
        setInvoiceinfo(res.data.line_items);
        setTotalBill(res.data.subtotal.formatted_with_symbol);
      })
      .catch((err) => {
        console.log("errorm fom the invoice", err);
      });
  };
  //========================================
  //section for billing the invoice ends here
  //=========================================
  useEffect(() => {
    invoicedata();
  }, []);
  return (
    <div>
      <div className="backtoproduct d-flex">
        <h2 className="back">Invoice-Report</h2>
        <a href="/Products " className="backbutton">
          <button className="btn btn-secondary ">Back</button>
        </a>
      </div>
      <div className="invoicebill-bill"></div>
      <div className="invoicebill shadow-lg">
        <h2 className="heading-logo">WebTech</h2>
        <hr className="horizontal-row"></hr>
        <div className="addreess d-flex">
          <div className="billto shadow-sm">
            <pre>
              <h4>Bill to:WebTech</h4>

              <h6>addreess:</h6>
              <p>Country:XXXXXXX</p>
              <p>City:XXXXXXX</p>
              <p>Code:XXXXXXX</p>
            </pre>
          </div>
          <div className="shipto shadow-sm">
            <pre>
              <h4>Invoice Date:#</h4>
              <p>XXXXXXX</p>
              <h4>Invoice Due Date:#</h4>
              <p>XXXXXXX</p>
            </pre>
          </div>
        </div>
        <hr className="horizontal-row"></hr>
        <div className="items-list shadow-sm">
          <table class="table table-hover">
            <thead>
              <tr className="bg-info">
                <th classname="coldel" scope="col">
                  items
                </th>
                <th classname="col" scope="col">
                  Prd-image
                </th>
                <th classname="col" scope="col">
                  Product-Name
                </th>

                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoiceinfo.length >= 0
                ? invoiceinfo.map((Element, index) => {
                    // console.log("element data for checking", Element);
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <img src={Element.image.url} className="image-sec" />
                        </td>
                        <td>{Element.name}</td>
                        <td>{Element.quantity}</td>
                        <td>{Element.price.formatted_with_symbol}</td>
                      </tr>
                    );
                  })
                : null}

              {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <hr className="horizontal-row"></hr>
        <div className="tottal-billsection d-flex">
          <div className="note-section">
            <pre>
              <p>
                <span>Note:</span>feel free to contact for the product enquiry
              </p>
              <p>happy shopping!</p>
            </pre>
          </div>
          <div className="billsection shadow-lg">Total-Bill:{totalBill}</div>
        </div>
        <hr className="horizontal-row "></hr>
      </div>
    </div>
  );
};

export default Invoice;
