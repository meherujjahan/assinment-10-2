import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="">
            <Form className=" container ">
                <Row >
                    <h3 className="m-3"> Send Your Massege </h3>
                    <Col className="m-3 mx-auto">
                        <Form.Control className="m-5 w-50 mx-auto" placeholder="First name" />
                        <Form.Control className="m-5 w-50 mx-auto" placeholder="Last name" />

                        <Form.Control
                            className="m-5 w-50 mx-auto"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                        <Button classNam variant="success">Send Massage</Button>
                    </Col>

                </Row>
            </Form>
        </div >
    );
};

export default Contact;