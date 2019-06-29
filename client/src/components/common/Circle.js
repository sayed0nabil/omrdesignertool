import React from 'react'

function Circle({
    i,
    content,
    width,
    fontSize,
    borderWidth,
    borderStyle,
    borderColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: paddingLeft + 'px',
      paddingRight: paddingRight + 'px',
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px',
    }}>
      <span 
      id={`s${i}${content}`}
      style={{
        overflow: 'hidden',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: width,
        fontSize: fontSize + 'px',
        borderRadius: '50%',
        borderWidth: borderWidth + 'px',
        borderStyle: borderStyle,
        borderColor: borderColor,
      }}>
      {content}
      </span>
    </div>
  )
}
export default Circle;
