import React, {Component} from "react";
import "./card.css";
import "./projectCard.css";
import gh from "../images/gh.svg";
import link from "../images/link.svg";

class ProjectCard extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="card">
                <div className="projectcard-img-container">
                    <img className="projectcard-img" src={this.props.imgSrc} alt={this.props.imgAlt}/>
                </div>
                <div className="card-desc">
                    <div className="card-title">
                        <h1>
                            {this.props.cardTitle} | {this.getGh()} {this.getLink()}
                        </h1>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }

    getGh() {
        if (this.props.gh) {
            return (
                <a href={this.props.gh} title="View project on GitHub">
                    <img className="projectcard-gh" src={gh} alt="GitHub logo"/>
                </a>
            );
        } else {
            return null;
        }
    }

    getLink() {
        if (this.props.link) {
            return (
                <a href={this.props.link} title="View live demo">
                    <img className="projectcard-link" src={link} alt="Project demo"/>
                </a>
            );
        } else {
            return null;
        }
    }
}

export default ProjectCard;
