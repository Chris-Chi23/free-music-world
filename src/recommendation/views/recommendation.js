import React, {Component, useEffect} from 'react'
import getRecommendations from '../api';
import {ERR_OK} from "../../common/constants";

export const Recommendation = props => {
    const getExternal = async ()=>{
        const result = await getRecommendations()
        if(result.code === ERR_OK){
            console.log(result.data.slider)
        }
    };

    useEffect(getExternal);

}