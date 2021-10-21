import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';


const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    return (
        <div className="head"><h1 className="heading mb-5">our specialized doctors</h1>
        <div className="doctors">  
            {
                doctors.map(doctor=> <Doctor
                key={doctor.id}
                doctor={doctor}
                ></Doctor>)
            }
            
        </div></div>
    );
};

export default Doctors;