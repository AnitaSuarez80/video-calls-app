/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ellipse1 from '../images/ellipse-1.png';
import ellipse7 from '../images/ellipse-7.png';
import{ BsThreeDotsVertical } from 'react-icons/bs';
import '../stylesheet/Chats.css';
import { IoIosArrowUp } from "react-icons/io";
import file from '../images/file.png';
import sendMessage from '../images/send-message.png'

const Chats = () => (
    <div className='chats-container'>
        <div className='chats-top'>
        <h1>Chats</h1>

      <div className='group-buttons'>
        <button className='personal-button'> Personal
          <button className='group-button'>Group</button>
        </button>
      </div>
        </div>
        <IoIosArrowUp className='arrow-chats'/>


      <div className='chat'>
        <img  className='chat-image-one'
                src={ellipse1}
            />
            <div className='conversation-one'>
              <p className='participant-name-chat-one'>Kathryn Murphy</p>
              <p className='text-message-one'>Good afternoon, everyone.</p>
              <p className='text-message-one-second'>We will start this meeting</p>
              <p className='time-one'>11:01 AM</p>
    
            </div>
      </div>

      <div className='chat'>
        <img  className='chat-image'
                src={ellipse7}
            />
           <div className='conversation-two'>
              <p className='participant-name-chat-two'>Joshua Abraham</p>
              <p className='text-message-two'>Yes, Let's start this meeting</p>
              <p className='time-two'>11:02 AM</p>
           </div>
      </div>

      <div className='chat'>
        <img className='chat-image-three'
                src={ellipse1}
            />
            <div className='conversation-three'>
              <p className='participant-name-chat-three'>Katrhyn Murphy</p>
              <p className='text-message-three'>Today, we are here to discuss last week's sales.</p>
              <p className='time-three'>11:04 AM</p>
            </div>
      </div>

      < BsThreeDotsVertical className='three-points-chat-icon'/>

      <div className='input-container'>
        <input type='text' className='input' placeholder='Type Something...' /> 
        <img className='input-icon-file'
          src={file}
        />
        <img className='input-icon-send-message'
          src={sendMessage}
        />
      </div>

      {/* <div className='participant-video'>
             <img className='participant-image'
                src={require(`../images/card-${props.image}.png`)}
            />
            <p className='participant-video-name'>{props.name}</p>

            <img className='circular-mic'
                src={require(`../images/circular-mic-${props.icon}.png`)}
            />


       </div> */}

    </div>
)

export default Chats;