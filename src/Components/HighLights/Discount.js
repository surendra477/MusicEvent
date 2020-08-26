import React, { useState, useEffect } from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../Utils/MyButton"
const Discount = () => {

    const [discountState , setDiscountStart] = useState(0)
    const [EnddiscountState] = useState(30);
    function porcentage() {
        if (discountState < EnddiscountState) {
          setDiscountStart(discountState + 1);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            porcentage()
        },30)
    })
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => porcentage()}>
            <div className="discount_porcentage">
              <span>{discountState}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets Before 28th AUGUST </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              
              </p>
                <MyButton 
                  text="purchase tickets"
                  bck="#ffa800"
                  color="#ffffff"
                  link="http://goggle.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
};

export default Discount;