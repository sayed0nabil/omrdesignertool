import React from 'react'
import $ from 'jquery'
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
    const fun = modelNumberDeterminedf?modelNumberDeterminedf:()=>(null)
    let fun2 = () => (null);
    if(!modelNumberDeterminedf)
        fun2 = (e) => {
            if(e.target.style.background === 'transparent'){
                e.target.style.background = 'black';
                let sibling = e.target.parentNode.firstChild;
                while(sibling){
                    if(sibling != e.target)
                        sibling.style.background = 'transparent';
                    sibling = sibling.nextSibling
                }
            }else e.target.style.background = 'transparent';
        }
    if(modelNumberDetermined){
        return(
            <div 
            id='modelNumber'
            onClick={(e)=>{
                e.stopPropagation();
                fun();
            }
        }
        onKeyDown={modelNumberDetermined?controlModelNumberWithKeyboard:null}
        tabIndex={modelNumberDetermined?"0":null}
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
            background,
            cursor: 'pointer'
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
            }}
            onClick={fun2}
            >
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
                fun()
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
            }}
            onClick={fun2}>
                {model}
            </div>
        ))}
        </div>
    )
}
export default ModelNumber;
