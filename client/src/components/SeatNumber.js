import React from 'react';
import Circle from './common/Circle';
function SeatNumber({
    seatNumber, 
    seatNumberDetermined,
    seatNumberDeterminedf,
    controlSeatNumberWithKeyboard
}) {
    const {left,
           top, 
           noRowORColumns, 
           horizontal,
           circleWidth,
           fontSize,
           borderWidth, 
           borderStyle, 
           borderColor, 
           padding,
           paddingLeft,
           paddingRight,
           paddingTop,
           paddingBottom
        } = seatNumber;
    const style = {
        position: 'absolute',
        left,
        top,
        display: 'grid',
        gridTemplateColumns: 'auto '.repeat(horizontal?10:noRowORColumns),
        gridTemplateRows   : 'auto '.repeat(horizontal?noRowORColumns:10),
        gridAutoFlow: horizontal?'row':'column'
    }
    let items = [];
    for(let i=1; i<=noRowORColumns; i++)
        for(let j=0; j<10; j++)
            items.push(
                <Circle
                key={`${i}s${j}`}
                i={i}
                content={j} 
                width={circleWidth}
                fontSize={fontSize}
                borderWidth={borderWidth}
                borderStyle={borderStyle}
                borderColor={borderColor}
                paddingLeft={paddingLeft + padding}
                paddingRight={paddingRight + padding}
                paddingTop={paddingTop + padding}
                paddingBottom={paddingBottom + padding}
                />
            )
    const fun = seatNumberDeterminedf?seatNumberDeterminedf:()=>(null)
  return (            
    <div 
    onClick={(e)=>{
            e.stopPropagation();
            fun()
        }
    }
    onKeyDown={seatNumberDetermined?controlSeatNumberWithKeyboard:null}
    tabIndex={seatNumberDetermined?"0":null}
    style={style}
    id='seatnumber'
     >
    {items.map(item => (item))}
    </div>
  )
}
export default SeatNumber;