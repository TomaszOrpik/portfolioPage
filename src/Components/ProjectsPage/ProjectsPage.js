import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './ProjectsPage.css';

import {Icon} from "@iconify/react";
import logoGithub from "@iconify/icons-ion/logo-github";
import DownloadIcon from "@iconify/icons-ion/download";
import LiveIcon from "@iconify/icons-ion/globe-sharp";

import MPFull from './Assets/musicPlayer - Full.gif';
import CalendarStatic from './Assets/CalendarStatic.jpg';
import pnScreenH from './Assets/psibehawiorV.jpg';
import phScreenV from './Assets/PsiBehV.jpg';
import CSIcon from './Assets/CS.png';
import XMLIcon from './Assets/xml.png';
import SQLIcon from './Assets/SQL.png';
import HTMLBlackIcon from './Assets/HTMLBlack.png';
import HTMLWhiteIcon from './Assets/HTMLWhite.png';
import CSSIcon from './Assets/CSS.png';
import PHPIcon from './Assets/php.png';
import WPIcon from './Assets/wp.png';
import JSIcon from './Assets/JS.png';


class ProjectsPage extends Component {


  render() {

    return (
    <div className="pp">
        <div id='calendar' className="projContainer WhiteContainer">
            <h1 className="projTitle WhiteTitle"><span className='fontRed'>M</span>y<span className='fontRed'>Ca</span>lendar</h1>
            <div className="projBackground WhiteBackground">
                <img className="projImg WhiteProjImg" src={CalendarStatic}/>
            </div>
            <ScrollAnimation animateIn="fadeIn" duration='3' animateOnce='true'>
            <div className="projDescription WhiteDescription">
                    <p> &nbsp;&nbsp;&nbsp;I just created calendar I personally would<br/>like to use.
                        Main philosophy of this app is to have all in one place.</p>
                    <p>With implementation of some APIs, with this calendar you can fast organize your time,
                        live connect with google account to remember your meetings with option of SMS reminders.</p>
                    <p>Also it’s fully compatible with mail options to send and schedule your current and future messages.
                        All your data is hold in local database so you can access them offline whenever you like.</p>
                </div>
                <div className="projLinks WhiteLinks">
                    <a href="https://github.com/TomaszOrpik/MyCalendarWPF" target='_blank'><i className="projIcons pci1"><Icon icon={logoGithub} /></i></a>
                </div>
                <div className='technologies WhiteTech'>
                    <div><p><b><span className='fontRed'>Te</span>chnologies:</b></p></div>
                    <img src={CSIcon} className='projTechIcon WhiteTechIcon1'/>
                    <img src={XMLIcon} className='projTechIcon WhiteTechIcon2'/>
                    <img src={SQLIcon} className='projTechIcon WhiteTechIcon3'/>
                </div>
            </ScrollAnimation>
        </div>

        <div id='player' className="projContainer">
            <h1 className="projTitle"><span className='fontRed'>Co</span>nsole <span className='fontRed'>Mu</span>sic <span className='fontRed'>Pl</span>ayer</h1>
            <div className="projBackground">
                <img className="projImg" src={MPFull}/>
            </div>
            <ScrollAnimation animateIn="fadeIn" duration='3' animateOnce='true'>
            <div className="projDescription">
                <p> &nbsp;&nbsp;&nbsp;One of my first projects while I was learning C# language.
                    The app below have all typical for music player functions like skip to chosen second of the song,
                    play in repeat mode and even create custom playlist.
                    But still main function of this application is to release memory of computer,
                    because to be honest we always use music players in background.
                </p>
            </div>
            <div className="projLinks playerLinks">
                <a href="https://github.com/TomaszOrpik/Music-Player" target='_blank'><i className="projIcons pi1"><Icon icon={logoGithub} /></i></a>
                <a href="./Assets/Console%20Music%20Player.rar" download><i className="projIcons pi2"><Icon icon={DownloadIcon} /></i></a>
            </div>
            <div className="technologies">
                <div><p><b><span className='fontRed'>Te</span>chnologies:</b></p></div>
                <img src={CSIcon} className="projTechIcon"/>
            </div>
            </ScrollAnimation>
        </div>

        <div id='psibehawior' className="projContainer WhiteContainer">
            <h1 className="projTitle WhiteTitle pbTitle"><span className='fontRed'>Ps</span>i <span className='fontRed'>Be</span>hawior</h1>
            <div className="projBackground WhiteBackground">
                <img className="projImg WhiteProjImg PHProjImg" src={pnScreenH}/>
                <img className="projSmallImg WhiteSmallProjImg" src={phScreenV}/>
            </div>
            <ScrollAnimation animateIn="fadeIn" duration='3' animateOnce='true'>
                <div className="projDescription WhiteDescription pbDescription">
                    <p> &nbsp;&nbsp;&nbsp;It’s blog which I had to code and maintain for some time.
                        Base for this site was Ogami theme redesigned by me. Among my works on the page was animating menu elements,
                        optimization of mobile view, change of displayed elements and full deployment of website with WordPress installation on custom server,
                        with programing MySQL database used by site and installing custom plugins for data analyst elements.</p>
                </div>
                <div className="projLinks WhiteLinks">
                    <a href="https://psibehawior.pl/" target='_blank'><i className="projIcons pci1"><Icon icon={LiveIcon} /></i></a>
                </div>
                <div className='technologies WhiteTech pbTech'>
                    <div><p><b><span className='fontRed'>Te</span>chnologies:</b></p></div>
                    <img src={SQLIcon} className='projTechIcon WhiteTechIcon1 pbi1'/>
                    <img src={WPIcon} className='projTechIcon WhiteTechIcon2 pbi2'/>
                    <img src={PHPIcon} className='projTechIcon WhiteTechIcon3 pbi3'/>
                    <img src={HTMLBlackIcon} className='projTechIcon WhiteTechIcon4 pbi4'/>
                    <img src={CSSIcon} className='projTechIcon WhiteTechIcon5 pbi5'/>
                </div>
            </ScrollAnimation>
        </div>

        <div id='imageEditor' className="projContainer">
            <h1 className="projTitle ieTitle"><span className='fontRed'>Si</span>mple <span className='fontRed'>Im</span>age <span className='fontRed'>Ed</span>itor</h1>
            <div className="projBackground">
                <div className='imageEditorFrame'>
                    <iframe className='insideFrame' src='https://tomaszorpik.github.io/Simple_Image_Editor/'>
                        <p>Here should be app overview, but your browser doesn't support iFrame :(</p>
                    </iframe>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" duration='3' animateOnce='true'>
                <div className="projDescription">
                    <p> &nbsp;&nbsp;&nbsp;I created this app to understand JavaScript.
                        Whole app is created in native JS with some HTML5 and CSS3 elements.
                        Thanks to utilization of HTML5 canvas and mouse tracking the drawing is smooth, and gives user possibility to add custom stickers,
                        write text in preferred picture part, resize pictures and save your work on computer.
                        </p>
                    <p>
                        App thanks to HTML5 and CSS3 implementation got responsive picture size so drawing arena scales to loaded photo and position your
                        drawing area horizontally to make work more intuitive.
                    </p>
                </div>
                <div className="projLinks ieLinks">
                    <a href="https://github.com/TomaszOrpik/Simple_Image_Editor" target='_blank'><i className="projIcons pi1"><Icon icon={logoGithub} /></i></a>
                    <a href="https://tomaszorpik.github.io/Simple_Image_Editor/" target='_blank'><i className="projIcons pi2"><Icon icon={LiveIcon} /></i></a>
                </div>
                <div className="technologies ieTech">
                    <div><p><b><span className='fontRed'>Te</span>chnologies:</b></p></div>
                    <img src={HTMLWhiteIcon} className="projTechIcon ieIcon1"/>
                    <img src={CSSIcon} className="projTechIcon ieIcon2"/>
                    <img src={JSIcon} className="projTechIcon ieIcon3"/>
                </div>
            </ScrollAnimation>
        </div>

        <div id="THISportfolio" className='projContainer WhiteContainer'>
         /*code to add later  when the mobile version will be ready*/
        </div>
    </div>
    );
  }
}

export default ProjectsPage;
