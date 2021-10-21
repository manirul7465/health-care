import React from 'react';
import './Doctor.css';


const Doctor = ({doctor}) => {
       const{name,img,Specialist,Degree,Serial}=doctor;
    return (
        <div className="doctor">
            
            <img className="img" src={img} alt=""/>
            <h3>name: {name}</h3>
            <h5>speciality: {Specialist}</h5>
            <h5>{Degree}</h5>
            <h5>serial: {Serial}</h5>
            
        </div>
    );
};

export default Doctor;