import React, { useState } from 'react';
import MyButton from '../Utils/MyButton';
import Zoom from 'react-reveal/Zoom'
import { useMediaQuery } from "@material-ui/core";
const Pricing = () => {
    const isActive = useMediaQuery("(max-width:600px)");
    // const [prices , setPrices] = useState([100,150,250])
    // const [positions , setPositions] = useState(['Balcony' , 'Medium' , 'Star'])
    // const [desc, setDesc] = useState(['Lorem ipsum dolor, sit amet consectetur adipisicing elitRepudiandae officiis dicta blanditiis' ,
    //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repudiandae officiis dicta blanditiis quod ea optio' ,
    //     'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repudiandae officiis dicta blanditiis quod ea optio'])
    // const [linkto , setLinkto] = useState('https://google.com' , 'https://google.com' , 'https://google.com')

const mobchg = {
 marginLeft:"10px"
};
    const [state ] = useState({
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'] ,
        desc: ['Lorem ipsum dolor, sit amet consectetur adipisicing elitRepudiandae officiis dicta blanditiis ffafee hscga' ,
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repudiandae officiis dicta blanditiis quod ea optio',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Repudiandae officiis dicta blanditiis quod ea optio'],
        linkto: ['https://sales/b', 'https://google.com', 'https://google.com'],
        delay:[500,0,500]
    })
    const showBoxes = () =>
      state.prices.map((box, i) => (
        <Zoom key={i} delay={state.delay[i]}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>Rs{state.prices[i]}</span>
                <span>{state.positions[i]}</span>
              </div>
              <div className="pricing_description">{state.desc[i]}</div>
              <div className="pricing_buttons">
                {isActive ? (
                  <MyButton
                    text="Buy"
                    bck="#ffa800"
                    color="#ffffff"
                    link={state.linkto[i]}
                    className="purchaseButton"
                    style={mobchg}
                  />
                ) : (
                  <MyButton
                    text="purchase tickets"
                    bck="#ffa800"
                    color="#ffffff"
                    link={state.linkto[i]}
                  />
                )}
              </div>
            </div>
          </div>
        </Zoom>
      ));

    return (
        <div className="bck_black">
        <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    {showBoxes()}
        </div>
        </div>
      
        </div>
    );
};

export default Pricing;