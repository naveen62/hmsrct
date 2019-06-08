import React from 'react';
import {Redirect} from 'react-router-dom'

const RedirectComp = props => {
    return(
        <Redirect  to={props.path} />
    )
}
export default RedirectComp;