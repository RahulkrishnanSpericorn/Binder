import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
};
class TopSlider extends Component {
    render() {
        return (
            <div class="top-slider">
                <i class="material-icons" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                    expand_more
                </i>
                <div class="collapse show" id="collapseExample">
                    <div class="customer-logos slider">
                        <Slider className="customer-logos slider" {...settings}>
                            <div className="slide">
                                <span>Fire Systems Testing</span>
                            </div>
                            <div className="slide">
                                <span>Fire Drills</span>
                            </div>
                            <div className="slide">
                                <span>Generator Testing</span>
                            </div>
                            <div className="slide">
                                <span>EOC Logbook</span>
                            </div>
                            <div className="slide">
                                <span>Account Control</span>
                            </div>
                            <div className="slide">
                                <span>Department P & P</span>
                            </div>
                            <div className="slide">
                                <span>BMP</span>
                            </div>
                            <div className="slide">
                                <span>Employee Training</span>
                            </div>
                            <div className="slide">
                                <span>Fire Drills</span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopSlider;
