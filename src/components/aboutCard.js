import React, {Component} from "react";
import "./aboutCard.css"

class AboutCard extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="aboutcard">
                <div className="aboutcard-img-container">
                    <img className="aboutcard-img" src={this.props.imgSrc} alt={this.props.imgAlt}/>
                </div>
                <div className="aboutcard-desc">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AboutCard;