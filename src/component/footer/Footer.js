import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer-container">
                <div className="footer-container-box">
                    <div>
                        <h1 className="footer-title">公司</h1>
                        <p className="footer-content">关于一片云</p>
                        <p className="footer-content">加入我们</p>
                        <p className="footer-content">兼职加入</p>
                    </div>
                    <div className="footer-container-box-center">
                        <h1 className="footer-title">资源</h1>
                        <p className="footer-content">合作企业</p>
                        <p className="footer-content">提问</p>
                        <p className="footer-content">询价</p>
                        <p className="footer-content">推荐客户</p>
                        <p className="footer-content">Web开发者</p>
                        <p className="footer-content">APP开发者</p>
                    </div>
                    <div>
                        <h1 className="footer-title">联系我们</h1>
                        <p className="footer-content">合作</p>
                        <p className="footer-content">媒体</p>
                        <p className="footer-content">支持</p>
                    </div>
                </div>
                <p className="footer-right">© 2017 YIPIANYUN Inc.    All Rights Reserved</p>
            </div>
        );
    }
}

export default Footer;