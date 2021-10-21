import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%'}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VG-AibL9HLAnOoeHIBerlyTGOEN6FG8BTWa_r_G245TeiahW&s"} alt=""/>
            <Link to="/">
            <Button variant="warning" size="m">
             back to home
            </Button>
            </Link>
        </div>
    );
};

export default NotFound;