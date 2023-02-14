/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import moderator from '../images/man-with-headset-video-call.png';
import record from '../images/record.png'
import {BsFullscreen, BsSoundwave } from "react-icons/bs";
import '../stylesheet/ModeratorScreen.css'

const ModeratorScreen = () => (
    <div className='moderator-container'>
        <img 
            src={moderator} 
            alt="moderator" 
        />
        <div className='recording-time'>
            <button className='record'>
                <img src={record} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24:01:45
            </button>
            
        </div>

        <button className='full-screen-button'>
            <BsFullscreen className='full-screen-icon'/>
        </button>      

        <p className='moderator-name-two'>Adam Joseph</p>

        <button className='sound-wave-button'>
            <BsSoundwave className='sound-wave-icon'/>
        </button>    
    </div>
)
export default ModeratorScreen;

