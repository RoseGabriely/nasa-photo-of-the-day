import React from "react";

export default function Caption(props) {
    const { data } = props;

    if (!data) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='Caption'>
            <p>{`${data.explanation}`}</p>
        </div>
    )

}