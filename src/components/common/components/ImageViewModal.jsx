import React, { Component } from "react";

class ImageViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = async () => {};

    render() {
        const { imgData, onCancel } = this.props;
        return (
            <React.Fragment>
                <div className="modal viem-image-modal" role="dialog" style={{ display: "block" }} id="viem-image-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" onClick={() => onCancel()}>
                                    <i className="material-icons">close </i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={imgData.url} alt="" />
                                <h4 className="img-modal-desc">{imgData.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ImageViewModal;
