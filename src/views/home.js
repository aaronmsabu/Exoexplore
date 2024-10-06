import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Glorious Flawless Swan</title>
        <meta property="og:title" content="Glorious Flawless Swan" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">
              Visualize
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">Games</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">
              <span>Citations</span>
              <br></br>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text16 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text17 thq-body-large">
              Proxima Centauri b
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text18 thq-body-large">Kepler-186f</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text19 thq-body-large">Ross 128 b</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text20">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text21">Learn More</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Learn about exoplanets
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Discover the closest exoplanet to Earth
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text24 thq-body-small">
              Explore the first Earth-sized exoplanet discovered in the
              habitable zone
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text25 thq-body-small">
              Find out about the second-closest known exoplanet to Earth
            </span>
          </Fragment>
        }
        link2Url="https://eyes.nasa.gov/apps/exo/#/"
        link1Url="https://eyes.nasa.gov/apps/exo/#/"
        link3Url="https://www.solarsystemscope.com/"
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text26 thq-body-small">Explore Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text27 thq-body-small">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text28 thq-body-large">
              <span>
                Visit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text30">Exoexplore</span>
              <span>
                {' '}
                and begin your adventure into the cosmos. The universe is vast,
                and the possibilities are endless. Let&apos;s explore together.
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text32 thq-heading-1">
              Unlock the Cosmos: Visualize Exoplanets
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text33 thq-heading-2">
              Proxima Centauri b
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">Trappist 1 e</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">Ross 128 B</span>
          </Fragment>
        }
        feature1ImgSrc="/whatsapp%20image%202024-10-05%20at%2021.50.35-1400w.jpeg"
        feature2ImgSrc="/whatsapp%20image%202024-10-05%20at%2021.50.36-2-1400w.jpeg"
        feature3ImgSrc="/whatsapp%20image%202024-10-05%20at%2021.50.35-2-1400w.jpeg"
        feature1Description={
          <Fragment>
            <span className="home-text36 thq-body-small">
              <span>
                Exoplanet that orbits an M-type star. Its mass is 1.07 Earths,
                it takes 11.2 days to complete one orbit of its star, and is
                0.04856 AU from its star. Its discovery was announced in 2016.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Exoplanet that orbits a K-type star. Its mass is 2.36 Earths, it
              takes 112.3 days to complete one orbit of its star, and is 0.409
              AU from its star. Its discovery was announced in 2015.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text40 thq-body-small">
              <span>
                Ross 128 b is a super Earth exoplanet that orbits an M-type
                star. Its mass is 1.4 Earths, it takes 9.9 days to complete one
                orbit of its star, and is 0.0496 AU from its star. Its discovery
                was announced in 2017.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text43">Start Exploring</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text44 thq-body-large">
              Discover fascinating exoplanets and their distances from Earth.
              Plan your journey through space now!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text45 thq-heading-2">
              Explore Exoplanets
            </span>
          </Fragment>
        }
        textUrl="https://eyes.nasa.gov/apps/exo/#/"
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text46 thq-heading-2">
              Kepler-62 f
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text47 thq-heading-2">GJ 357 d</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text48 thq-heading-2">
              Teegarden&apos;s Star b
            </span>
          </Fragment>
        }
        feature1ImgSrc="/whatsapp%20image%202024-10-05%20at%2023.12.56-1400w.jpeg"
        feature2ImgSrc="/screenshot%202024-10-05%20153533-1400w.jpeg"
        feature3ImgSrc="/screenshot%202024-10-05%20232336-1400w.jpeg"
        feature1Description={
          <Fragment>
            <span className="home-text49 thq-body-small">
              Exoplanet that orbits a K-type star. Its mass is 35 Earths, it
              takes 267.3 days to complete one orbit of its star, and is 0.718
              AU from its star. Its discovery was announced in 2013.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text50 thq-body-small">
              Exoplanet that orbits an M-type star. Its mass is 6.1 Earths, it
              takes 55.7 days to complete one orbit of its star, and is 0.204 AU
              from its star. Its discovery was announced in 2019.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text51 thq-body-small">
              Exoplanet that orbits an M-type star. Its mass is 1.05 Earths, it
              takes 4.9 days to complete one orbit of its star, and is 0.0252 AU
              from its star. Its discovery was announced in 2019.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text52 thq-heading-2">
              Select an Exoplanet
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text53 thq-heading-2">Play Games</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text54 thq-heading-2">Visualize</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text55 thq-heading-2">Gallery</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text56 thq-body-small">
              Choose one of the featured exoplanets to learn more about its
              distance from Earth and estimated time of arrival.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text57 thq-body-small">
              Click on the game tab to launch it towards the selected exoplanet.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text58 thq-body-small">
              Click on the visualize tab to see the planets in 3-Dimension.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text59 thq-body-small">
              <span>Check the images of selected exoplanet</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Steps2>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text62 thq-body-small">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text63 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text64 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text65 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text66 thq-body-small">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text67 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text68 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text69 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
