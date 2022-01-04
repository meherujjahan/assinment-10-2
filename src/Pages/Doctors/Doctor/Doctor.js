import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Doctor.css"

const Doctor = ({ doctor }) => {
    const { id, name, url } = doctor;
    return (
        <div className="col-md-4 mb-5">
            <Card className="shadow-lg p-1 mb-5 border border-primary  bg-white rounded cards" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={url} className="image" />
                <Card.Body >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/getappoinment/ ${id}`}>
                        <Button variant="primary">Get Appoinment</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;