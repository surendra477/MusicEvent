import React, { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";
const TimeUntil = () => {
  const [deadline] = useState("Dec,16,2020");
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const getTimeUntil = (deadline) => {
    const Time = Date.parse(deadline) - Date.parse(new Date());
    if (Time < 0) {
      console.log("Time passed");
    } else {
      const seconds = Math.floor((Time / 1000) % 60);
      const minutes = Math.floor((Time / 1000 / 60) % 60);
      const hours = Math.floor((Time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(Time / (1000 * 60 * 60 * 24));
      // console.log(days);
      // console.log(hours);
      // console.log(minutes);
      // console.log(seconds);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);
  });
  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event start in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{days}</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{hours}</div>
            <div className="countdown_tag">hrs</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{minutes}</div>
            <div className="countdown_tag">mins</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{seconds}</div>
            <div className="countdown_tag">secs</div>
          </div>
        </div>
      </div>
      
     
    </Slide>
  );
};

export default TimeUntil;
