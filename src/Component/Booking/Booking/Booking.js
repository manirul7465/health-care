import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Booking = () => {
    const{serviceId}=useParams();
    const [details, setDetails] = useState({});
    
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data =>{
                const eachDetails = data?.find(service => service.id == serviceId)
                setDetails(eachDetails)
            })
            
    },[serviceId]);
     
   

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
               
                 <Col>
                   <Card>
                     <Card.Img variant="top" src={details?.img} />
                     <Card.Body>
                       <Card.Title>Service: {details?.name}</Card.Title>
                       <Card.Text>
                         Details:{details?.description}
                       </Card.Text>
                       <Card.Title><h6>Call now: {details?.call}</h6></Card.Title>
                     </Card.Body>
                   </Card>
                 </Col>
               </Row>
        </div>
    );
};

export default Booking;









