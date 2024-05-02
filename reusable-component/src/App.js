import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className ="hero-body">
                <p className="title">Personal Digital Assistance</p>
            </div>
        </section>
      {/* <img src={AlexaImage} alt="Alexa"/>
            <img src={cortanaImage} alt="cortana"/>
            <img src={siriImage} alt ="siri" /> */}

      <div className="container">
        <section clasName="session">
            <div className="columns">
            <div className="column is-3">
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}
            description="Alexa was created by Amazon and helps to do things automatically" />

          </div>
          <div className="column is-3">
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              image={cortanaImage}
              description="cortona made by microsoft"
            />
          </div>
          <div className="column is-3">
            <ProfileCard title="Siri" handle="@siri01" image={siriImage}
            description="siri made by Apple" />
          </div>
            </div>
 
        </section>
      </div>
    </div>
  );
}
export default App;
