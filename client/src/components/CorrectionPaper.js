
import React from 'react';
import SeatNumber from './SeatNumber';
import ModelNumber from './ModelNumber';
import BlockMark from './common/BlockMark';
import './paper.css';
const CorrectionPaper = (props) => {
    const getChildren = (item, index) => {
        if(item.cols > 1 || item.rows > 1){
            console.log('Item Color');
            console.log(item.borderColor);
        const style = {
            display: 'grid',
            gridTemplateColumns: 'auto '.repeat(item.cols),
            gridTemplateRows: 'auto '.repeat(item.rows),
            paddingTop: item.padding + item.paddingTop + 'px',
            paddingBottom: item.padding + item.paddingBottom + 'px',
            paddingLeft: item.padding + item.paddingLeft + 'px',
            paddingRight: item.padding + item.paddingRight + 'px',
            gridColumnGap      : item.gridColumnGap + 'px',
            gridRowGap         : item.gridRowGap    + 'px',
            minWidth           : item.minWidth    + 'px',
            minHeight          : item.minHeight    + 'px',
            borderRadius: item.borderRadius + '%',
            border: `${item.borderWidth}px ${item.borderStyle} ${item.borderColor?item.borderColor:'#000'}`
        }
        return(
            <div style={style} key={index}>
            {item.childrends.map((child, index1) => {
                return getChildren(child, index1);
            })}
            </div>
        )
        }
        else{
            return(
                <div style={{
                    display: 'flex',
                    minWidth: '100px',
                    minHeight: '40px',
                    border: `${item.borderWidth}px ${item.borderStyle} ${item.borderColor}`,
                    paddingTop: item.padding + item.paddingTop + 'px',
                    paddingBottom: item.padding + item.paddingBottom + 'px',
                    paddingLeft: item.padding + item.paddingLeft + 'px',
                    paddingRight: item.padding + item.paddingRight + 'px',
                    pointer: 'cursor',
                    color: item.color,
                    background: item.backgroundt === 'none'?item.background:item.backgroundt,
                    backgroundImage: item.img !== 'none' && item.img?`url(${item.img})`:null,
                    backgroundSize: '100% 100%',
                    justifyContent: item.textAlign,
                    alignItems: item.alignItems,
                    fontSize: item.fontSize,
                    borderRadius: item.borderRadius + '%',
                    borderWidth: item.borderWidth + 'px ',
                    borderStyle: item.borderStyle,
                    borderColor: item.borderColor,
                }}
                key={index}>{item.img==='none'?item.content:null }</div>
            )
        }
    }
    let  paperStyling  = {
        position: 'relative',
        width: props.data.width + 'mm',
        height: props.data.height + 'mm',
        background: props.data.background
    }
    if(props.ToolsVisible === 'none'){
        paperStyling.margin = '10px auto';
    }
    const answerClicked = e => {
        console.log('Answer');
        if(e.target.style.background === 'transparent'){
            let sibling = e.target.parentNode.firstChild;
            let countAll = -1, countBlack = 0;
            while(sibling){
                ++countAll;
                if(sibling.style.background === 'black')
                    ++countBlack;
                sibling = sibling.nextSibling
            }
            if( countBlack + 1 < countAll ){
                e.target.style.background = 'black';
            }
        }else e.target.style.background = 'transparent';
    }  
    let { questionBlockArray,
         questionBlockDetermined, 
         determined, 
         contentBlockArray, 
         seatNumber,
         modelNumber } = props.data;
         console.log(props.data);
    let questionsBlock = questionBlockArray.map((item, index) => {
        let questionsHtml, answerArray = [], questionArray = [];
        let answersStyling = {
            overflow      : 'hidden',
            display       : 'inline-flex',
            justifyContent: 'center',
            alignItems    : 'center',
            marginLeft    : item.answersStyling.marginLeft + 'px',
            marginTop     : item.answersStyling.marginTop  + 'px',
            marginBottom  : item.answersStyling.marginBottom  + 'px',
            marginRight   : item.answersStyling.marginRight  + 'px',
            fontSize      : item.answersStyling.fontSize   + 'px',
            fontWeight    : item.answersStyling.fontWeight,
            width         : item.answersStyling.width + 'px',
            height        : item.answersStyling.height + 'px',
            padding       : item.answersStyling.padding + 'px',
            borderRadius  : item.answersStyling.borderRadius + '%',
            borderWidth   : item.answersStyling.borderWidth + 'px',
            // borderColor   : item.answersStyling.borderColor,
            borderColor   : item.color,
            color         : item.color,
            borderStyle   : item.answersStyling.borderStyle,
            background    : item.answersStyling.background
        }
        let noStyling = {
            fontSize: item.noStyling.fontSize + 'px',
            fontWeight: item.noStyling.fontWeight,
            color     : item.color
        }
        
        let d = item.questionsStyling;
        let questionStyling = {
            display: 'grid',
            justifyContent: 'center',
            paddingTop: (d.padding + d.paddingTop) + 'px',
            paddingRight: (d.padding + d.paddingRight) + 'px',
            paddingBottom: (d.padding + d.paddingBottom) + 'px',
            paddingLeft: (d.padding + d.paddingLeft) + 'px',
            borderRadius: d.borderRadius + '%',
            borderWidth: d.borderWidth + 'px',
            borderStyle: d.borderStyle,
            borderColor: d.borderColor,
        }
        if(item.questionShape === 'horizontal'){
            questionStyling.display = 'flex';
            questionStyling.alignItems = d.alignItems;
            questionStyling.justifyContent = d.justifyContent;
        }
        let { questionsArrayStyling } = item;
        console.log('', questionsArrayStyling);
        
        for(let i=1; i<=item.questionsNumber; i++){
            let styling = questionsArrayStyling[i-1];
            let obj = {
                ...questionStyling,
                color: styling.colort?styling.colort:styling.color,
                background: styling.backgroundt==='transparent'?styling.backgroundt:styling.background,

            }
            if(item.qStyle === 'rows'){
                let row = Math.ceil(i/item.cols);
                if(row%2 === 0 && item.qOption === 'even'){
                    obj.color = item.qcolort==='none'?item.qcolort:item.qcolor;
                    obj.background = item.qbackgroundt==='transparent'?item.qbackgroundt:item.qbackground;
                }
                else if(row%2 === 1 && item.qOption === 'odd'){
                    obj.color = item.qcolort==='none'?item.qcolort:item.qcolor;
                    obj.background = item.qbackgroundt==='transparent'?item.qbackgroundt:item.qbackground;
                }
            }
            else if(item.qStyle === 'columns'){
                let col = i % item.cols === 0?item.cols: i%item.cols;
                if(col%2 === 0 && item.qOption === 'even'){
                    obj.color = item.qcolort==='none'?item.qcolort:item.qcolor;
                    obj.background = item.qbackgroundt==='transparent'?item.qbackgroundt:item.qbackground;
                }
                else if(col%2 === 1 && item.qOption === 'odd'){
                    obj.color = item.qcolort==='none'?item.qcolort:item.qcolor;
                    obj.background = item.qbackgroundt==='transparent'?item.qbackgroundt:item.qbackground;
                }
            }
            for(let i=1; i<=item.choices; i++)
            answerArray.push(String.fromCharCode(64 + i));
            questionArray.push(
                <div style={obj} key={i} id={`i${index}e${i}`}>
                    <span style={noStyling}>{i}. </span>
                    {answerArray.map((item, index2) => (
                        <span 
                        key={i} 
                        style={answersStyling}
                        onClick={answerClicked}
                        id={`i${index}e${i}a${index2+1}`}>
                            {item}
                        </span>
                    ))}
                </div>
            );
            answerArray = [];
        }
        questionsHtml = questionArray.map(item => (item));
        let questionBlockStyling = {
            display: 'grid',
            gridTemplateColumns: 'auto '.repeat(item.cols),
            gridColumnGap      : item.gridColumnGap + 'px',
            gridRowGap         : item.gridRowGap    + 'px',
            position: 'absolute',
            top     : item.top + 'px',
            left    : item.left + 'px',
            background : item.backgroundt==='none'?item.background: item.backgroundt,
            color      : item.color,
            paddingTop    : 
            (item.padding + item.paddingTop) + 'px',
            paddingRight    : 
            (item.padding + item.paddingRight) + 'px',
            paddingBottom    : 
            (item.padding + item.paddingBottom) + 'px',
            paddingLeft    : 
            (item.padding + item.paddingLeft) + 'px',
            borderRadius: item.borderRadius + '%',
            border     : item.borderWidth + 'px ' + item.borderStyle + ' ' + item.borderColor
        }
        if(props.ToolsVisible === '')
            questionBlockStyling.cursor = 'pointer';
        if(questionBlockDetermined){
            if(determined === index){
                return (
                    <div 
                    id={`qb${index}`}
                    className='questionBlock'
                    style={questionBlockStyling} 
                    key={index}>
                        <div className='after'></div>
                        {questionsHtml}
                    </div>
                )
            }else{
                return(
                    <div 
                    id={`qb${index}`}
                    className='questionBlock'
                    style={questionBlockStyling}
                    key={index}>
                        {/* <div className='after'></div> */}
                        {questionsHtml}
                    </div>
                )
            }
        }
        else
        return (
            <div 
            id={`qb${index}`}
            className='questionBlock'
            style={questionBlockStyling} 
            key={index}>
                <div className='after'></div>
                {questionsHtml}
            </div>
        );
    });
    let contentsBlock = contentBlockArray.map((item, index) => {
        return (
            <div 
            id={`content${index}`}
            style={{
                position: 'absolute',
                left: item.left,
                top: item.top,
                display: 'grid',
                gridTemplateColumns: 'auto '.repeat(item.cols),
                gridTemplateRows: 'auto '.repeat(item.rows),
                color: item.color,
                textAlign: item.textAlign,
                minWidth: item.minWidth,
                minHeight: item.minHeight,
                gridColumnGap: item.gridColumnGap + 'px',
                gridRowGap: item.gridRowGap + 'px',
                paddingTop: item.padding + item.paddingTop + 'px',
                paddingBottom: item.padding + item.paddingBottom + 'px',
                paddingLeft: item.padding + item.paddingLeft + 'px',
                paddingRight: item.padding + item.paddingRight + 'px',
                borderRadius: item.borderRadius + '%',
                borderWidth: item.borderWidth + 'px ',
                borderStyle: item.borderStyle,
                borderColor: item.borderColor,
            }} key={index}>
            {item.childrends.map((child, index1) => {
                return getChildren(child, index1);
            })}
            </div>
        )
    });
    const stylingBlocks = [{left: 0,top : 0},{right: 0,top: 0}, {left: 0, bottom: 0}, {right: 0, bottom: 0}]
    return(
        <div style={{width: paperStyling.width, margin:'0 auto'}}>
            <div id='mypaper' style={paperStyling}>
            {stylingBlocks.map(item => (
                <BlockMark 
                positioning={item}
                />
            ))}
            <span id='paperId'>{props.paperId}</span>
            {questionsBlock}
            {contentsBlock}
            {Object.entries(seatNumber).length === 0 ?null:
            <SeatNumber
            seatNumberDeterminedf={null}
            seatNumber={seatNumber}
            seatNumberDetermined={false}
            controlSeatNumberWithKeyboard={null} />}
            {Object.entries(modelNumber).length === 0?null:
            <ModelNumber 
            modelNumber={modelNumber}
            modelNumberDeterminedf={null}
            modelNumberDetermined={false}
            controlModelNumberWithKeyboard={null}
            />
            }
        </div>
    </div>
    )
}

export default CorrectionPaper;