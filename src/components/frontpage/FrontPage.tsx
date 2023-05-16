import { PageNavigation } from "../pagenavigation/PageNavigation"
import "./fontpage.css";

export const FrontPage = () => {

    return <>
        <PageNavigation></PageNavigation>
        <h1 className="main-h1"><span>F</span><span>R</span><span>O</span><span>N</span><span>T</span><span>&nbsp;</span><span>E</span><span>N</span><span>D</span><span>&nbsp;</span><span>D</span><span>E</span><span>V</span><span>E</span><span>L</span><span>O</span><span>P</span><span>E</span><span>R</span></h1>
        <div className="frontPageContainer">
            <article className="pictureBox">
                <h2>Hi, I'm Mikael!</h2>
                <img src="src\assets\cv.jpg" className="img-small" alt="portrait" />
                <p>
                    Front End Developer in the making
                </p>
                <h2>Skills</h2>
                <div className="skillbar" id="html-bar"><p>HTML</p></div>
                <div className="skillbar" id="css-bar"><p>CSS</p></div>
                <div className="skillbar" id="javascript-bar"><p>JS</p></div>
                <div className="skillbar" id="typescript-bar"><p>TS</p></div>
                <div className="skillbar" id="react-bar"><p>React</p></div>
                <div className="skillbar" id="vue-bar"><p>Vue</p></div>
            </article>
            <article className="presentationBox">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi reiciendis sit laudantium amet, officiis autem maxime? Doloremque quia ab laudantium consequatur labore, dolorum qui tenetur ipsam maxime molestiae? Animi, ab!</article>
            <article className="socialMediaBox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veniam dolorum voluptatem mollitia libero praesentium explicabo rerum minima sequi tempora non esse quaerat adipisci dolorem facere aut quod molestiae officiis?</article>
        </div>
    </>
}