import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async() => {
    let payload = {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    }
    console.log("payload :- ", payload)
    let url = `http://localhost:3002/newOrder`
    await axios.post(url, payload).then((res) => {
      console.log('success buying ', res)
    }).catch((err) => {
      console.error('error while buying :- ', err)
    }).finally(() => {
      generalContext.closeBuyWindow();  
    })
  };


  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
            <Link onClick={()=>handleBuyClick()} className="btn btn-blue">
              Buy
            </Link>
        
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>

    
  );
};

export default BuyActionWindow;