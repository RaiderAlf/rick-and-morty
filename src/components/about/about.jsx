import NavBar from '../navBar/navBar'
import Styles from './about.module.css'
import GitHub from './images/github.png'
import LinkedIn from './images/linkedin.png'

const About = () => {
    return(
        <div>
            <NavBar/>
            <div className={Styles.aboutDiv}>
                <p>Project was developed with ReactJs using tools like router and redux</p>
                <p>Created by Kevin Alfonzo</p>
                <hr/>
                <div className={Styles.divLinks}>
                    <span>My Links</span>
                    <br/>
                    <a href='https://github.com/RaiderAlf/'><img className={Styles.imgRs_git} src={GitHub} alt="" /></a>
                    <br/>
                    <a href="https://www.linkedin.com/in/kalfonzoespinett/"><img className={Styles.imgRs_lin} src={LinkedIn} alt="" /></a>
                </div>
            </div>
        </div>
    )
} 

export default About