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
            <div className="fst">
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

                
                <div className="dash-cont">
                    <div className="pub-ara six">
                        

                    <div class="frm-ara">
                    <div class="top-ara"> 
                        <h4>Add Building</h4>
                    </div>

                    <div class="head">
                        <h3>Basic Info</h3>
                    </div>
                    <div class="frm">
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">01</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Host Full  Name</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">02</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" " list="buildigNumber" name="buildigNumber"/>
                                    <label class="form-control-placeholder" for="f-name">Cosultancy*</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="cosultancy">
                                        <option value="Cosultancy"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">03</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "  list="client" name="client"/>
                                    <label class="form-control-placeholder" for="f-name">Client*</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="client">
                                        <option value="Client"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">04</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" " list="builiding" name="builiding"/>
                                    <label class="form-control-placeholder" for="f-name">Builiding Type</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="buildig">
                                        <option value="builiding"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">05</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "  list="region" name="region"/>
                                    <label class="form-control-placeholder" for="f-name">Region*</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="region">
                                        <option value="Region"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">06</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" " list="site" name="site"/>
                                    <label class="form-control-placeholder" for="f-name">Site*</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="site">
                                        <option value="Region"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">07</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Descrtiption</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">08</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" " list="buildigNumber" name="buildigNumber"/>
                                    <label class="form-control-placeholder" for="f-name">Buildig Number</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="buildigNumber">
                                        <option value="Buildig Number"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">09</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" " list="associated" name="associated"/>
                                    <label class="form-control-placeholder" for="f-name">Associated Projects</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="associated">
                                        <option value="Buildig Number"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">10</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "  list="cosultancy" name="cosultancy"/>
                                    <label class="form-control-placeholder" for="f-name">Cosultancy Users</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="cosultancy">
                                        <option value="Buildig Number"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">11</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "  list="client-u" name="client-u"/>
                                    <label class="form-control-placeholder" for="f-name">Client Users</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="client-u">
                                        <option value="Buildig Number"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="head mt-4">
                        <h3>Basic Info</h3>
                    </div>
                    <div class="frm">
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">01</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Arrea (Sq)</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">02</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Cost</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">03</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Enterprice Index</label>
                                </div>
                            </div>
                        </div>
                       
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">04</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Ownership</label>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">05</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Ownership Type</label>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">06</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Use</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">07</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Manager</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">08</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Year Built</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">09</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Ministry</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="head mt-4">
                        <h3>Address</h3>
                    </div>
                    <div class="frm">
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">01</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Street</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">02</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">City</label>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">03</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">State</label>
                                </div>
                            </div>
                        </div>
                       
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">04</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Country</label>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">05</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" " list="zip" name="zip"/>
                                    <label class="form-control-placeholder" for="f-name">Zip Code</label>
                                    <span class="material-icons">keyboard_arrow_down </span>
                                    <datalist id="zip">
                                        <option value="686541"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">06</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <input type="text" id="text" class="form-control" placeholder=" "/>
                                    <label class="form-control-placeholder" for="f-name">Comment</label>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>

                    <div class="frm btn-sec">
                        <button class="btn btn-submit"> <i class="material-icons tic"> check</i>Submit</button>
                    </div>
                </div>



                    </div>

                </div>
            </div>
        </section>
        );
    }
}

export default index;