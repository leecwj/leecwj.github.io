import React, {Component} from "react";
import {Link} from "react-router-dom"
import "./navigationBar.css";

class NavigationBar extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
          <div className="navigationbar">
              <Link to="/" name="home">
                  <img className="navigationbar-img" src={this.props.imgSrc} alt={this.props.imgAlt}/>
              </Link>
              {this.props.children}
          </div>
        );
    }
}

export default NavigationBar;
