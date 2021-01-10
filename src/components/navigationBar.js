import React, {Component} from "react";
import "./navigationBar.css";

class NavigationBar extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
          <div className="navigationbar">
              <img className="navigationbar-img" src={this.props.imgSrc} alt={this.props.imgAlt}/>
              {this.props.children}
          </div>
        );
    }
}

export default NavigationBar;
