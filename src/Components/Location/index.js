import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.769478745744!2d72.89529276706953!3d19.07286135070166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89d2156362f%3A0x74a51f6533407eb9!2sShivkrupa%20Society!5e1!3m2!1sen!2sin!4v1598118256845!5m2!1sen!2sin" width="100%" height="500px" allowFullScreen >

            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
       
    );
};

export default Location;