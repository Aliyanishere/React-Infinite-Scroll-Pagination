import React from 'react'

const Loader = () => {
    return (
        <div className="spinner-border text-success" role="status" style={{margin: 50}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loader;
