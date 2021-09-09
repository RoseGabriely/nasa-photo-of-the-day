import React from "react";

export default function Image(props) {
    const { data } = props;
    if (!data) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='Image'>
            <img src={`${data.hdurl}`} alt="Nasa's pic of the day!" height='20%' width='20%'/>
        </div>
    )
}