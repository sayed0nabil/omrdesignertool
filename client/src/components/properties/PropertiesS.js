import React from 'react';
import PaperProperties from './PaperProperties';
import QuestionBlockProperties from './QuestionBlockProperties';
import ContentBlockProperties from './ContentBlockProperties';
import SeatNumberProperties from './SeatNumberProperties';
import ModelNumberProperties from './ModelNumberProperties';
function PropertiesS({
    valid,
    data,
    answersChange,
    paperChange,
    questionBlockChange,
    questionsChange,
    defaultAnsChange,
    questionChange,
    contentBlockChange,
    seatNumberChange,
    modelNumberChange,
}) {
    const { paperDetermined, questionBlockDetermined, contentBlockDetermined, seatNumberDetermined, determined, contentBlockArray, contentDetermined, modelNumberDetermined } = data;
    let CustomProperties = null;
    if(paperDetermined){
        CustomProperties = (
        <PaperProperties 
          width={data.width}
          height={data.height}
          background={data.background}
          paperChange={paperChange}
        />)
    }else if(questionBlockDetermined){
      CustomProperties = (
        <QuestionBlockProperties 
        questionBlock={data.questionBlockArray[determined]}
        questionBlockChange={questionBlockChange}
        questionsChange={questionsChange}
        answersChange={answersChange}/>
      )
    }else if(contentBlockDetermined){
      CustomProperties = (
      <ContentBlockProperties 
      contentBlockArray={contentBlockArray}
      contentDetermined={contentDetermined}
      contentBlockChange={contentBlockChange}
      urls={data.urls}/>
      )
    }else if(seatNumberDetermined){
      CustomProperties = (
      <SeatNumberProperties 
      seatNumber={data.seatNumber}
      seatNumberChange={seatNumberChange}
      />);
    }
    else if(modelNumberDetermined){
      CustomProperties = (
        <ModelNumberProperties 
          modelNumber={data.modelNumber}
          modelNumberChange={modelNumberChange}
        />);
    }
  return (
    <React.Fragment>
        {/* <button 
              onClick={()=>{
                $('.data').toggle();
              }}
              className='properties'><i className="fa fa-bars" aria-hidden="true"></i></button> */}
              <section className='data col-md-3 p-0'>
                {CustomProperties}
              </section>
    </React.Fragment>
  )
}
export default PropertiesS;
