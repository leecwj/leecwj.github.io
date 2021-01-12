import ProjectCard from "./components/projectCard.js";
import selfSimple from "./images/self-simple.min.svg";
import poprevPreview from "./images/poprev-preview.png";
import bustingPreview from "./images/busting-preview.png";
import "./page.css";

function Projects() {
    return (
        <div className="page projects">
            <ProjectCard imgSrc={poprevPreview} imgAlt="poprev preview" cardTitle="gbc-poprev"
                         gh="https://github.com/leecwj/gbc-poprev">
                <p>
                    The <strong>G</strong>ame <strong>B</strong>oy <strong>C</strong>amera <strong>P</strong>icture
                    of <strong>P</strong>icture <strong>Rev</strong>erser is an
                    application I wrote to solve a problem I had with
                    the <a href="https://en.wikipedia.org/wiki/Game_Boy_Camera">Game Boy Camera</a> -
                    a 1998 video game accessory.
                </p>
                <p>
                    The Game Boy Camera is a game
                    cartridge that also has a camera attached. It allows users to take
                    photographs and save them to the cartridge, where they can be viewed on the handheld console.
                    However, without special hardware, it is not possible to transfer these photos to another
                    device, such as a computer. This project aims to provide a way of obtaining the photos, using only
                    the GB Camera, a GB console, a modern digital camera, and this app.
                </p>
            </ProjectCard>
            <ProjectCard imgSrc={bustingPreview} imgAlt="Busting preview" cardTitle="Busting"
                         gh="https://github.com/lachlanharnett/UQCS-Hackathon-2020"
                         link="https://lachlanharnett.github.io/UQCS-Hackathon-2020/">
                <p>
                    Busting is a web application that finds and navigates users to the nearest public toilet in
                    one click. It was created in 48 hours for the 2020 UQ Computing Society Hackathon, by my team and I.
                    In the end, the judges awarded Busting the title of <em>Best Philanthropic Project</em> that year.
                </p>
            </ProjectCard>
            <ProjectCard imgSrc={selfSimple} imgAlt="Portfolio logo" cardTitle="Portfolio Website"
                         gh="https://github.com/leecwj/leecwj.github.io" link="https://leecwj.github.io">
                <p>
                    This portfolio website serves to showcase a selection of my programming related projects.
                    Made using the React library.
                </p>
            </ProjectCard>
        </div>
    );
}

export default Projects;
