import React from 'react'

function ColorBlock(props){
    return (
        <div className="ColorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Export Component
export default ColorBlock
