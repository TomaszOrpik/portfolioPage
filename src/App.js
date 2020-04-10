import React, { Component } from 'react';
import {BrowserRouter as Routes, Route, Switch, NavLink, Redirect} from "react-router-dom";
import BottomScrollListener from "react-bottom-scroll-listener";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './App.css';
import {Icon} from "@iconify/react";
import logoGithub from "@iconify/icons-ion/logo-github";
import logoLinkedIn from "@iconify/icons-ion/logo-linkedin";
import CheckMarkDone from '@iconify/icons-ion/checkmark-done-outline';
import LandingPage from "./Components/LandingPage";
import ProjectsPage from "./Components/ProjectsPage";


export default class App extends Component {
          constructor(props) {
              super(props);
              this.state = {isBottom: false};
              this.state = {scrolled: 0};
              this.state = {navOpen: false};
              this.submitForm = this.submitForm.bind(this);
              this.state = {
                  status: ""
              };
          };


    openNavigation() {
        this.setState({navOpen: !this.state.navOpen});
    }

    checkForTop() {
        if (window.pageYOffset === 0) {
            this.setState({isBottom: false});
            this.setState({scrolled: 0});
        } else { this.setState({scrolled: window.pageYOffset}); }
    }

    setIsBottom() { this.setState({isBottom: true}); }

    changeArrow(color) {
        if (color==='black') {
            if (this.state.isBottom === true) { this.arrowClass = 'arrow arrowBlack rightA'; }
            else { this.arrowClass = 'arrow arrowBlack leftA'; }
        } else {
            if (this.state.isBottom === true) { this.arrowClass = 'arrow arrowWhite rightA'; }
            else { this.arrowClass = 'arrow arrowWhite leftA'; }
        }
    }



    render() {
        let arrowClass = 'arrow arrowBlack leftA';
        let footerIsActive = 'footer';
        let scroll = '#calendar';
        let click = 'click';
        let menuContainer = 'menuContainer';
        let ppMain = 'ppMain';
        let cursorClass = 'cursorB';
        let footIcon = 'footIconB';
        let navigation = ['navigation'];
        let navLinks = 'navLinks';
        let isVisible = { visibility: 'hidden' };
        let backColor = { backgroundColor: 'black' };
        let color = { color: 'black' };
        let colorUp = { color: 'black' };
        const { status } = this.state;


        /* translation string */


        if(this.state.navOpen) {
            this.navigation = ['navigation', 'change'];
            this.menuContainer = 'menuContainer moveLeft';
            this.ppMain = 'ppMain moveRight';
            document.body.style.overflowY = 'hidden';
            this.footerIsActive = 'footer inactive';
        } else {
            this.navigation = ['navigation'];
            this.menuContainer = 'menuContainer moveLeftReverse';
            this.ppMain = 'ppMain moveRightReverse';
            document.body.style.overflowY = 'unset';
            this.footerIsActive = 'footer';
        }

        if(this.state.scrolled > window.innerHeight-100)
        { this.isVisible = {visibility: 'visible'};
        } else {
            this.isVisible = {visibility: 'hidden'};
            if(this.state.navOpen) { this.setState({navOpen: false}) }
        }

        if(this.state.scrolled != this.state.scrolled) { this.checkForTop(); }

/* 60 px */
        if(this.state.scrolled < window.innerHeight) {
            this.changeArrow('black');
            this.color = {
                color: 'black'
            };
            this.footIcon = 'footIconB';
            this.scroll = '#calendar';
            this.click = 'click';
        }
        if(this.state.scrolled === window.innerHeight) {
            this.changeArrow('black');
            this.color = {
                color: 'black'
            };
            this.footIcon = 'footIconB';
            this.click = 'click';
            if(this.state.isBottom) { this.scroll = '#land'; }
            else { this.scroll = '#player'; }
        }
        if(this.state.scrolled < ((2*window.innerHeight)-10)) {
            this.backColor = { backgroundColor: 'black' };
            this.cursorClass = 'cursorB';
        }
        if(this.state.scrolled < window.innerHeight+80) { this.colorUp = { color: 'black' } }
        if(this.state.scrolled > window.innerHeight+80) { this.colorUp = { color: 'white' } }
        if(this.state.scrolled > 2*window.innerHeight+80) { this.colorUp = { color: 'black' } }
        if(this.state.scrolled > 3*window.innerHeight+80) { this.colorUp = { color: 'white' } }
        if(this.state.scrolled > 4*window.innerHeight+80) { this.colorUp = { color: 'black' } }

        if(this.state.scrolled < window.innerHeight + (window.innerHeight*0.85)-20) {this.navLinks = 'navLinksB';}
        if(this.state.scrolled > window.innerHeight + (window.innerHeight*0.85)-20) {this.navLinks = 'navLinksW';}
        if(this.state.scrolled > (2*window.innerHeight) + (window.innerHeight*0.85)-20) {this.navLinks = 'navLinksB';}
        if(this.state.scrolled > (3*window.innerHeight) + (window.innerHeight*0.85)-20) {this.navLinks = 'navLinksW';}
        if(this.state.scrolled > (4*window.innerHeight) + (window.innerHeight*0.85)-20) {this.navLinks = 'navLinksB';}

        if(this.state.scrolled >= ((2*window.innerHeight)-10)) { this.backColor = { backgroundColor: 'white' };
            this.cursorClass = 'cursorW';
        }
        if(this.state.scrolled >= ((3*window.innerHeight)-10)) { this.backColor = { backgroundColor: 'black' };
            this.cursorClass = 'cursorB';
        }
        if(this.state.scrolled >= ((4*window.innerHeight)-10)) {
            this.backColor = { backgroundColor: 'white' };
            this.cursorClass = 'cursorW';
        }
        if(this.state.scrolled >= ((5*window.innerHeight)-10)) {
            this.backColor = { backgroundColor: 'black' };
            this.cursorClass = 'cursorB';
        }

        if(this.state.scrolled >= (window.innerHeight+50)) {
            this.changeArrow('white');
            this.color = { color: 'white' };
            this.footIcon = 'footIconW';
            this.click = 'click clickW';
            if(this.state.isBottom) { this.scroll = '#calendar'; }
            else { this.scroll = '#player'; }
        }
        if(this.state.scrolled === (2*window.innerHeight)) {
            this.changeArrow('white');
            this.color = { color: 'white' };
            this.footIcon = 'footIconW';
            this.click = 'click clickW';
            if(this.state.isBottom) { this.scroll = '#calendar'; }
            else { this.scroll = '#psibehawior'; }
        }
        if(this.state.scrolled >= (2*window.innerHeight+50)) {
            this.changeArrow('black');
            this.color = { color: 'black' };
            this.footIcon = 'footIconB';
            this.click = 'click';
            if(this.state.isBottom) { this.scroll = '#player'; }
            else { this.scroll = '#psibehawior'; }
        }
        if(this.state.scrolled >= (3*window.innerHeight)) {
            this.changeArrow('black');
            this.color = { color: 'black' };
            this.footIcon = 'footIconB';
            this.click = 'click';
            if(this.state.isBottom) { this.scroll = '#player'; }
            else { this.scroll = '#imageEditor'; }
        }
        if(this.state.scrolled >= (3*window.innerHeight+50)) {
            this.changeArrow('white');
            this.color = { color: 'white' };
            this.footIcon = 'footIconW';
            this.click = 'click clickW';
            if(this.state.isBottom) { this.scroll = '#psibehawior'; }
            else { this.scroll = '#imageEditor'; }
        }
        if(this.state.scrolled >= (4*window.innerHeight)) {
            this.changeArrow('white');
            this.color = { color: 'white' };
            this.footIcon = 'footIconW';
            this.click = 'click clickW';
            if(this.state.isBottom) { this.scroll = '#psibehawior'; }
            else { this.scroll = '#THISportfolio'; }
        }
        if(this.state.scrolled >= (4*window.innerHeight+50)) {
            this.changeArrow('black');
            this.color = { color: 'black' };
            this.footIcon = 'footIconB';
            this.click = 'click';
            if(this.state.isBottom) { this.scroll = '#imageEditor'; }
            else { this.scroll = '#THISportfolio'; }
        }

        window.onscroll = this.checkForTop.bind(this);
        window.onload = this.checkForTop.bind(this);

    return (
        <div className="App">
                <LandingPage/>
                <div className='ppNavBack'>
                    <div className='ppNavBackWhite'></div>
                    <div className='ppNavBackGrey'></div>
                    <div className='ppNavBackWhite'></div>
                    <div className='ppNavBackBlack'></div>
                    <div className='ppNavBackWhite'></div>
                </div>
                <div className={this.ppMain}>
                    <ProjectsPage />
                </div>
            <div className="footParent">
                <div  id="foot" className='phantom'/>
                <div className={this.menuContainer} style={this.isVisible}>
                    <div className={this.cursorClass}>
                    <div className={this.navigation.join(' ')} onClick={this.openNavigation.bind(this)}>
                        <div className="bar1" style={this.backColor}></div>
                        <div className="bar2" style={this.backColor}></div>
                        <div className="bar3" style={this.backColor}></div>
                    </div>
                    </div>
                    <Routes>
                    <div className='SubNavigation'>
                        <div className='nav'>
                            <div id="mainListDiv" className="main_list">
                        <ul className={this.navLinks}>
                            <li id='aboutBtn' className="navBtn">
                                <div id="underline"></div>
                                <NavLink to="/Welcome" activeClassName="selected">ABOUT ME</NavLink>
                            </li>
                            <li className="navBtn">
                                <div id="underline" className='aboutUnder'></div>
                                <NavLink to="/HowToUse" activeClassName="selected">CONTROLS</NavLink>
                            </li>
                            <li className="navBtn">
                                <div id="underline"></div>
                                <NavLink to="/mailMe" activeClassName="selected">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    <div className='subContent'>
                        <Redirect exact from="/" to="/Welcome"/>
                        <Switch>
                            <Route path="/HowToUse">
                                <p>
                                    This website contains voice control. Just say: <span className='colorRed' >selected button name</span> to simulate click. To check button names – say <span className='colorRed' ><i>HELP</i></span>.
                                </p>
                                <p>
                                    Don’t forget to allow use of microphone before start using voice commands and use Google Chrome as a browser!
                                </p>
                            </Route>
                            <Route exact path="/Welcome">
                                <div className='abMeSpan'>
                                    <p>
                                        Hey, I’m Tomek 27 years old full-stack developer living in Cracov.
                                        I’m on the second year of “Higher University of Informatic and Econometry” where I study IT with specialization – Web Applications Developer
                                        and work as Configuration Analyst in AON, where my job is to build Web Applications for our clients and fixing reported bugs on existing web Apps.
                                        In work I’m mostly using t-sql, asp.net, html/css/angular combo and custom CMS systems,
                                        but I spend my free time creating own applications to learn alternative technologies.
                                    </p>
                                    <p>
                                        I’m happy to listen for job offers with possibility to get experience in my current skills or learn something new.
                                        I’m also creating web sites and mobile Apps on demand,
                                        so feel free to contact me <NavLink className='aboutMeHref' to='/mailMe'>personally</NavLink> or on <a className='aboutMeHref' href='https://useme.com/en/roles/contractor/tomasz-orpik,97718/' target='_blank'>useme.com</a>
                                    </p>
                                </div>
                            </Route>
                            <Route path="/mailMe">
                                <span className='mailMenu'>Feel free to mail me!</span>
                                <form id="contactForm" autoComplete="off"
                                    onSubmit={this.submitForm}
                                    action="https://formspree.io/mlewnvdr"
                                    method="POST"
                                >
                                    <div className='mailSender'>
                                        Your contact mail: <input className='mailSenderInput' type='email' name='email' />
                                    </div>
                                    <div className='mailDescription'>
                                        <span className='descriptionSpan'>Mail body:</span>
                                        <textarea className='descriptionInput' name="message"/>
                                    </div>
                                    <button className='mailMeSendButton'>
                                        <span>SUBMIT</span>
                                    </button>
                                </form>
                            </Route>
                            Controls
                        </Switch>
                    </div>
                    </Routes>
                    <div className='iconsBar' style={this.isVisible}>
                        <div id='LangIcon' className={this.footIcon}>
                            <span className='currentLang'style={this.color}>ENG</span>
                            <span className='chooseLang'style={this.colorUp}>POL</span>
                        </div>
                        <div id='LinkedIcon'>
                            <a href="https://www.linkedin.com/in/tomasz-orpik-67b91b175/" target='_blank' className={this.footIcon} style={this.color}><i className="footIcon"><Icon icon={logoLinkedIn} /></i></a>
                        </div>
                        <div id='GitIcon'>
                            <a href="https://github.com/TomaszOrpik" target='_blank' className={this.footIcon} style={this.color}><i className="footIcon"><Icon icon={logoGithub} /></i></a>
                        </div>
                        <div id='CVIcon'>
                            <a href='' target='_blank' className={this.footIcon} style={this.color}><span className='footIcon cvi'>CV</span></a>
                        </div>
                    </div>
                </div>
                <div id='arrowParent' className={this.footerIsActive}>
                    <AnchorLink className={this.click} href={this.scroll}></AnchorLink>
                    <div id="arrow" className={this.arrowClass}></div>

                </div>
            </div>
            <BottomScrollListener onBottom={this.setIsBottom.bind(this)} offset={100}/>
        </div>
    );
   }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}





