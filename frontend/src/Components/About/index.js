import ReactPlayer from "react-player";
import MarvelTitle from "../MarvelTitle";
import IconicCharacters from "../IconicCharacters";
import MarvelAcheivments from "../MarvelAcheivments";
import Footer from '../Footer'
import "./index.css";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center about-c">
      <div className="spidey-c">
              <img src="https://i.postimg.cc/tTTnR6Cy/Spidey-Hang.png" alt=" spidey" className="spidey"/>
</div>
      <MarvelTitle />

      <div className="about-marvel">
        <h1 className="about-headings">About—</h1>
        <div style={{ maxWidth: "1200px" }}>
          <p className="text-base">
            - Marvel Entertainment is a powerhouse of storytelling, best known for creating an epic universe of superheroes
            that inspire generations. From legendary characters like Spider-Man, Iron Man, and Captain America to
            cinematic blockbusters in the Marvel Cinematic Universe (MCU), Marvel combines action, emotion, and imagination like no other.
            Founded in 1939 as Timely Comics, Marvel has evolved into a global phenomenon, delivering comics, movies, series, and games that connect
            millions of fans across the world. Whether you're into cosmic adventures, street-level heroes, or multiverse madness—Marvel
            has something for every fan -
          </p>
        </div>
      </div>

      <div className="about-marvel">
        <h1 className="about-headings">Iconic Characters—</h1>
        <div><IconicCharacters /></div>
        
      </div>
        <div id="achievments" className="about-marvel" style={{color: "white", fontSize: "20px", marginTop: "20px"}}>
          <h1 className="about-headings">Achievements—</h1>
          <div className="flex justify-start flex-row ml-0">
             <MarvelAcheivments />
          </div>          
      
        </div>
       
    </div>
  );
};

export default About;
