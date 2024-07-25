import instagram from '../image/instagram-logo.png'
import linkedin from '../image/linkedin-logo.png'
import github from '../image/github-logo.png'
import { ExternalLink } from 'react-external-link'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-name">
        <h1>Joonseok <br /> Kim.</h1>
        <div className="white-box" />
        <ul>
          <li><ExternalLink href="https://www.instagram.com/j_sugi_?igsh=bW5jOWR1ZXZpdnln&utm_source=qr"><img src={instagram} /></ExternalLink></li>
            <li><ExternalLink href="https://www.linkedin.com/in/joonseok-kim-a23251267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkedin} /></ExternalLink></li>
            <li><ExternalLink href="https://github.com/Joonskk"><img src={github} /></ExternalLink></li>
        </ul>
      </div>
      <div className="intro-description">
        <h4>- Introduction</h4>
        <h5>Full Stack Web Developer, based in California.</h5>
        <h6>Full Stack Developer with two years of experience leading both front-end and back-end development, and performing quality assurance.</h6>
      </div>
    </div>
  )
}

export default Intro