import React from 'react'

function ModelNumber({
     modelNumber, 
     modelNumberDeterminedf, 
     modelNumberDetermined,
     controlModelNumberWithKeyboard
    }) {
    const {
        x,
        y,
        noModels,
        orientation,
        gridColumnGap,
        gridRowGap,
        color,
        background,
        bubbleWidth,
        borderWidth
    } = modelNumber;
    let models = [];
    for(let i=1; i<=noModels; i++)
        models.push(i);
    if(modelNumberDetermined){
        return(
            <div 
            id='modelNumber'
            onClick={(e)=>{
                e.stopPropagation();
                modelNumberDeterminedf()
            }
        }
        onKeyDown={controlModelNumberWithKeyboard} tabIndex="0"
        style={{
            position: 'absolute',
            left: x + 'px',
            top : y + 'px',
            display: 'grid',
            gridTemplateColumns: orientation === 'horizontal'?'auto '.repeat(noModels): 'auto',
            gridTemplateRows: orientation !== 'horizontal'?'auto '.repeat(noModels): 'auto',
            gridColumnGap: gridColumnGap + 'px',
            gridRowGap: gridRowGap + 'px',
            color,
            background
        }}>
        {models.map(model => (
            <div 
            id={`model${model}`}
            key={model}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: bubbleWidth,
                height: bubbleWidth,
                borderRadius: '50%',
                border: borderWidth + 'px solid ' + color
            }}>
                {model}
            </div>
        ))}
        </div>
        )
    }
    return (
        <div 
            id='modelNumber'
            onClick={(e)=>{
                e.stopPropagation();
                modelNumberDeterminedf()
            }
        }
        style={{
            position: 'absolute',
            left: x + 'px',
            top : y + 'px',
            display: 'grid',
            gridTemplateColumns: orientation === 'horizontal'?'auto '.repeat(noModels): 'auto',
            gridTemplateRows: orientation !== 'horizontal'?'auto '.repeat(noModels): 'auto',
            gridColumnGap: gridColumnGap + 'px',
            gridRowGap: gridRowGap + 'px',
            color,
            background
        }}>
        {models.map(model => (
            <div 
            id={`model${model}`}
            key={model}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: bubbleWidth,
                height: bubbleWidth,
                borderRadius: '50%',
                border: borderWidth + 'px solid ' + color
            }}>
                {model}
            </div>
        ))}
        </div>
    )
}
export default ModelNumber;
