import AboutCard from "./components/aboutCard";
import self from "./images/self.min.svg";
import "./page.css";

function About() {
    return (
        <div className="page about">
            <AboutCard imgSrc={self} imgAlt="Self portrait" cardTitle="About myself">
                <p>
                    My name is Josh, and I’m an undergraduate. I study computer science and mathematics.
                    As you might have guessed, I very much enjoy programming. It has been my
                    hobby from a young age, and I intend to make it my career.
                </p>
                <p>
                    Over the last decade or so, in
                    both my education and spare time, I've had many diverse experiences in regards to software
                    development. I'm confident that with the skills I've developed, I can take on any
                    challenge the industry may bring.
                </p>
            </AboutCard>
        </div>
    );
}

export default About;