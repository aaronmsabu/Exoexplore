import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              From the comfort of your screen, journey to distant worlds
              orbiting far-off stars. Our advanced technology transforms data
              into vivid, immersive visuals, allowing you to see exoplanets like
              never before.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text29 thq-heading-2">
                      Select an Exoplanet
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      Choose one of the featured exoplanets to learn more about
                      its distance from Earth and estimated time of arrival.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Launch Rocket
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text32 thq-body-small">
                      Click on the rocket icon to launch it towards the selected
                      exoplanet.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text30 thq-heading-2">
                      Track Rocket
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Follow the rocket&apos;s journey through space as it
                      travels towards the exoplanet.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text28 thq-heading-2">
                      Arrival Time
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text31 thq-body-small">
                      Check the estimated time of arrival for the rocket to
                      reach the selected exoplanet.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Description: undefined,
  step1Description: undefined,
  step2Title: undefined,
  step4Title: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step2Description: undefined,
}

Steps2.propTypes = {
  step3Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps2
