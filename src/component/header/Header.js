import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Header.css';

const Header = (props) => (
    <div className="header-container">
        <div className="header-part">
            <p className="header-title" onClick={() => props.history.push('/test1')}>最新活动</p>
            <p className="header-title" onClick={() => props.history.push('/test2')}>解决方案</p>
            <p className="header-title">解决方案</p>
            <p className="header-title">需求发布</p>
            <p className="header-title">社区</p>
            <p className="header-title">我的需求</p>
            <p className="header-title">我的账号</p>
        </div>
        <div className="header-part">
            <p className="header-title header-login">登陆</p>
            <div className="header-separate" />
            <p className="header-title">注册</p>
        </div>
    </div>
);

export default withRouter(Header);