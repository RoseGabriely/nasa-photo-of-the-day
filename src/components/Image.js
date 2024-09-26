import React from "react";
import styled from "styled-components";

export default function Image(props) {
    const { data } = props;
    if (!data) {
        return <h3>Loading...</h3>
    }

    const StyledImage = styled.div`
    background-color: #e0aaff;
    margin: 0px;
    :hover {
        width: 150%;
        height: 150%;
    }
  `

    return (
        <StyledImage className='Image'>
            <img src={`${data.hdurl}`} alt="Nasa's pic of the day!" height='20%' width='20%'/>
        </StyledImage>
    )
}