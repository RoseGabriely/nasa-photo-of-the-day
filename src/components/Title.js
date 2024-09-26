import React from "react";
import styled from "styled-components";

export default function Title(props) {
    const { data } = props
    if (!data) {
        return <h3>Loading...</h3>
    }

    const StyledTitle = styled.div`
    padding: 1%;
    background-color: #ffcbf2;
    color: ${props => props.theme.primaryColor};
    `

    return (
        <StyledTitle className='Title'>
            <h2>{`${data.title}`}</h2>
        </StyledTitle>
    )
}