import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../../dist/css/normalize.css';
import '../../dist/css/bootstrap.min.css';
import './Header.css';

import logo from './logo-s.png';

class Header extends Component {
    render() {
        return(
            <Navbar collapseOnSelect default fixedTop>
                <Navbar.Header>
                    {/*<Navbar.Brand>*/}
                        {/*<a href="#">React-Bootstrap</a>*/}
                    {/*</Navbar.Brand>*/}
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/latest-events">
                            <NavItem eventKey={1}>最新活动</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/solution">
                            <NavItem eventKey={2}>解决方案</NavItem>
                        </LinkContainer>
                        <LinkContainer to="#">
                            <NavItem eventKey={3}>需求发布</NavItem>
                        </LinkContainer>
                        <LinkContainer to="#">
                            <NavItem eventKey={4}>社区</NavItem>
                        </LinkContainer>
                        <LinkContainer to="#">
                            <NavItem eventKey={5}>我的需求</NavItem>
                        </LinkContainer>
                        <LinkContainer to="#">
                            <NavItem eventKey={5}>我的账号</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/home">
                            <NavItem eventKey={6}><img src={logo} alt="small logo" /></NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="#">
                            <NavItem eventKey={1} href="#">登 录</NavItem>
                        </LinkContainer>
                        <NavItem className="hidden-xs">|</NavItem>
                        <LinkContainer to="#">
                            <NavItem eventKey={2} href="#">注 册</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Header);