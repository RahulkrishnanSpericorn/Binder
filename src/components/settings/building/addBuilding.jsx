import React, { Component } from 'react';
import TopSlider from '../../common/components/TopSlider';

class index extends Component {
    render() {
        return (
            <section class="cont-ara">
            <div class="fst">
                {/* <TopSlider/> */}
                <div class="top-slider nav-ara"> 
                   <div class="tab-sec">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a data-toggle="tab" href="#bd">Basic Details</a>
                            </li>
                            <li><a data-toggle="tab" href="#fls">Floors</a></li>
                            <li><a data-toggle="tab" href="#img">Images</a></li>
                            <li><a data-toggle="tab" href="#map">Map</a></li>
                        </ul> 
                   </div>
                   <div class="pagenation">
                       <ul>
                            <li>
                               <a href="#">Building </a>
                            </li>
                            <li>
                                <a href="#">1920 </a>
                            </li>
                            <li class="active">
                                <a href="#">Basic Details </a>
                            </li>
                       </ul>
                   </div>
                </div>
                <div class="frm-ara">
                    <div class="top-ara"> 
                        <h4>Add Building</h4>
                    </div>

                    <div class="head">
                        <h3>Basic Info</h3>
                    </div>
                    <div class="frm sav">
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">01</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Host Full  Name</label>
                                    <h3>Host Full  Name</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">02</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Cosultancy</label>
                                    <h3>Cosultancy</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">03</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Client</label>
                                    <h3>Client</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">04</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Builiding Type</label>
                                    <h3>Builiding Type</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">05</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Region</label>
                                    <h3>Region</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">06</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Site</label>
                                    <h3>Site</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">07</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Descrtiption</label>
                                    <h3>Descrtiption</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">08</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Buildig Number</label>
                                    <h3>Buildig Number</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">09</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Associated Projects</label>
                                    <h3>Associated Projects</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">10</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Cosultancy Users</label>
                                    <div class="usr-ara">
                                        <div class="user-view">
                                            <div class="img">
                                                <img src="/images/profileimg.jpg"/>
                                            </div>
                                            <div class="usr-nme">User Name</div>
                                        </div>
                                        <div class="user-view">
                                            <div class="img">
                                                <img src="/images/profileimg.jpg"/>
                                            </div>
                                            <div class="usr-nme">User Name</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">11</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Client Users</label>
                                    <div class="usr-ara">
                                        <div class="user-view">
                                            <div class="img">
                                                <img src="/images/profileimg.jpg"/>
                                            </div>
                                            <div class="usr-nme">User Name</div>
                                        </div>
                                        <div class="user-view">
                                            <div class="img">
                                                <img src="/images/profileimg.jpg"/>
                                            </div>
                                            <div class="usr-nme">User Name</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="head mt-4">
                        <h3>More Info</h3>
                    </div>
                    <div class="frm sav">
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">01</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Arrea (Sq)</label>
                                    <h3>Arrea (Sq)</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">02</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Cost</label>
                                    <h3>Cost</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">03</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Enterprice Index</label>
                                    <h3>Enterprice Index</h3>
                                </div>
                            </div>
                        </div>
                       
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">04</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Ownership</label>
                                    <h3>Ownership</h3>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">05</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save">Ownership Type</label>
                                    <h3>Ownership Type</h3>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">06</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Use</label>
                                    <h3>Use</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">07</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Manager</label>
                                    <h3>Manager</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">08</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Year Built</label>
                                    <h3>Year Built</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">09</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Ministry</label>
                                    <h3>Ministry</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="head mt-4">
                        <h3>Address</h3>
                    </div>
                    <div class="frm sav">
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">01</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Street</label>
                                    <h3>Street</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">02</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> City</label>
                                    <h3>City</h3>
                                </div>
                            </div>
                        </div>
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">03</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> State</label>
                                    <h3>State</h3>
                                </div>
                            </div>
                        </div>
                       
                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">04</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Country</label>
                                    <h3>Country</h3>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">05</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Zip Code</label>
                                    <h3>Zip Code</h3>
                                </div>
                            </div>
                        </div>

                        <div class="itm">
                            <div class="cunt">
                                <div class="numb">06</div>
                            </div>
                            <div class="itm-cnt">
                                <div class="form-group">
                                    <label class="form-control-placeholder-save"> Comment</label>
                                    <h3>Comment</h3>
                                </div>
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