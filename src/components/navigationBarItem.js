import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./navigationBarItem.css";

class NavigationBarItem extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div className="navigationbaritem">
                <div className="navigationbaritem-title">
                    <Link to={this.props.to} name={this.props.name}>
                        <h1 className="navigationbaritem-heading">{this.props.children}</h1>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavigationBarItem;
