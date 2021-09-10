import React from "react";
import styled from "styled-components";


export default function Caption(props) {
    const { data } = props;

    if (!data) {
        return <h3>Loading...</h3>
    }

    const StyledCaption = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');

        padding: 1% 20%;
        font-family: 'Allison', cursive;
        background-color: #c7f9cc;
        transition: all 0.1s ease-in-out;

        :hover {
            font-size: 1.7rem;
            
        }
    `

    return (
        <StyledCaption className='Caption'>
            <p>{`${data.explanation}`}</p>
        </StyledCaption>
    )

}