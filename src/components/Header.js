import React from "react";
import styled from "styled-components";

export default function Header(props) {
    const { data } = props;
    if (!data) {
      return <h3>Loading...</h3>
    }

    const StyledDate = styled.div`
    transition: all 0.3s ease-in-out;
    padding: 1%;
    background-color: #fdfcdc;
    :hover {
        font-size: 1.5rem;
        color: ${props => props.theme.tertiaryColor}
    }
    `
    const StyledHeader = styled.div`
        padding: 1%;
        background-color: ${props => props.theme.prettyColor};
        color: #deaaff;
    `

  return (
    <div className="Header">
        <StyledHeader><h1>Nasa Astronomy Photo Of The Day</h1></StyledHeader>
        <StyledDate><p>{`${data.date}`}</p></StyledDate>
    </div>
  )  
}