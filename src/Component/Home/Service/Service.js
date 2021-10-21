import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const{id,name,img,description}=service;
    return (
        
        <div className="service mt-5">
            
            <img className="img" src={img} alt=""/>
            <h3>{name}</h3>
            <h5 className="p-2">{description}</h5>
            <Link to={`/booking/${id}`}>
            <button className="button" >booking {name.toLowerCase()}</button>
            </Link>
            
        </div>
    );
};

export default Service;