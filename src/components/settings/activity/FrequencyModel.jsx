import React, { Component } from "react";
import Slider from "react-slick";
import { RRule, RRuleSet, rrulestr } from "rrule";

class FrequencyModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderSettings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 1
            },
            monthList: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            frequencyList: [
                { name: "Yearly", key: "YEARLY", value: 0 },
                { name: "Monthly", key: "MONTHLY", value: 1 },
                { name: "Weekly", key: "WEEKLY", value: 2 },
                { name: "Daily", key: "DAILY", value: 3 },
                { name: "Hourly", key: "HOURLY", value: 4 }
            ],
            dayList: [
                { name: "Mon", key: "MO" },
                { name: "Tue", key: "TU" },
                { name: "Wed", key: "WE" },
                { name: "Thu", key: "TH" },
                { name: "Fri", key: "FR" },
                { name: "Sat", key: "SA" },
                { name: "Sun", key: "SU" }
            ],
            rRuleGen: {
                freq: RRule["MONTHLY"],
                interval: "",
                wkst: RRule.MO,
                byweekday: [RRule["MO"], RRule["TU"], RRule["WE"], RRule["TH"]],
                bymonth: []
            },
            test_frequency: ""
        };
    }

    componentDidMount = async () => {};

    setByMonthForRRuleGen = value => {
        const {
            rRuleGen,
            rRuleGen: { bymonth }
        } = this.state;
        let tempByMonth = bymonth;
        if (tempByMonth.includes(value)) {
            tempByMonth = tempByMonth.filter(item => item !== value);
        } else {
            tempByMonth.push(value);
        }
        this.setState({
            rRuleGen: {
                ...rRuleGen,
                bymonth: tempByMonth
            }
        });
    };

    generateRRule = () => {
        const { rRuleGen } = this.state;
        const rule = new RRule(rRuleGen);
        console.log("ruletoString", rule.toString());
        // let rule2 = RRule.fromString(rule.toString());
        // console.log("ruletoString 2", rule2.origOptions);
    };

    render() {
        const { monthList, frequencyList, dayList, test_frequency, rRuleGen } = this.state;
        console.log("rRuleGen", rRuleGen.byweekday);
        return (
            <React.Fragment>
                <div className="modal" role="dialog" style={{ display: "block" }} id="modalId">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Frequency</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <i className="material-icons">close </i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="frm-modal">
                                    <div className="form-group">
                                        <label>Select Frequency</label>
                                        <div className="bck-ara">
                                            {frequencyList.map((item, i) => (
                                                <button
                                                    className={`btn btn-frm ${rRuleGen.freq === item.value ? "active" : ""}`}
                                                    onClick={() => this.setState({ rRuleGen: { ...rRuleGen, freq: RRule[item.key] } })}
                                                >
                                                    {item.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="item-row">
                                        <div className="item">
                                            <div className="form-group">
                                                <label>Interval</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    className="form-control"
                                                    value={rRuleGen.interval}
                                                    onChange={e =>
                                                        this.setState({
                                                            rRuleGen: {
                                                                ...rRuleGen,
                                                                interval: e.target.value
                                                            }
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>By Month</label>
                                        <div className="bck-ara">
                                            <div className="slider month">
                                                <Slider {...this.state.sliderSettings}>
                                                    {monthList.map((item, i) => (
                                                        <div className="slide" key={i}>
                                                            <button
                                                                className={`btn btn-frm ${
                                                                    rRuleGen && rRuleGen.bymonth.includes(i + 1) ? "active" : ""
                                                                }`}
                                                                onClick={() => this.setByMonthForRRuleGen(i + 1)}
                                                            >
                                                                {item}
                                                            </button>
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>By Day</label>
                                        <div className="bck-ara day">
                                            {dayList.map((item, i) => (
                                                <button className="btn btn-frm">{item.name}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Test Frequecy</label>
                                        <input
                                            type="text"
                                            value={test_frequency}
                                            className="form-control"
                                            onChange={e => this.setState({ test_frequency: e.target.value })}
                                        />
                                    </div>

                                    <div className="btn-sec">
                                        <button className="btn btn-cncl-back mr-2">
                                            <i className="material-icons tic"> close</i>Cancel
                                        </button>
                                        <button className="btn btn-create" onClick={() => this.generateRRule()}>
                                            <i className="material-icons tic"> check</i> Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FrequencyModel;
