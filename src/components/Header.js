import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-laptop"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Godfrey Mosima Thabulwa</h1>
                <p> Hi there, I AM A javascript FULLSTACK DEVELOPER<br />
                I am a fullstack stack developer with 6yrs+ focusing on building user friendly web applications.<br/>
                I am not limited to the stack I am currently doing. I learn and grasp new concepts easily. Get to know me by going through my profile or we can grab a drink &#127866;</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('project')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
