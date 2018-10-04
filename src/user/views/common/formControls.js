import styled from "styled-components";

export const UserName = styled.input`
    outline:none;
    border-radius:4px;
    box-sizing:border-box;
    width:400px;
    height:2.5em;
    font-size:1.3em;
    padding:0 10px;
    border:1px solid #${props => props.showError ? 'F1948A' : 'AEB6B5'};
    &:focus {
        border-color:#566573;
    }
`
export const Button = styled.button`
    font-size:1.3em;
    color:#ECF0F1;
    width:400px;
    height:2.5em;
    box-sizing:border-box;
    border-radius:8px;
    background-color:#E74C3C;
    margin:10px 1px;
`