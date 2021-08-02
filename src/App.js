import './App.css';
import logo from "./images/logo.png"
import headerImage from "./images/header_image.png"
import maintenance from "./images/under_construction.jpg"
import seoIcon from "./images/seo_icon.PNG"
import mobileIcon from "./images/mobile_icon.PNG"
import webIcon from "./images/web_icon.PNG"
import section4Image from "./images/section4.png"
import section5Image from "./images/section5.png"
import { useEffect } from 'react';
import AOS from "aos"
import Fade from "react-reveal/Fade"

function App() {
  
  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className="App">
      <header className="">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container row"> 
          <div className="col d-flex flex-column justify-content-center"> 
            <h1>We Build Projects That Lead &amp; Inspire</h1>
            <p>JEI est une association à but non lucratif géré par les etudiants de l'INSAT et offrant des services dans le domaine de l'IT. Les principales compétences de la Junior Entreprise INSAT tournant principalement autour du développement Web, du développement mobile et du référencement.</p>
            <button onClick={() => window.scrollBy(0,window.innerHeight)}>Lire La Suite</button>
          </div>
          <div className="col d-flex justify-content-center" >
            <img src={headerImage} alt="" />
          </div>
        </div>
      </header>

      <section className="maintenance container animate__animated animate__fadeInUp">
        <img src={maintenance} alt="" />
        <h2>En cours de maintenance.. Pour une experience meilleure</h2>
      </section>

      <section className="services container">
        <h3>Nos Service</h3>
        <p className="mt-1 mb-5">That are bound to ensue and equal blame to those who fail in their duty through weakness of will</p>
        <div className="row">
          <div className="col animate__animated animate__fadeInLeft">
            <Fade left>
              <img src={seoIcon} alt="" />
              <h5>Le référencement des sites Web</h5>
              <p>Notre objectif est d'améliorer le positionnement de vos sites internet dans les pages de résultats des moteurs de recherche afin d'augmenter leurs visibilités et de vous permettre de vous démarquer de la concurrence et de vous positionner en tête de file de votre marché.</p>
            </Fade>
          </div>
          <div className="col">
            <Fade up>
              <img src={mobileIcon} alt="" />
              <h5>Applications Mobiles</h5>
              <p>Confiez-nous la création de votre application mobile. Nos applications natives personnalisées sont conçues selon les besoins de votre entreprise. Que vous ayez besoin d’une application mobile pour la gestion de votre entreprise, de vos employés ou bien pour votre clientèle, nous vous proposerons des idées à la hauteur de vos attentes.</p>
            </Fade>
          </div>
          <div className="col">
            <Fade right>
              <img src={webIcon} alt="" />
              <h5>Applications Web</h5>
              <p>La programmation web, c’est notre créneau de spécialisation.Nous créons des sites web qui carburent aux résultats. Bien davantage que de simples vitrines, les sites web que nous créons pour les entreprises de toutes tailles sont modernes, audacieux et à la hauteur de vos attentes.</p>
            </Fade>
          </div>
        </div>
      </section>

      <section className="help container">
        <div className="row">
          <Fade left>
            <div className="col d-flex flex-column justify-content-center"> 
              <h3 className="mb-4">We Build Projects That Lead &amp; Inspire</h3>
              <p>JEI est une association à but non lucratif géré par les etudiants de l'INSAT et offrant des services dans le domaine de l'IT. Les principales compétences de la Junior Entreprise INSAT tournant principalement autour du développement Web, du développement mobile et du référencement.</p>
            </div>
          </Fade>
          <Fade right>
            <div className="col d-flex justify-content-center" >
              <img src={section4Image} alt="" />
            </div>
          </Fade>
        </div>
      </section>

      <section className="contact container">
        <div className="row">
          <Fade left>
            <div className="col d-flex justify-content-center" >
              <img src={section5Image} alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="col d-flex flex-column justify-content-center"> 
              <h3 className="mb-4">Travailler avec nous ?</h3>
              <p>JEI est une association à but non lucratif géré par les etudiants de l'INSAT et offrant des services dans le domaine de l'IT. Les principales compétences de la Junior Entreprise INSAT tournant principalement autour du développement Web, du développement mobile et du référencement.</p>
              <div>
                <input type="text" placeholder="Enter your email address" />
                <button>Envoyer</button>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}

export default App;
