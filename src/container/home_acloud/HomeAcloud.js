import React,{Component} from 'react';

import './HomeAcloud.css';

import logo from './images/logo-l.png';
import image1 from './images/image-1.png';
import image2 from './images/image-2.png';
import image3 from './images/image-3.png';
import image4 from './images/image-4.png';


class HomeAcloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none",
            left: 0,
            width: 0,
        };
    }

    handleMouseEnter() {
        this.setState({
            display: "block",
            left: (document.body.offsetWidth - document.getElementById('maxPageWidth').offsetWidth)/2+this.articleOneOne.offsetWidth,
            width: this.articleOneOne.offsetWidth,
        });
    }

    handleMouseLeave() {
        // console.log('this is:', this);
        this.setState({
            display: "none",
            left: 0,
            width: 0,
        });
    }

    render () {
        return (
            <div>
                <section className="row index-header-section">
                    <header className="col-md-6 col-md-offset-3 index-header">
                        <img className="index-logo" src={logo} alt="logo" />
                        <h1 className="index-title">一片云</h1>
                        <h2 className="index-sub-title">项目协作开发平台</h2>
                        <section className="index-search">
                            <div className="index-search-example"><p>搜索案例</p></div>
                            <div className="index-or"><p>或</p></div>
                            <div className="index-release-requirement"><p>发布需求</p></div>
                        </section>
                    </header>
                </section>

                <section className="row index-main-article index-main-article-1">
                    <article className="col-md-3 col-sm-3 article-1-1"
                             onMouseEnter={() => this.handleMouseEnter()}
                             onMouseLeave={() => this.handleMouseLeave()}
                             ref={ input => this.articleOneOne = input }>
                        <h3>网站建设</h3>
                        <p>鲲玖泵业报价系统</p>
                        <p>烈火一族官网</p>
                        <p>天来节能官网</p>
                        <p>MotionLabs官网</p>
                    </article>
                    <article className="col-md-6 col-sm-6 article-1-2"><img src={image1} alt="Our products" /></article>
                    <article className="col-md-3 col-sm-3 article-1-3">
                        <h3>APP开发</h3>
                        <p>Onetouch Move</p>
                        <p>iMandarin Online</p>
                        <p>天来节能蓝牙设备调试系统</p>
                        <p>UP光伏</p>
                    </article>
                </section>

                <section className="row index-main-article index-main-article-2">
                    <article className="col-md-3 article-2-1">
                        <h3>工具软件</h3>
                        <p>天来节能蓝牙设备调试系统</p>
                        <p>UP光伏</p>
                    </article>
                    <article className="col-md-3 article-2-2">
                        <h3>微信小程序</h3>
                        <p>51微校</p>
                        <p>UP光伏</p>
                        <p>蓝牙设备调试系统</p>
                    </article>
                    <article className="col-md-3 article-2-3"><img src={image2} alt="Our products" /></article>
                    <article className="col-md-3 article-2-4">
                        <h3>企业软件</h3>
                        <p>鲲玖泵业报价系统</p>
                        <p>面试系统</p>
                    </article>
                </section>

                <section className="row index-main-article index-main-article-3">
                    <article className="col-md-3 article-3-1"><img src={image3} alt="Our products" /></article>
                    <article className="col-md-3 article-3-2">
                        <h3>嵌入式软件</h3>
                        <p>GoWatch智能手表</p>
                        <p>心电监测仪</p>
                    </article>
                    <article className="col-md-3 article-3-3">
                        <h3>UI设计</h3>
                        <p>无人机UI界面</p>
                        <p>CRM网站界面</p>
                        <p>PCB速诊仪界面</p>
                    </article>
                    <article className="col-md-3 article-3-4"><img src={image4} alt="Our products"/></article>
                </section>

                {/*<!-- hover element -->*/}
                <article className="index-main-article index-main-article-1-s1 article-1-1-s1"
                         style={{display:this.state.display,left:this.state.left,width:this.state.width}}>
                    <h4>企业官网</h4>
                    <p>为企业定制精美的官方网站</p>
                    <h4>电商网站</h4>
                    <p>量身定制电商类企业网站</p>
                    <h4>精美网站模板</h4>
                    <p>这里有你想要的精美网站模板</p>
                    <h4>手机网站</h4>
                    <p>专为手机开发定制网站</p>
                    <h4>个人网站</h4>
                    <p>定制自己的个性化网站，我的网站我做主</p>
                </article>

                <article className="index-main-article index-main-article-1-s2 article-1-1-s2">
                    <h4>商城APP</h4>
                    <p>量身定制电商类APP</p>
                    <h4>教育APP</h4>
                    <p>为学校、教育机构、老师和学生开发教育类、学习类APP</p>
                    <h4>运动APP</h4>
                    <p>为运动场馆、运动健康场所开发运行、健康APP</p>
                    <h4>地图APP</h4>
                    <p>专为手机开发定制网站</p>
                    <h4>APP定制</h4>
                    <p>定制自己的个性化APP</p>
                    <h4>APP模板</h4>
                    <p>这里有你想要的APP模板</p>
                </article>

            </div>
        );
    }
}

export default HomeAcloud;