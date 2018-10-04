import React, {Component} from 'react'
import getRecommendations from '../getRecommendations'
import {ERR_OK} from "../../common/constants";

export default class Recommendation extends Component{
    getExternal = async ()=>{
        const result = await getRecommendations()
        if(result.code === ERR_OK){
            console.log(result.data.slider)
        }
    }
    componentDidMount(){
        this.getExternal()
    }
    render(){
        return null
    }
}