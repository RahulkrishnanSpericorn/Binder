import React, { Component } from 'react';
import TopSlider from '../../common/components/TopSlider';

class index extends Component {
    render() {
        return (
            <section className="cont-ara">
                <div className="fst">
                    <TopSlider />

                    <div className="dash-cont">
                        <div className="pub-ara six">
                            <div className="frm-ara">
                                <div className="top-ara">
                                    <h4>Add Building</h4>
                                </div>

                                <div className="head">
                                    <h3>Basic Info</h3>
                                </div>
                                <div className="frm">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Host Full  Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="buildigNumber" name="buildigNumber" />
                                                <label className="form-control-placeholder" for="f-name">Consultancy*</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="cosultancy">
                                                    <option value="Cosultancy" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="client" name="client" />
                                                <label className="form-control-placeholder" for="f-name">Client*</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="client">
                                                    <option value="Client" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="builiding" name="builiding" />
                                                <label className="form-control-placeholder" for="f-name">Building Type</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="buildig">
                                                    <option value="builiding" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="region" name="region" />
                                                <label className="form-control-placeholder" for="f-name">Region*</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="region">
                                                    <option value="Region" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">06</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="site" name="site" />
                                                <label className="form-control-placeholder" for="f-name">Site*</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="site">
                                                    <option value="Region" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Description</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="number" id="text" className="form-control" placeholder=" " list="buildigNumber" name="buildigNumber" />
                                                <label className="form-control-placeholder" for="f-name">Building Number</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="buildigNumber">
                                                    <option value="Buildig Number" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">09</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="associated" name="associated" />
                                                <label className="form-control-placeholder" for="f-name">Associated Projects</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="associated">
                                                    <option value="Buildig Number" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">10</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="cosultancy" name="cosultancy" />
                                                <label className="form-control-placeholder" for="f-name">Consultancy Users</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="cosultancy">
                                                    <option value="Buildig Number" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">11</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " list="client-u" name="client-u" />
                                                <label className="form-control-placeholder" for="f-name">Client Users</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="client-u">
                                                    <option value="Buildig Number" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="head mt-4">
                                    <h3>Basic Info</h3>
                                </div>
                                <div className="frm">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="number" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Area (Sq)</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="number" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Cost</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Enterprice Index</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Ownership</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Ownership Type</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">06</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Use</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">07</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Manager</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">08</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="number" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Year Built</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">09</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Ministry</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="head mt-4">
                                    <h3>Address</h3>
                                </div>
                                <div className="frm">
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">01</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Street</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">02</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">City</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">03</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">State</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">04</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Country</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">05</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="number" id="text" className="form-control" placeholder=" " list="zip" name="zip" />
                                                <label className="form-control-placeholder" for="f-name">Zip Code</label>
                                                <span className="material-icons">keyboard_arrow_down </span>
                                                <datalist id="zip">
                                                    <option value="686541" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="itm">
                                        <div className="cunt">
                                            <div className="numb">06</div>
                                        </div>
                                        <div className="itm-cnt">
                                            <div className="form-group">
                                                <input type="text" id="text" className="form-control" placeholder=" " />
                                                <label className="form-control-placeholder" for="f-name">Comments</label>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="frm btn-sec">
                                    <button className="btn btn-submit"> <i className="material-icons tic"> check</i>Submit</button>
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