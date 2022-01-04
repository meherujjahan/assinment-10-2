import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, serviceName, url, serviceDetails, drname, courseFee } = service;
    return (
        <div className="col-md-4 mb-5">
            <Card className="shadow-lg p-1 mb-5 border border-primary  bg-white rounded w-100 h-100" /* style={{ width: '18rem' }} */>
                <Card.Img variant="top" src={url} className="image" />
                <Card.Body>
                    <Card.Title> <h3>{serviceName}</h3> </Card.Title>
                    <h3 style={{ fontSize: '18px', fontWeight: '750px', color: "#0D6EFD" }}> {drname}</h3>
                    <Card.Text className="service-details">
                        {serviceDetails}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Link to={`/booking/ ${id}`}>
                        <Button variant="primary">Book Service</Button>
                    </Link>
                    <Card.Title> <h4>Cost : {courseFee} </h4> </Card.Title>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;

