import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Toastmsg from '../common/ToastMessage'
import Slider from "react-slick";

const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false
  };

class index extends Component {

    componentDidMount() {
        // Toastmsg("Login success !");
    }
   
    

    render() {
        return (
            <article className="cont-ara">
                {/* <ToastContainer /> */}
                <div className="top-nav">
                    {/* <div className="customer-logos slider">
                        <div className="slide">
                            <a href="">Fire Systems Testing</a>
                        </div>
                        <div className="slide">
                            <a href="">Fire Drills</a>
                        </div>
                        <div className="slide">
                            <a href="">Generator Testing</a>
                        </div>
                        <div className="slide">
                            <a href="">EOC Logbook</a>
                        </div>
                        <div className="slide">
                            <a href="">Account Control</a>
                        </div>
                        <div className="slide">
                            <a href="">Department P & P</a>
                        </div>
                        <div className="slide">
                            <a href="">BMP</a>
                        </div>
                        <div className="slide">
                            <a href="">Employee Training</a>
                        </div>
                        <div className="slide">
                            <a href="">Fire Drills</a>
                        </div>
                    </div> */}
                    <Slider {...settings}>
                        <div className="slide">
                            <a href="">Fire Systems Testing</a>
                        </div>
                        <div className="slide">
                            <a href="">Fire Drills</a>
                        </div>
                        <div className="slide">
                            <a href="">Generator Testing</a>
                        </div>
                        <div className="slide">
                            <a href="">EOC Logbook</a>
                        </div>
                        <div className="slide">
                            <a href="">Account Control</a>
                        </div>
                        <div className="slide">
                            <a href="">Department P & P</a>
                        </div>
                        <div className="slide">
                            <a href="">BMP</a>
                        </div>
                        <div className="slide">
                            <a href="">Employee Training</a>
                        </div>
                        <div className="slide">
                            <a href="">Fire Drills</a>
                        </div>
    </Slider>
                </div>

                <div className="cnt-sec">
                    <div className="bid-ara">
                        <div className="nme-ara">
                            <div className="name">Binders </div>
                            <div className="badge">
                                <span>06</span>
                            </div>
                        </div>
                    </div>

                    <div className="ara-pub">
                        <div className="bok-ara three">
                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/background-1.svg" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Systems Testing</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/background-1.svg" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Systems Testing</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/background-1.svg" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Systems Testing</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bok-ara three">
                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/background-1.svg" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Systems Testing</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/background-1.svg" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Systems Testing</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/background-1.svg" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Systems Testing</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btm-ara">
                        <div className="pge-nav-ara">
                            <ul className="pagnation">
                                <li className="active">
                                    <a href="#">01</a>
                                </li>
                                <li>
                                    <a href="#">02</a>
                                </li>
                                <li>
                                    <a href="#">03</a>
                                </li>
                            </ul>
                            <ul className="pagnation prv-nxt">
                                <li>
                                    <a href="#" className="prv"> <img src="/images/lft-arrow.svg" /> Prev</a>
                                </li>
                                <li>
                                    <a href="#" className="nxt">Next <img src="/images/rgt-arrow.svg" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default index;