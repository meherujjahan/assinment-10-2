import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = ({ Service }) => {
    const { serviceId } = useParams();
    const [singleservice, setSingleService] = useState([])
    console.log(singleservice)
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])
    const service = singleservice?.find(x => x.id === serviceId)

    console.log(service)
    return (
        <div className="">
            <Container>
                <Row>
                    <Col className="my-5 w-50" >
                        <img src={service?.url} alt="" srcset="" />
                        <div>
                            <h2>Service name : {service?.serviceName}</h2>
                            <p>Details : {service?.serviceDetails}</p>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Booking;