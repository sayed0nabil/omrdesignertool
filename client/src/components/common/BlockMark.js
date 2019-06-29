import React from 'react'

function BlockMark({positioning}) {
    return (
        <div style={{
            position: 'absolute',
            ...positioning,
            width: '10px',
            height: '10px',
            background: 'black'
        }}></div>
    )
}
export default BlockMark;
