import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2 className="text-primary">About Our Hospital</h2>
            <Container>
                <Row className="mb-5 my-5">
                    <div className="d-flex col-sm-6 col-lg-12 col-md-12">
                        <Col className="m-5 shadow-lg p-3 mb-5 bg-white rounded" >
                            <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields. Medicine, dentistry, pharmacy, midwifery, nursing, optometry, audiology, psychology, occupational therapy, physical therapy, athletic training, and other health professions are all part of health care. It includes work done in providing primary care, secondary care, and tertiary care, as well as in public health.

                                tively the use of medical services, the efficacy of treatments, and overall outcome (well-being, mortality rates).</p>
                        </Col>
                        <Col className="m-5"><img className="w-100" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80" alt="" srcset="" /></Col>
                    </div>
                </Row>


            </Container>
        </div >
    );
};

export default About;