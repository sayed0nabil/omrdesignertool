import React from 'react'

function QuestionItem(props) {
  const { noStyling, number , width, type, css, direction, choices } = props;
  const arabicLetters = ['أ', 'ب', 'ج', 'د', 'هـ', 'و', 'ز', 'ح', 'ط', 'ى', 'ك', ]

  const no = (
      <span style={{
          fontSize: noStyling.fontSize + 'px',
          fontWeight: noStyling.fontWeight,
          color     : noStyling.color
      }}>
          {number}
      </span>
  )
  const answersArray = [];
  for(let i=0; i<choices; i++){
      let content = arabicLetters[i];
      if(direction === 'ltr')
        content = String.fromCharCode(65 + i);
      answersArray.push(content)
  }
  const answers = answersArray.map((item, index) => {
      return(
          <span 
          key={index}
          style={{
              
          }}>{item}</span>
      )
  })
  return (
    <div style={{
        direction
    }}>
      {no}
      {answers}
    </div>
  )
}
export default QuestionItem;
