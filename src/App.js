import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/work_in_progress.svg" alt="" />
        <h2>This Website is under maintenance</h2>
        <p>We are currently upgrading our system to make it evenmore useful to you.</p>
        <p>Thank you for your patience.</p>
      </header>

      <section className="about-us">
        <div>
          <h2>About us</h2>
          <img src="/images/jei_logo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada risus, ac pellentesque elit. Cras malesuada, eros ut mattis convallis, tortor dolor auctor lorem, non elementum eros augue ac quam. Phasellus vel pharetra eros. Phasellus sit amet turpis lacus. Pellentesque pretium pulvinar massa et feugiat. Donec lacus elit, egestas id erat sed, tempor tincidunt velit. Fusce et metus vestibulum, dapibus sapien vel, tincidunt quam. In vel ullamcorper magna. Etiam semper sagittis viverra. Vivamus auctor dignissim auctor. Morbi et ornare diam, at maximus nunc. Proin tellus tortor, ultricies eu nulla sed, consequat auctor tellus. Etiam blandit sapien non tempus aliquet. Cras volutpat id magna eget pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tortor dolor, ultrices quis ex id, hendrerit tempor ex. 
          </p>
        </div>
        <div className="get-in-touch">
          <h2>Get in touch</h2>
          <ul className="contact-info-container">
            <li>
              <FontAwesomeIcon icon={faEnvelope} size="3x"/>
              insatjuniorentreprise@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} size="3x"/>
              58329309
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="3x"/>
              insatjuniorentreprise
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} size="3x"/>
              insatjuniorentreprise
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="3x"/>
              insatjuniorentreprise
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
