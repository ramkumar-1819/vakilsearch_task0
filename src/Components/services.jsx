import React, { Component } from 'react';
import {Container,Row,Col,Tabs,Tab,Nav,Card,Accordion} from 'react-bootstrap';

export default function Services(){
    //list_details - hold service details
    const list_details=[{eventName:"register",details:[{name:"Register Your Bussiness",amount:"$30"},{name:"Identify Your Bussiness",amount:"$50"},{name:"Register Your Bussiness",amount:"$20"},{name:"Identify Your Bussiness",amount:"$80"}]},
    {eventName:"license",details:[{name:"Get Your Property",amount:"$30"},{name:"Get Your Property",amount:"$50"},{name:"Get Your Property",amount:"$20"},{name:"Get Your Property",amount:"$80"}]},
    {eventName:"property",details:[{name:"Get Licensed Property",amount:"$30"},{name:"Get Licensed Property",amount:"$50"},{name:"Get Licensed Property",amount:"$20"},{name:"Get Licensed Property ",amount:"$80"}]},
    {eventName:"tax",details:[{name:"Pay GST",amount:"$30"},{name:"Pay GST",amount:"$50"},{name:"Pay GST",amount:"$20"},{name:"Pay GST",amount:"$80"}]},
    {eventName:"complaince",details:[{name:"Get Your Account",amount:"$30"},{name:"Get Your Account",amount:"$50"},{name:"Get Your Account",amount:"$20"},{name:"Get Your Account",amount:"$80"}]}
    ]
    return(
        <div id="details">
        <div className="pt-4 text-center font-weight-bold proudWord">Our Service are at Glance</div>
        <Tab.Container defaultActiveKey="register">
            <Row>
                <Col sm={12} >
                <Nav variant="pills" fill className='mt-5'>
                    <Nav.Item>
                    <Nav.Link className="text-white" eventKey="register">Register your Busssiness</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="text-white" eventKey="license">Get License</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="text-white" eventKey="property">Get Your property</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="text-white" eventKey="tax">Tax Registration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="text-white" eventKey="complaince">Mandatory Complaince</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Row className='mx-auto text-center'>
                <Tab.Content>
                    {list_details.map(val=>{
                        return(
                            <Tab.Pane eventKey={val.eventName} key={val.eventName}>
                                <div id="detailsSection">
                                {val.details.map(amt_name=>{
                                    return(
                                        <Card className='mt-5 cards' key={val.amount}>
                                            <Card.Header>
                                                <div className='font-weight-bold'>{amt_name.name}</div>
                                                <div>{amt_name.amount}</div>
                                            </Card.Header>
                                            <Card.Body>
                                                .......
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                                </div>
                            </Tab.Pane>
                        )
                        })}
                </Tab.Content>
                </Row>
            </Row>
        </Tab.Container>
        </div>
    )
}
