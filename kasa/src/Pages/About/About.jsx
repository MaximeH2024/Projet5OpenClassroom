import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import aboutList from "../../data/collapse";
import './About.scss';
import aboutBg from "../../assets/Image2.png"

function About() {
    return (
        <main>
            <Banner title="" url={aboutBg}/>
            <div className="about-collapse-section">
                {aboutList.map(item => (
                    <Collapse key={item.id} title={item.title} content={item.content} />
                ))}
            </div>
            
        </main>
       
    )
}

export default About