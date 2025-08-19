import { useState, useEffect } from 'react'
import './App.css'
import profileImage from './assets/profile-2.png'

function App() {
  // State for app loading animation
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize app loading state
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* ===== NAVIGATION ===== */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">B</span>
            <span className="logo-text">BERTRAND MUTANGANA</span>
          </div>
          <button className="cta-button">Let's talk</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="availability-badge">
              <span className="status-dot"></span>
              AVAILABLE FOR WORK
            </div>
            <h1 className="hero-title">
              Hi, I'm<br />
              <span className="highlight">Bertrand</span><br />
              <span className="highlight">Mutangana</span>
            </h1>
            <p className="hero-description">
              A Senior QA Engineer, Software Developer, and AI Builder with 3+ years of experience testing 
              and developing applications from apps to ML models. You can trust me on testing robustness of
              ML models, LLMs, AI apps and other software applications. I'm sharing my journey with 1k+ learners on TikTok.
            </p>
            <button className="contact-button">Let's Talk</button>
          </div>
          <div className="hero-visual">
            <div className="profile-image-container">
              <img src={profileImage} alt="Bertrand Mutangana" className="profile-image" />
              <div className="floating-roles">
                <div className="role-tag role-webflow">
                  <span>▶</span>
                  Senior QA Engineer
                </div>
                <div className="role-tag role-ui">
                  <span>▶</span>
                  AI Builder
                </div>
                <div className="role-tag role-product">
                  <span>▶</span>
                  Software Developer
                </div>
              </div>
              <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-container">
          <h2 className="mission-title">
           My mission is to help startups and enterprises make smarter,
          data-driven decisions with AI. I ensure quality and reliability
          through comprehensive testing strategies that strengthen both software
          and intelligent systems.
          </h2>
          <div className="company-logos">
            <span>Deriv</span>
            <span>Juubix</span>
            <span>TesterWork</span>
            <span>AI SYS</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <h2 className="services-title">How Can I<br />Assist You?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🧪</div>
              <div className="service-content">
                <h3>Software Testing</h3>
                <span className="service-number">01</span>
                <p>Comprehensive testing strategies including automated testing, performance testing, and quality assurance to ensure your applications are robust and reliable.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <div className="service-content">
                <h3>Development</h3>
                <span className="service-number">02</span>
                <p>Full-stack development solutions with modern technologies, creating scalable applications that meet your business requirements and user needs.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <div className="service-content">
                <h3>Data Engineering</h3>
                <span className="service-number">03</span>
                <p>Design and implement data pipelines, analytics solutions, and AI-powered insights to help your business make data-driven decisions.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <div className="service-content">
                <h3>AI Consulting</h3>
                <span className="service-number">04</span>
                <p>Leverage my TikTok expertise in AI education to help integrate artificial intelligence solutions into your business processes and strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2>Selected<br />work</h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder mobile-app"></div>
              </div>
              <div className="portfolio-info">
                <h3>E-COMMERCE TESTING SUITE</h3>
                <span className="portfolio-year">2024</span>
                <div className="portfolio-tags">
                  <span className="tag">AUTOMATION</span>
                  <span className="tag">TESTING</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder web-app"></div>
              </div>
              <div className="portfolio-info">
                <h3>AI DATA PIPELINE</h3>
                <span className="portfolio-year">2024</span>
                <div className="portfolio-tags">
                  <span className="tag">DATA ENG</span>
                  <span className="tag">AI/ML</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder dashboard"></div>
              </div>
              <div className="portfolio-info">
                <h3>ANALYTICS DASHBOARD</h3>
                <span className="portfolio-year">2024</span>
                <div className="portfolio-tags">
                  <span className="tag">REACT</span>
                  <span className="tag">DATA VIZ</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder mobile-ui"></div>
              </div>
              <div className="portfolio-info">
                <h3>TIKTOK AI CONTENT</h3>
                <span className="portfolio-year">2024</span>
                <div className="portfolio-tags">
                  <span className="tag">CONTENT</span>
                  <span className="tag">AI EDUCATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="experience-container">
          <div className="experience-header">
            <h2>Wanna see<br />my experience?</h2>
            <button className="book-call-button">Book a call</button>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2020</div>
                  <h3>Full Stack Developer</h3>
                  <p>Started developing web applications and APIs</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2021</div>
                  <h3>Data Engineer</h3>
                  <p>Transitioned to building data pipelines and analytics solutions</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2022</div>
                  <h3>Senior Senior QA Engineer</h3>
                  <p>Advanced to leading QA initiatives and test automation</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">2023</div>
                  <h3>TikTok Software Developer</h3>
                  <p>Launched AI education content reaching 1k+ followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Ready to transform your business with Data and AI?</h2>
            <p>Let's discuss how I can help your business make informed decisions through comprehensive testing, development, and AI solutions.</p>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <textarea placeholder="Project Description..." className="form-textarea"></textarea>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Let's<br />connect<br />and chat</h3>
            <div className="footer-contact">
              <span>HELLO@BERTRAND.DEV</span>
              <button className="footer-cta">→</button>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-social">
              <h3 className="follow-text">FOLLOW ME! 👀✨</h3>
              <div className="social-bubbles">
                <span className="social-bubble">TIKTOK</span>
                <span className="social-bubble">LINKEDIN</span>
                <span className="social-bubble">GITHUB</span>
                <span className="social-bubble">TWITTER</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-icon">B</span>
            <span className="logo-text">BERTRAND MUTANGANA</span>
          </div>
          <span className="copyright">©2024</span>
          <button className="footer-book-call">Book a call</button>
        </div>
      </footer>
    </div>
  )
}

export default App
