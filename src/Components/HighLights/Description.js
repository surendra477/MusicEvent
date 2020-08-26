import React from 'react';
import Fade from "react-reveal/Fade";
import {useMediaQuery} from "@material-ui/core"
const Description = () => {
  const isActive = useMediaQuery('(max-width:600px)')
    return (
      <Fade>
        <div className="highlight_wrapper">
          {isActive ? <h6>HighLights</h6> : <h2>HighLights</h2>}
          
          <div className="highlight_description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae officiis dicta blanditiis quod ea optio architecto ad
            commodi ut cumque accusantium et quae, consequatur atque minima sit
            porro magnam omnis nulla adipisci obcaecati esse. Animi nesciunt
            quisquam a illum enim repellendus excepturi sunt magnam ipsam minima
            voluptatibus, suscipit sequi facilis sed aperiam delectus, id fugit
            porro distinctio
          </div>
        </div>
      </Fade>
    );
};

export default Description;