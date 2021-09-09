import React from "react";

export default function Header(props) {
  const { data } = props;
  if (!data) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="Header">
        <h1>Nasa Astronomy Photo Of The Day</h1>
        <p>{`${data.date}`}</p>
    </div>
  )  
}