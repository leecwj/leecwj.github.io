import React, {Component} from "react";
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
                    <h1 className="navigationbaritem-heading">{this.props.children}</h1>
                </div>
            </div>
        );
    }
}

export default NavigationBarItem;
