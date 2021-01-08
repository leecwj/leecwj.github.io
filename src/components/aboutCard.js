import React, {Component} from "react";
import "./card.css";
import "./aboutCard.css";

class AboutCard extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="card">
                <div className="aboutcard-img-container">
                    <img className="aboutcard-img" src={this.props.imgSrc} alt={this.props.imgAlt}/>
                </div>
                <div className="card-desc">
                    <div className="card-title"><h1>{this.props.cardTitle}</h1></div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AboutCard;
