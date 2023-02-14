/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import micro from '../images/micro.png';
import videoCam from '../images/video-cam.png';
import upload from '../images/upload.png';
import rec from '../images/rec.png';
import chat from '../images/chat.png';
import points from '../images/points.png';
import '../stylesheet/ActionMenu.css';

const ActionMenu = () => (
   <div className='container-menu'>
     <div className='action-menu-buttons'>
        <img className='action-menu-icons'
            src={micro}
        /> 

        <img className='action-menu-icons'
            src={videoCam}
        /> 

        <img className='action-menu-icons'
            src={upload}
        /> 

        <img className='action-menu-icons'
            src={rec}
        /> 

        <img className='action-menu-icons'
            src={chat}
        /> 

        <img className='action-menu-icons'
            src={points}
        /> 

        <button className='end-call-button'>End Call</button>


    
    </div>
   </div>
);

export default ActionMenu;