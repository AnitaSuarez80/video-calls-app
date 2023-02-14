/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import cardOne from '../images/card-one.png';
import cardTwo from '../images/card-two.png';
import cardThree from '../images/card-three.png';
import cardFour from '../images/card-four.png';
import circularMicOn from '../images/circular-mic-on.png';
import circularMicOff from '../images/circular-mic-off.png';
import '../stylesheet/VideoParticipants.css';
import dark from '../images/horizontal-line-dark.png';
import light from '../images/horizontal-line-light.png';

const VideoParticipants = () => (
    <div className='participants-video-screen'>

        <div className='participants-video-screen-one'>
            <img className='participant-image'
                src={cardOne}
            />
            <p className='participant-video-name'>Cassie Jung</p>

            <img className='circular-mic'
                src={circularMicOff}
            />


        </div>

        <div className='participants-video-screen-two'>
        <img className='participant-image'
                src={cardTwo}
            />
            <p className='participant-video-name'>Alice Wong</p>

            <img className='circular-mic'
                src={circularMicOn}
            />

        </div>

        <div className='participants-video-screen-hree'>
             <img className='participant-image'
                src={cardThree}
            />
            <p className='participant-video-name'>Theresa Webb</p>

            <img className='circular-mic'
                src={circularMicOn}
            />
        </div>

        <div className='participants-video-screen-four'>
        <img className='participant-image'
                src={cardFour}
            />
            <p className='participant-video-name'>Christian Wong</p>

            <img className='circular-mic'
                src={circularMicOff}
            />
        </div>

        <div className='lines'>
            <img className='dark'
                src={dark}
            />

            <img className='light'
                src={light}
            />
        </div>
    </div>
)

export default VideoParticipants;