import React from 'react';
import '../../styles/Slide.scss'

const Slide = props => {
    return(
        <div className='slide'>
            <div className='slide-container'>
                <div className='list-title'>HOME</div>
                <ul className='slide-list'>
                    <li className="slide-list-item">
                        Dashboard
                    </li>
                </ul>
                <div className='list-title'>FORM</div>
                <ul className='slide-list'>
                    <li className="slide-list-item">
                        Dashboard
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Slide;