import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Getappoinment = () => {

    const { appointId } = useParams();
    const [appointDetails, setappointDetails] = useState([])
    console.log(appointDetails)
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setappointDetails(data))
    }, [])
    const appoint = appointDetails?.find(x => x.id === appointId)

    console.log(appoint)
    return (
        <div className="">
            <Container>
                <Row>
                    <Col className="my-5">
                        <img src={appoint?.url} alt="" srcset="" />
                        <div className="text-center mx-auto">
                            <h2>Doctor name : {appoint?.name}</h2>
                            <p>Details : {appoint?.serviceDetails}</p>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}
export default Getappoinment;