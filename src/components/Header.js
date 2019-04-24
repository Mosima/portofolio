import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-laptop"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>GODFREY THABULWA</h1>
                <p>WELCOME, I AM A javascript FULLSTACK DEVELOPER<br />
                CREATING MAGIC WITH MERN STACK (MONGODB, EXPRESS, REACT, AND NODEJS).<br/>
                apart from the above mentioned, i work on hardware and firmware using arduino and raspberry pi.</p>
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
