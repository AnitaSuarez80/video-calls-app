/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import addUser from '../images/add-user.png';
import '../stylesheet/Participants.css';
import ellipse5 from '../images/ellipse-5.png';
import ellipse3 from '../images/ellipse-3.png';
import ellipse1 from '../images/ellipse-1.png';
import micOn from '../images/mic-on.png';
import micOff from '../images/mic-off.png';
import { HiOutlineVideoCameraSlash, HiOutlineVideoCamera  } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";
import darkLine from '../images/vertical-line-dark.png';
import lightLine from '../images/vertical-line-light.png';

const Participants = () => {
    return(
    <div className='participants-container'>

        <div className='participants-top'>
            <h1>Participants</h1>
        
            <button className='add-user-button'>
                <img src={addUser} />
                    Add Participant
            </button>

            <IoIosArrowUp className='arrow'/>

            <img
                className='dark-line'
                src={darkLine}
            />

            <img
                className='light-line'
                src={lightLine}
            />
            


        </div>

        <div className='participants-list'>
        <div className='participants-list-one'>
            <img className='participant-img'
                src={ellipse5}
            />

            <p className='participant-name'>Diane Russell</p>

            <img className='mic-icon'
            src={micOn}
           />

           <HiOutlineVideoCameraSlash  className='videocam-off' />

        </div>

        <div className='participants-list-two'>
            <img className='participant-img'
                src={ellipse3}
            />

            <p className='participant-name'>Guy Hawkins</p>

            <img className='mic-icon-off'
                src={micOff}
           />

           <HiOutlineVideoCameraSlash className='videocam-off' />

        </div>


        <div className='participants-list-three'>
            <img className='participant-img'
                src={ellipse1}
            />

            <p className='participant-name'>Kathryn Murphy</p>

            <img className='mic-icon-off'
            src={micOff}
           />

           <HiOutlineVideoCamera className='videocam-on' />

        </div>
           
        </div>
 

        {/* <p className='participants-list'>
            <img className='participant-img'
                src={require(`../images/ellipse-${props.image}.png`)}
            />

            <p className='participant-name'>{props.name}</p>

            <img className='mic-icon'
            src={require(`../images/mic-${props.icon}.png`)}
           />

             <img className='mic-icon'
            src={require(`../images/mic-${props.icon}.png`)}
           /> 
        </p> */}
        
        </div>
        
    );
}

export default Participants;