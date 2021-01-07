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
                    <div className="aboutcard-title"><h1>{this.props.cardTitle}</h1></div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AboutCard;