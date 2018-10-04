import React, {Component} from 'react'
import styled from 'styled-components'
import {UserName, Button} from './common/formControls'
import axios from 'axios'
import {connect} from 'react-redux'

const VALIDATION_RESULT = 'Enter a valid email address.'
const PLACEHOLDER_TEXT = 'Your email address'
const InputWrapper = styled.div`
    margin:2px;
`

const ValidationText = styled.div`
    color:#F1948A;
    font-size:0.8em;
    margin:10px 5px;
`

@connect(state=> {
    console.log('connect is called')
    const tempObj = {}
    tempObj.num = Math.random()
    return {
        userName:state.userName,
        tempObj
    }
})
export default class InitSignin extends Component{
    constructor(props){
        super(props)
        console.log('constructor called')
    }
    state = {
        value:'',
        showError:false
    }
    handleBlur = ev => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const {value} = this.state
        this.setState({
            showError:!re.test(value)
        })
    }
    handleChange = ev => {
        const {value} = ev.target
        this.setState({
            value,
            showError:value === ''
        })
    }
    handleSubmit = ev => {
        ev.preventDefault()
    }
    render(){
        console.log('render called')
        const {showError, value} = this.state
        const userNameProps = {
            value,
            showError,
            onChange:this.handleChange,
            onBlur:this.handleBlur,
            type:"text",
            placeholder:PLACEHOLDER_TEXT
        }

        return (
                <form>
                    <p>{this.props.tempObj.num}</p>
                    <p>{this.props.userName}</p>
                    <InputWrapper>
                        <UserName {...userNameProps}/>
                    </InputWrapper>
                    {/*{showError &&*/}
                        {/*<ValidationText>*/}
                           {/*<span>{VALIDATION_RESULT}</span>*/}
                        {/*</ValidationText>*/}
                    {/*}*/}

                    <Button onClick={this.handleSubmit}>Continue</Button>
                    <Button onClick={this.handleaaa}>aaa</Button>
                </form>
        )
    }
    componentDidMount(){
        console.log('component did mount called')
        this.register()
    }
    register = async () xm=> {
        const result = await axios.post('/user/register',{
            userName:'Chris23',
            password:'cxm321807',
            email:'sss@cxm.com'
        })
        console.log(result)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldcomponentupdate')
        return true
    }

    componentDidUpdate(){
        console.log('componentdidupdate called')
    }
    componentWillUnmount(){
        console.log('conmponent did unmount')
    }
}