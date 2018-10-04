import React, {Component} from 'react'
import {Logo} from '../logo/Logo'

class Header extends Component{
    render(){
        return (
            <div>
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="search-box">
                    <input />
                </div>

            </div>
        )
    }
}