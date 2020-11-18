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
class TopSlider extends Component {
    render() {
        return (
            <div class="top-slider">
            <i class="material-icons" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">expand_more</i>
            <div class="collapse show" id="collapseExample">
                <div class="customer-logos slider">
                    <Slider className="customer-logos slider" {...settings}>
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
            </div>
        </div>
        );
    }
}

export default TopSlider;