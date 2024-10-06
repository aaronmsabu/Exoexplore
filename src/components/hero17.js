import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text5 thq-heading-1">
                  Explore Exoplanets Beyond
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero17-text8 thq-body-large">
                  Discover fascinating exoplanets like Proxima Centauri b,
                  Kepler-186f, Ross 128 b, Kepler-452b, and TRAPPIST-1e. See
                  their distances from Earth and estimated time of arrival if a
                  rocket was launched now.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text7 thq-body-small">
                    Explore Now
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text6 thq-body-small">
                    Secondary action
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src="https://images.unsplash.com/photo-1707653056999-d190d800bb0a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGV4b3BsYW5ldHxlbnwwfHx8fDE3MjgxMTQwMDR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image5Src:
    'https://images.unsplash.com/photo-1639477734993-44982980229e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHBsYW5ldHN8ZW58MHx8fHwxNzI4MTQ2NTY5fDA&ixlib=rb-4.0.3&w=1500',
  image12Src:
    'https://images.unsplash.com/photo-1701453831008-ea11046da960?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxwbGFuZXRzfGVufDB8fHx8MTcyODE0NjU2OXww&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1727363584291-433dcd86a0fa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxwbGFuZXRzfGVufDB8fHx8MTcyODE0NjU2OXww&ixlib=rb-4.0.3&w=1500',
  heading1: undefined,
  image7Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1727363456036-ecc24d117fb7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxwbGFuZXRzfGVufDB8fHx8MTcyODE0NjU2OXww&ixlib=rb-4.0.3&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1639548206689-1a5238f8d5bb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxwbGFuZXRzfGVufDB8fHx8MTcyODE0NjU2OXww&ixlib=rb-4.0.3&w=1500',
  image10Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxwbGFuZXRzfGVufDB8fHx8MTcyODE0NjU2OXww&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1639393455114-84df73f758cd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHBsYW5ldHN8ZW58MHx8fHwxNzI4MTQ2NTY5fDA&ixlib=rb-4.0.3&w=1500',
  image1Alt: 'Image of rocket flying through space',
  image1Src:
    'https://images.unsplash.com/photo-1639477735279-c36dda1f7ebb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHBsYW5ldHN8ZW58MHx8fHwxNzI4MTQ2NTY5fDA&ixlib=rb-4.0.3&w=1500',
  image8Src:
    'https://images.unsplash.com/photo-1710268469141-07748f09141f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxleG9wbGFuZXR8ZW58MHx8fHwxNzI4MTE0MDExfDA&ixlib=rb-4.0.3&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1639653279211-09958a51fb00?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBsYW5ldHN8ZW58MHx8fHwxNzI4MTQ2NTY5fDA&ixlib=rb-4.0.3&w=1500',
  action2: undefined,
  image12Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1639477878754-4119b60fb02a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHBsYW5ldHN8ZW58MHx8fHwxNzI4MTQ2NTY5fDA&ixlib=rb-4.0.3&w=1500',
  action1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1521601135263-56c414ea4c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODExMDIwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Hero Image',
  rootClassName: '',
  image11Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  content1: undefined,
  image3Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image9Alt: 'Hero Image',
}

Hero17.propTypes = {
  image5Src: PropTypes.string,
  image12Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image9Src: PropTypes.string,
  heading1: PropTypes.element,
  image7Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image3Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image6Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image8Src: PropTypes.string,
  image4Src: PropTypes.string,
  action2: PropTypes.element,
  image12Alt: PropTypes.string,
  image2Src: PropTypes.string,
  action1: PropTypes.element,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image11Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.element,
  image3Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
}

export default Hero17
