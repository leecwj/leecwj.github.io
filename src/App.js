import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import selfSimple from "./images/self-simple.min.svg"
import NavigationBar from "./components/navigationBar";
import NavigationBarItem from "./components/navigationBarItem";

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                <nav className="navigation">
                    <NavigationBar imgSrc={selfSimple} imgAlt="Logo">
                        <NavigationBarItem to="/about" name="about">About</NavigationBarItem>
                        <NavigationBarItem to="/projects" name="projects">Projects</NavigationBarItem>
                    </NavigationBar>
                </nav>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
