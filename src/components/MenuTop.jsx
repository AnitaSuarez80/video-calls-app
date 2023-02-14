/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import zoomIcon from '../images/zoom.png';
import '../stylesheet/MenuTop.css';
import ellipse1 from '../images/ellipse-1.png';
import ellipse2 from '../images/ellipse-2.png';
import ellipse3 from '../images/ellipse-3.png';
import ellipse4 from '../images/ellipse-4.png';
import link from '../images/link.png';
import img16 from '../images/image16.png';
import{ BsThreeDotsVertical } from 'react-icons/bs';

const MenuTop = () => (

    <div className='menuTop-container'>

        <div className='zoomIcon-container'>
            <img 
            src={ zoomIcon }
            className='zoomIcon'
            alt='Zoom logo'
            />
        </div>

        <div className='title'>
            <h1>[Internal] Weekly Report Marketing + Sales</h1>
            <p className='date'>June 12th, 2022 | 11:00 AM</p>
        
        </div>

        <div className='circular-photos-participants'>
            <img 
                className='circular-photo-one'
                src={ellipse1}              
            />
            <img 
                className='circular-photo-two'
                src={ellipse2}              
            />
            <img 
                className='circular-photo-three'
                src={ellipse3}              
            />
            <img 
                className='circular-photo-four'
                src={ellipse4}              
            />

            <button className='plus-nine'>+9</button>

        </div >

            <div className='link-button'>
                <button className='link'>
                    <img src={link} />
                    &nbsp;&nbsp;| cem-jnmt-hsu
                </button>  
            </div>  

            <div className='moderator-inf'>
                <button>
                    <img src={img16} />
                    <div>
                    <p className='moderator-name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Adam Joseph</strong></p>
                    <p className='moderator'>Moderator</p>
                    </div>
                    < BsThreeDotsVertical className='three-points-icon'/>
                </button>    
                
            </div>   
  
    </div>

)
export default MenuTop;