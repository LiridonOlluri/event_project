import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.210058360804!2d21.123621976143838!3d42.66637474054181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1604748199828!5m2!1sen!2s" 
             width="100%"
             height="500px"
             frameBorder="0" 
             allowFullscreen="" 
             aria-hidden="false" 
            tabindex="0"></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;


