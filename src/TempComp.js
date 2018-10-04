import React, {Component} from 'react'

export default class TempComp extends Component{
    handleEmail = ev => {
        const {value} = ev.target
        this.props.store.dispatch({
            type:'injectEmail',
            email:value
        })
    }
    handleAge = ev => {
        const {value} = ev.target
        this.props.store.dispatch({
            type:'injectAge',
            age:value
        })
    }
    handleUserName = ev =>{
        const {value} = ev.target
        this.props.store.dispatch({
            type:'success',
            userName:value
        })
    }
    render(){
        return (
            <React.Fragment>
                <input onChange={this.handleEmail}/>
                <input onChange={this.handleAge}/>
                <input onChange={this.handleUserName}/>
            </React.Fragment>
        )
    }
}