import React from 'react';
import { Card, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>
               <Card className="bg-primary text-white">
               <Row xs={1} md={3} className="g-4">
             <div>
               <h3>
               PHONE SUPPORT
              
                 + 01 345 647 745
               </h3>
             </div>
           
              <div>
                 <h3>
                 Career
                </h3>
                <p>	
                  Job Openings
                  Application Form
                    CV Upload </p>
               </div>
               <div>
                   <h3>
                    Hospital </h3>
                   <p>House # 17,Road # 8,Dhanmondi R/A. Dhaka-1205	
                  </p>
               </div>
               </Row>
               <small style={{color:'black' }} className="text-center">Manir medicare hospital since@1991</small>
               </Card>
               
        </div>
    );
};

export default Footer;