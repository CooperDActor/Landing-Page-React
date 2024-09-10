import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div id="resources" className="home-hero">
        <div className="home-content-container1">
          <div className="home-hero-text">
            <h1 className="Section-Heading">Salty Media</h1>
            <span className="Section-Text">Changing Media</span>
          </div>
        </div>
      </div>
      <div id="process" className="home-services">
        <div className="home-heading-container1">
          <h1 className="Section-Heading">More things to see</h1>
        </div>
        <div className="home-cards-container1">
          <div className="home-service-card1">
            <h3 className="Card-Heading">Music</h3>
            <span className="Card-Text">
              Yes we do music publishing we act as a label and publish for you
            </span>
          </div>
          <div className="home-service-card2">
            <h3 className="home-text14 Card-Heading">Community</h3>
            <span className="Card-Text">meet other aspiring creators</span>
          </div>
          <div className="home-service-card3">
            <h3 className="Card-Heading">Other Opportunitys</h3>
            <span className="Card-Text">Coming Soon</span>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-team">
        <div className="home-heading-container2">
          <h1 className="home-text18 Section-Heading">Meet the Team</h1>
        </div>
        <div className="home-cards-container2">
          <div className="home-team-card1">
            <span className="Card-Heading">Liam</span>
            <span className="Card-Text">Management</span>
          </div>
          <div className="home-team-card2">
            <span className="Card-Heading">Cooper</span>
            <span className="Card-Text">CEO/Managing Director</span>
          </div>
          <div className="home-team-card3">
            <span className="Card-Heading">Ollie</span>
            <span className="Card-Text">Sales</span>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-get-in-touch">
        <h2 className="home-text19 Section-Heading">Get in touch</h2>
        <div className="home-content-container2">
          <div className="home-locations-container">
            <div className="home-location1">
              <div className="home-email">
                <svg viewBox="0 0 1024 1024" className="home-icon1">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span>
                  <span className="Section-Text">Liam@Salty.cool</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-container2">
            <svg viewBox="0 0 1024 1024" className="home-icon3">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <span>
              <span className="Section-Text">Cooper@Salty.cool</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-section-separator4"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links"></div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon5">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Salty Media, 2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
