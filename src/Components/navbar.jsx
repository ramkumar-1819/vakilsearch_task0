import { getByDisplayValue } from '@testing-library/dom';
import React, { Component } from 'react';
import {Container,Nav,NavDropdown,Navbar} from 'react-bootstrap';

export default function NavBar(){
    //This is Navbar Section Shows list of Navigations
    //items- dropdown list
    const items=["None","None","None","None"]            
    return(
        <Navbar expand="xl" fixed='top' id="navbar">
         <Container fluid>
            <Navbar.Brand className='font-weight-bold text-warning'>Vakil Search</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav id='homePageNavBar' className='w-100 ml-n2 '>
                <NavDropdown title="Bussiness Setup" >
                    {items.map((val,ind)=>{
                        if(ind===items.length-1){
                            return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                        }
                        else{
                            return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                        }
                    })}
                </NavDropdown>
                <NavDropdown title="Tax Complaiance">
                    {items.map((val,ind)=>{
                        if(ind===items.length-1){
                            return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                        }
                        else{
                            return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                        }
                    })}
                </NavDropdown>
                <NavDropdown title="Trademark Ip">
                    {items.map((val,ind)=>{
                        if(ind===items.length-1){
                            return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                        }
                        else{
                            return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                        }
                    })}
                </NavDropdown>
                <NavDropdown title="Fundraising">
                    {items.map((val,ind)=>{
                        if(ind===items.length-1){
                            return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                        }
                       else{
                            return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                        }
                    })}
                </NavDropdown>
                <NavDropdown title="NGO">
                    {items.map((val,ind)=>{
                            if(ind===items.length-1){
                                return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                            }
                            else{
                                return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                            }
                    })}
                </NavDropdown>
                <NavDropdown title="Property and Personal">
                    {items.map((val,ind)=>{
                            if(ind===items.length-1){
                                return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                            }
                            else{
                                return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                            }
                    })}
                </NavDropdown>
                <Nav.Link href="#" id='partnering'>Partner with Us</Nav.Link>
                <NavDropdown title="Dropdown" align={{md:"end"}} id="x">
                    {items.map((val,ind)=>{
                            if(ind===items.length-1){
                                return(<NavDropdown.Item key={val}>{val}</NavDropdown.Item>)
                            }
                            else{
                                return(<NavDropdown.Item key={val} className='border border-top-0 border-left-0 border-right-0 ' >{val}</NavDropdown.Item>)
                            }
                    })}
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
         </Container>
        </Navbar>
    )
}