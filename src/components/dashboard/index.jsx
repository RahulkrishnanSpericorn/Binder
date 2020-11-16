import React, { Component } from 'react';
import Slider from "react-slick";

const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
};

class index extends Component {

    render() {
        return (
            <section className="cont-ara">
                <div className="dash">
                    <div className="top-slider">

                        <Slider className="customer-logos slider" {...settings}>
                            <div classNameName="slide">
                                <a href="">Fire Systems Testing</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">Fire Drills</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">Generator Testing</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">EOC Logbook</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">Account Control</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">Department P & P</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">BMP</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">Employee Training</a>
                            </div>
                            <div classNameName="slide">
                                <a href="">Fire Drills</a>
                            </div>
                        </Slider>

                    </div>
                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="items">
                                <div className="item-head">
                                    <div className="icon">
                                        <img src="/images/blu-logo.svg" />
                                    </div>
                                    <div className="count"> 01</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/1.png" className="img-resposive" />
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
                                    <div className="count"> 02</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/2.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Fire Drills</h2>
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
                                    <div className="count"> 03</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/3.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Generator Testing</h2>
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
                                    <div className="count"> 03</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/4.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Construction Safety</h2>
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
                                    <div className="count"> 02</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/5.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>EOC Logbook</h2>
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
                                    <div className="count"> 03</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/6.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Department P & P</h2>
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
                                    <div className="count"> 02</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/07.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>BMP</h2>
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
                                    <div className="count"> 02</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/08.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Employee Training</h2>
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
                                    <div className="count"> 03</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/09.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Employee Training</h2>
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
                                    <img src="/images/10.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Employee Training</h2>
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
                                    <div className="count"> 02</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/11.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Employee Training</h2>
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
                                    <div className="count"> 03</div>
                                </div>
                                <div className="itm-cnt">
                                    <img src="/images/12.png" className="img-resposive" />
                                </div>
                                <div className="itm-btm">
                                    <div className="head">
                                        <h2>Employee Training</h2>
                                    </div>
                                    <div className="lnk-mor">
                                        <a href="#">
                                            <img src="/images/blu-rig.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fot-nav">
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
            </section>
        );
    }
}

export default index;