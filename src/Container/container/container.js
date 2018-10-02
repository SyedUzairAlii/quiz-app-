import React, { Component } from 'react';
import './container.css';
import Button from '../../Components/Button/button'

class Container extends Component {

    render() {
        const { children , login, logout} = this.props
        return (
            <div className = 'container'>
                <div className = 'flex-container'>
                <h1>Quiz App</h1>
                {login && <Button name = {'Logout'} btn = {logout}/>}
                </div>
                {children}
            </div>
        );
    }
}

export default Container;
