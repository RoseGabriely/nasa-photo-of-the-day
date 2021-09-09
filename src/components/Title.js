import React from "react";

export default function Title(props) {
    const { data } = props
    if (!data) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='Title'>
            <h2>{`${data.title}`}</h2>
        </div>
    )
}