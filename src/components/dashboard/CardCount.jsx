import React from 'react';

const CardCount = props => {
    return(
        <div className='col-sm'>
            <div className='card text-white' style={{backgroundColor:props.color}}>
                <div className='card-body'>
                    <h1>{props.members}</h1>
                    <p>Members Online</p>
                </div>
            </div>
        </div>
    )
}
export default CardCount;   