import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import axios from 'axios';
import html2canvas from 'html2canvas';
import htmlToImage  from 'html-to-image';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import Paper from './Paper';
import CorrectionPaper from './CorrectionPaper';
import Actions from './Actions';
import Modal from "./Modal.jsx";
import PropertiesS from './properties/PropertiesS';
import "./paperpreview.css";
import { connect } from 'react-redux';
// Common Component
import RowTextField from './common/RowTextField';
import UploadImage from "./UploadImage";
class PaperPreview extends Component {
  componentDidMount(){
      const {paperId} = this.props.match.params;
      const {userId}  = this.props.match.params;
      axios.get(`/api/papers/preview/${paperId}/${userId}`)
      .then(result => {
          this.setState({
              ...result.data,
              paperId,
              modal: {},
              valid: true,
              paperDetermined        : true,
              questionBlockDetermined: false,
              contentBlockDetermined : false,
              seatNumberDetermined   : false,
              modelNumberDetermined  : false,
              determined: -1,
              correctionMode: false,
              contentDetermined: [],
              liveCompnent: {
                name: 'none',
                display: 'normal'
              },
              upload: false

          });
      })
      .catch(err => {
          console.log(err);
          this.props.history.push('/papers');
      });
  }
  // componentDidUpdate(){
  //   if(document.getElementById('contentText'))
  //     document.getElementById('contentText').focus()
  // }
  uploadImage = e => {
    this.setState({
      upload: !this.state.upload
    })
  }
  changeCorrectionMode = e => {
    document.getElementById('correctionMode').classList.toggle('correctionMode');
    this.setState({
      correctionMode: !this.state.correctionMode,
      upload: false
    })
  }
  handelDrop = e => {
          e.persist();
          let { modal } = this.state;
          modal.name = e.dataTransfer.getData("text");
          modal.left = e.pageX - 31;
          modal.top = e.pageY - 200;
          this.setState({ modal });
          $(`#${modal.name}`).modal("show");
    };
  imageUploaded = (newImages) => {
    this.setState({
      upload: false,
      images: newImages
    })
  }
  addModelNumber = () => {
    const { modal } = this.state;
    let modelNumber = {
      x: modal.left,
      y: modal.top,
      noModels: +document.getElementById('noModels').value,
      orientation: 'horizontal',
      gridColumnGap: 0,
      gridRowGap: 0,
      color: '#000000',
      background: '#FFFFFF',
      bubbleWidth: 20,
      borderWidth: 1
    } 
    this.setState({
      modelNumber,
      liveCompnent: {
        name: 'none',
        display: 'normal'
      }
      })
      $(`#componentId`).modal("hide");
      $(`#${this.state.modal.name}`).modal("hide");
  }
  addQuestionBlock = () => {
  let { modal } = this.state;
  modal.questions = +document.getElementById('noQ').value;
  modal.columns = +document.getElementById('noCols').value;
  modal.choices = +document.getElementById('noCho').value;
  if(modal.questions > 0 && modal.columns > 0 && modal.choices > 0){
      let questionsArrayStyling = [];
      for(let k=1; k<=modal.questions; k++){
      questionsArrayStyling.push({
          color: '#FFFFFF',
          colort: 'none',
          background: '#EEEEEE',
          backgroundt: 'transparent'
      })
      }
      let questionBlock = {
      left: modal.left,
      top: modal.top,
      questionsNumber: modal.questions,
      cols: modal.columns,
      choices: modal.choices,
      questionShape: 'horizontal',
      background: '#000000',
      backgroundt: 'transparent',
      color: '#000000',
      qStyle: 'rows',
      qOption: 'even',
      qcolor: '#FFFFFF',
      qcolort: 'none',
      qbackground: '#ff80ff',
      qbackgroundt: 'none',
      gridColumnGap: 0,
      gridRowGap   : 0,
      padding: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      borderRadius: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: '#000000',
      questionsStyling: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding       : 0,
          paddingBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 5,
          borderRadius: 0,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: '#000000',
      },
      questionsArrayStyling,
      noStyling: {
          fontSize: 12,
          fontWeight: 'bold'
      },
      answersStyling: {
          background: 'transparent',
          color     : 'none',
          marginTop    : 0,
          marginRight    : 0,
          marginBottom    : 0,
          marginLeft    : 0,
          fontSize: 12,
          fontWeight: 'bold',
          width: 20,
          height: 20,
          padding: 2,
          borderRadius: 50,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#000000'
      }
      }
      let { questionBlockArray } = this.state;
      questionBlockArray.push(questionBlock);
      this.setState({
      questionBlockArray,
      liveCompnent: {
        name: 'none',
        display: 'normal'
      }
      })
      $(`#componentId`).modal("hide");
      $(`#${this.state.modal.name}`).modal("hide");
  }
  }
  addContentBlock = () => {
  let rows = +document.getElementById('nRows').value;
  let cols = +document.getElementById('nCols').value;
  let { contentBlockArray } = this.state;
  let contentBlock = {
    display: 'grid',
    rows,
    cols,
    childrends: [],
    left: this.state.modal.left,
    top: this.state.modal.top,
    minWidth: 120,
    minHeight: 50,
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    color: '#000000',
    textAlign: 'left',
    gridRowGap: 0,
    gridColumnGap: 0,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  };
  for(let i=1; i<=(rows*cols); i++)
      contentBlock.childrends.push({
        cols: 1,
        rows: 1,
        content: 'Dummy Text',
        img    : 'none',
        color: '#000000',
        background: '#000000',
        backgroundt: 'transparent',
        borderRadius: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 12,
        fontWeight: 'normal'
      })
  contentBlockArray.push(contentBlock);
  this.setState({
    contentBlockArray,
    liveCompnent: {
      name: 'none',
      display: 'normal'
    }
  })
  $(`#${this.state.modal.name}`).modal("hide");
  }
  addSeatNumber = () => {
    let { modal, liveCompnent } = this.state;
    modal.noRowORColumns = +document.getElementById('nRowsORColumns').value;
    let horizontal = false;
    if(liveCompnent.display === "horizontal")
        horizontal = true;
    this.setState({
      seatNumber: {
        left: modal.left,
        top: modal.top,
        noRowORColumns: modal.noRowORColumns,
        horizontal,
        circleWidth: 20,
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
        padding: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 0,
        paddingRight: 0,
      },
      liveCompnent: {
        name: 'none',
        display: 'normal'
      }
    })
    $(`#componentId`).modal("hide");
    $(`#${this.state.modal.name}`).modal("hide");
  }
  contentBlockChange = (e) => {
  let { contentBlockArray, contentDetermined } = this.state;
  let rootContentBlockElement =
  contentBlockArray[contentDetermined[contentDetermined.length - 1].index];
  let item = rootContentBlockElement;
  for(let i=contentDetermined.length - 2; i>=0; i--){
      item = item.childrends[contentDetermined[i]];
  }
  if(e.target.name === 'cols' || e.target.name === 'rows'){
    if(+e.target.value > item[e.target.name]){
      if(item.content) delete item.content;
      item.gridColumnGap = 0;
      item.gridRowGap = 0;
      item.minWidth = 0;
      item.minHeight = 0;
      item.borderRadius = 0;
      item.borderWidth = 1;
      item.borderStyle = 'solid';
      item.borderColor = '#000';
      item[e.target.name] = +e.target.value;
      const all = item.cols * item.rows;
      if(!item.childrends) item.childrends =[];
      for(let i=item.childrends.length + 1; i<=all; i++){
        item.childrends.push({
        cols: 1,
        rows: 1,
        content: 'Dummy Text',
        img    : 'none',
        color: '#000',
        background: '#000',
        backgroundt: 'transparent',
        borderRadius: 0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
        textAlign: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 12
        })
      }
    }
    else{
      item[e.target.name] = e.target.value;
      let removed = 0;
      if(e.target.name === 'cols')
        removed = item.rows;
      else if(e.target.name === 'rows')
        removed = item.cols;
      item.childrends.splice(item.childrends.length-removed, removed);
      if(item.rows === 1 && item.cols === 1){
        if(item.children) delete item.children;
        item.content = 'Dummy Text'
      }
      item.content = 'Dummy Text'
    }
  }
  else{
      item[e.target.name] = e.target.value!==''?isNaN(e.target.value)?e.target.value:+e.target.value: e.target.value;
  }
  this.setState({
    contentBlockArray
  })
  }
  changeValidToSetting = (e) =>{
    e.preventDefault();
    this.setState({
        valid: true
    })
    }
  changeValidToProperties = (e) =>{
    e.preventDefault();
    this.setState({
        valid: false
    })
    }
  paperDeterminedf = () => {
  this.setState({
      paperDetermined        : true,
      questionBlockDetermined: false,
      contentBlockDetermined : false,
      seatNumberDetermined   : false,
      modelNumberDetermined   : false,
      determined: -1,
  });
  }
  questionBlockDeterminedf = (index) => {
  this.setState({
      paperDetermined        : false,
      questionBlockDetermined: true,
      contentBlockDetermined : false,
      seatNumberDetermined   : false,
      modelNumberDetermined   : false,
      determined: index,
  });
  }
  seatNumberDeterminedf = () => {
    this.setState({
      paperDetermined        : false,
      questionBlockDetermined: false,
      contentBlockDetermined : false,
      seatNumberDetermined   : true,
      modelNumberDetermined   : false,
  });
  }
  modelNumberDeterminedf = () => {
    this.setState({
      paperDetermined        : false,
      questionBlockDetermined: false,
      contentBlockDetermined : false,
      seatNumberDetermined   : false,
      modelNumberDetermined   : true,
  });
  }
  questionBlockChange = (e) => {
  let { questionBlockArray, determined } = this.state;
  questionBlockArray[determined][e.target.name] = isNaN(e.target.value)?e.target.value:+e.target.value
  if(e.target.name === 'questionsNumber'){
    const actualno = questionBlockArray[determined].questionsArrayStyling.length;
    const virtualInput = +e.target.value;
    let array = questionBlockArray[determined].questionsArrayStyling;
    if(virtualInput <= actualno){
        array.splice(virtualInput + 1, actualno - virtualInput);
        questionBlockArray[determined].questionsArrayStyling = array;
    }else{
      for(let i=actualno; i<=virtualInput; i++)
      questionBlockArray[determined].questionsArrayStyling.push({
        color: "#FFFFFF",
        colort: "none", 
        background: "#EEEEEE", 
        backgroundt: "transparent"
      });
    }
  }
  this.setState({
      questionBlockArray
  })
  }
  seatNumberChange = (e) => {
    this.setState({
      seatNumber: {
        ...this.state.seatNumber,
        [e.target.name]: isNaN(e.target.value)? e.target.name === 'horizontal'?e.target.value==='horizontal'?true : false :e.target.value: +e.target.value
      }
    })
  }
  modelNumberChange = (e) => {
    this.setState({
      modelNumber: {
        ...this.state.modelNumber,
        [e.target.name]: isNaN(e.target.value)? e.target.value: +e.target.value
      }
    })
  }
  questionsChange = (e) => {
  let { questionBlockArray } = this.state;
  questionBlockArray[this.state.determined].questionsStyling[e.target.name] = isNaN(e.target.value)?e.target.value:+e.target.value
  this.setState({
      questionBlockArray
  })
  }
  paperChange = e => {
  this.setState({
      [e.target.name]: e.target.value
  });
  }
  saveChanges = (e) => {
      let data = {
          filename: this.state.filename,
          width   : this.state.width,
          height  : this.state.height,
          background: this.state.background,
          questionBlockArray: this.state.questionBlockArray,
          contentBlockArray: this.state.contentBlockArray,
          seatNumber: this.state.seatNumber,
          modelNumber: this.state.modelNumber?this.state.modelNumber:{}
      }
      axios.post(`/api/papers/edit`, {
          paperId: this.props.match.params.paperId,
          data : JSON.stringify(data)
      })
      .then( result => {
          // console.log(result.data);
      })
      .catch( err => console.log(err));
  }
  delete = (e) =>{
    if(window.confirm('Are You Sure To Delete Page ?')){
      axios.post('/api/papers/delete', {
        paperId: this.props.match.params.paperId
      })
      .then( result => {
        this.props.history.push('/mypapers');
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  takeScreenShot = (e) =>{
    const paper = document.getElementById('mypaper');
    html2canvas(paper, { scale: 1 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save(`${this.state.filename}.pdf`);
    });
  }
  converthtml2Image = (e) => {
    domtoimage.toJpeg(document.getElementById('mypaper'))
    .then( pic => {
        window.saveAs(pic, `${this.state.filename}.jpeg`);
    });
  }
  screenshot(){
    html2canvas(document.getElementById('mypaper')).then(function(canvas) {
    
    document.getElementById('mypaper').appendChild(canvas);
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    a.download = 'image.jpg';
    a.click();
    });
    }
  controlWithKeyboard = (e) =>{
    const code = e.keyCode;
    if(code === 46){
      if(window.confirm('Are You Sure To Delete This Questions')){
        let {questionBlockArray, determined} = this.state;
        questionBlockArray.splice(determined, 1);
        this.setState({
          questionBlockArray,
          determined: -1,
          paperDetermined        : true,
          questionBlockDetermined: false
        });
      } 
    }
    else if(code === 37){
      let {questionBlockArray} = this.state;
      questionBlockArray[this.state.determined].left -= 10;
      this.setState({
        questionBlockArray
      })
    }
    else if(code === 38){
      let {questionBlockArray} = this.state;
      questionBlockArray[this.state.determined].top -= 10;
      this.setState({
        questionBlockArray
      })
    }
    else if(code === 39){
      let {questionBlockArray} = this.state;
      questionBlockArray[this.state.determined].left += 10;
      this.setState({
        questionBlockArray
      })
    }
    else if(code === 40){
      let {questionBlockArray} = this.state;
      questionBlockArray[this.state.determined].top += 10;
      this.setState({
        questionBlockArray
      })
    }
  }
  controlModelNumberWithKeyboard = (e) => {
    const code = e.keyCode;
    let { modelNumber } = this.state;
    if(code === 46){
      if(window.confirm('Are You Sure To Delete Model Numbers')){
        this.setState({
          modelNumber: {},
          determined: -1,
          paperDetermined        : true,
          modelNumberDetermined: false
        });
      } 
    }
    else if(code === 37){
      modelNumber.x -= 10;
      this.setState({
        modelNumber
      })
    }
    else if(code === 38){
      modelNumber.y -= 10;
      this.setState({
        modelNumber
      })
    }
    else if(code === 39){
      modelNumber.x += 10;
      this.setState({
        modelNumber
      })
    }
    else if(code === 40){
      modelNumber.y += 10;
      this.setState({
        modelNumber
      })
    }
  }
  controlSeatNumberWithKeyboard = (e) => {
    const code = e.keyCode;
    let { seatNumber } = this.state;
    if(code === 46){
      if(window.confirm('Are You Sure To Delete Model Numbers')){
        this.setState({
          seatNumber: {},
          determined: -1,
          paperDetermined        : true,
          seatNumberDetermined: false
        });
      } 
    }
    else if(code === 37){
      seatNumber.left -= 10;
      this.setState({
        seatNumber
      })
    }
    else if(code === 38){
      seatNumber.top -= 10;
      this.setState({
        seatNumber
      })
    }
    else if(code === 39){
      seatNumber.left += 10;
      this.setState({
        seatNumber
      })
    }
    else if(code === 40){
      seatNumber.top += 10;
      this.setState({
        seatNumber
      })
    }
  }
  controlContentBlock = (e) => {
    const code = e.keyCode;
    let { contentBlockArray, contentDetermined } = this.state;
    if(code === 46){
      if(window.confirm('Are You Sure To Delete This Content Block')){
        contentBlockArray.splice(contentDetermined[0].index, 1);
        this.setState({
          contentDetermined: [],
          contentBlockDetermined: false,
          contentBlockArray,
          determined: -1,
          paperDetermined        : true,
        });
      } 
    }
    else if(code === 37){
      contentBlockArray[contentDetermined[0].index].left -= 10;
      this.setState({
        contentBlockArray
      })
    }
    else if(code === 38){
      contentBlockArray[contentDetermined[0].index].top -= 10;
      this.setState({
        contentBlockArray
      })
    }
    else if(code === 39){
      contentBlockArray[contentDetermined[0].index].left += 10;
      this.setState({
        contentBlockArray
      })
    }
    else if(code === 40){
      contentBlockArray[contentDetermined[0].index].top += 10;
      this.setState({
        contentBlockArray
      })
    }
  }
  x = [];
  getAllChildren  = cb =>{
      if(cb.rows === 1 && cb.cols === 1){
        if(cb.childrends){
          if(cb.childrends[0].img && cb.childrends[0].img !== 'none'){
            this.x.push(cb.childrends[0].img);
          }
        }else if( cb.img !== 'none' && cb.img){
          this.x.push(cb.img);
        }
      }else{
        if(cb.childrends){
          cb.childrends.forEach(child => {
            this.getAllChildren(child);
          })
        }
      }
  }
  takeIt = (e) =>{
    this.state.contentBlockArray.forEach(cb => {
      this.getAllChildren(cb);
    });
    const dataImages = {
      userId: this.props.match.params.userId,
      images: this.x
    }
    const { isAuthenticated } = this.props.auth;
    if(isAuthenticated){
      const data = {
        name: this.state.filename,
        access: 'public',
        width: this.state.width,
        height: this.state.height,
        bg    : this.state.background,
        questionBlockArray: this.state.questionBlockArray,
        contentBlockArray: this.state.contentBlockArray,
        seatNumber: this.state.seatNumber,
        dataImages
      }
      axios.post('/api/papers/createpaper', data)
      .then( result => {
          alert('Successfully Copied');
      })
      .catch( err => {
        if(err.response.data.name)
           alert(err.response.data.name);
        else
           console.log(err);
      });
    }
  }
  answersChange = (e) =>{
    let { questionBlockArray } = this.state;
    questionBlockArray[this.state.determined].answersStyling[e.target.name] = isNaN(e.target.value)?e.target.value:+e.target.value
    if(e.target.name === 'width')
    questionBlockArray[this.state.determined].answersStyling['height'] = isNaN(e.target.value)?e.target.value:+e.target.value
    else if(e.target.name === 'fontSize')
      questionBlockArray[this.state.determined].noStyling.fontSize = isNaN(e.target.value)?e.target.value:+e.target.value;
    this.setState({
        questionBlockArray
    })
  }
  contentDetermined = (index) => {
    let { contentDetermined } = this.state;
    contentDetermined.splice(0, contentDetermined.findIndex(obj => (obj.end)) + 1);
    contentDetermined.push(index);
    this.setState({
      contentDetermined,
      paperDetermined        : false,
      questionBlockDetermined: false,
      contentBlockDetermined : true,
      seatNumberDetermined   : false,
      modelNumberDetermined   : false,
      determined: -1,
    });
  }
  createJsonFileNew = (e) => {
    let json = {
      name: this.state.filename,
      width: document.getElementById('mypaper').offsetWidth,
      height: document.getElementById('mypaper').offsetHeight,
      paperId: this.state.paperId,
      paperIdPosition: {
        width: document.getElementById('paperId').offsetWidth,
        height: document.getElementById('paperId').offsetHeight
      },
      sections: []
    };
    this.state.questionBlockArray.forEach((item, index) => {
      let itemInfo = {
        name: 'questionBlock',
        x: item.left,
        y: item.top,
        width: document.getElementById(`qb${index}`).offsetWidth,
        height: document.getElementById(`qb${index}`).offsetHeight,
        orientation: item.questionShape,
        partWidth: 
        document.getElementById(`i${index}e${1}`)?document.getElementById(`i${index}e${1}`).offsetWidth: -1,
        partHeight:
        document.getElementById(`i${index}e${1}`)?document.getElementById(`i${index}e${1}`).offsetHeight: -1,
        bubbleWidth: item.answersStyling.width,
        parts: []
      }
      for(let i=1; i<=item.questionsNumber; i++){
        let bubbles = [];
        for(let j=1; j<=item.choices; j++){
          bubbles.push({
            name: document.getElementById(`i${index}e${i}a${j}`).innerText,
            x: document.getElementById(`i${index}e${i}a${j}`).offsetLeft + itemInfo.x,
            y: document.getElementById(`i${index}e${i}a${j}`).offsetTop + itemInfo.y,
          })
        }
        itemInfo.parts.push({
          name: `q${i}`,
          x: document.getElementById(`i${index}e${i}`).offsetLeft + itemInfo.x,
          y: document.getElementById(`i${index}e${i}`).offsetTop + itemInfo.y,
          bubbles
        });
      }
    json.sections.push(itemInfo);
    });
    if(document.getElementById('seatnumber')){
      let seatNumber = {
        name: 'seatNumber',
        x: this.state.seatNumber.left,
        y: this.state.seatNumber.top,
        width: document.getElementById('seatnumber').offsetWidth,
        height: document.getElementById('seatnumber').offsetHeight,
        orientation: this.state.seatNumber.horizontal?'horizontal':'vertical',
        bubbleWidth: this.state.seatNumber.circleWidth,
        parts: []
      }
      let style = 'row';
      if(seatNumber.orientation === 'horizontal'){
        seatNumber.partHeight = Math.round(seatNumber.height / this.state.seatNumber.noRowORColumns);
        seatNumber.partWidth  = seatNumber.width;
      }else{
        seatNumber.partWidth = Math.round(seatNumber.width / this.state.seatNumber.noRowORColumns)
        seatNumber.partHeight  = seatNumber.height;
        style = 'column';
      }
      for(let i=1; i<=this.state.seatNumber.noRowORColumns; i++){
        let bubbles = []
        for(let j=0; j<10; j++)
              bubbles.push({
                name: document.getElementById(`s${i}${j}`).innerText,
                x: document.getElementById(`s${i}${j}`).offsetLeft + seatNumber.x,
                y: document.getElementById(`s${i}${j}`).offsetTop + seatNumber.y,
              })
        seatNumber.parts.push({
          name: style + i,
          x: document.getElementById(`s${i}${0}`).offsetLeft + seatNumber.x,
          y: document.getElementById(`s${i}${0}`).offsetTop + seatNumber.y,
          bubbles
        });
      }
      json.sections.push(seatNumber);
    }
    if(document.getElementById('modelNumber')){
      let modelNumber = {
        name: 'modelNumber',
        x: this.state.modelNumber.x,
        y: this.state.modelNumber.y,
        width: document.getElementById('modelNumber').offsetWidth,
        height: document.getElementById('modelNumber').offsetHeight,
        orientation: this.state.modelNumber.orientation,
        bubbleWidth: this.state.modelNumber.bubbleWidth,
        partWidth: document.getElementById('modelNumber').offsetWidth,
        partHeight: document.getElementById('modelNumber').offsetHeight,
        parts: [{
          name: this.state.modelNumber.orientation === 'horizontal'? 'row': 'column',
          x: this.state.modelNumber.x,
          y: this.state.modelNumber.y,
          bubbles: []
        }]
      };
      for(let i=1; i<=this.state.modelNumber.noModels; i++){
        modelNumber.parts[0].bubbles.push({
          name: String(i),
          x: document.getElementById(`model${i}`).offsetLeft + modelNumber.x,
          y: document.getElementById(`model${i}`).offsetTop + modelNumber.y,
        })
      }
      json.sections.push(modelNumber)
    }
    this.state.contentBlockArray.forEach((item, index) => {
      json.sections.push({
        name: 'contentBlock',
        x: item.left,
        y: item.top,
        width: 
        document.getElementById(`content${index}`)?document.getElementById(`content${index}`).offsetWidth: -1,
        height:
        document.getElementById(`content${index}`)?document.getElementById(`content${index}`).offsetHeight: -1,
        bubbleWidth: 0,
        orientation: 'horizontal',
        partWidth: 0,
        partHeight: 0,
        parts: []
      });
    });
    e.target.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(JSON.stringify(json));
  }
  changeLiveComponent = (e) => {
    const { liveCompnent } = this.state;
    liveCompnent.name = e.target.value;
    this.setState({
      liveCompnent
    })
  }
  changeDisplayMethod = (e) => {
    const { liveCompnent } = this.state;
    liveCompnent.display = e.target.value;
    this.setState({
      liveCompnent
    })
  }
  addComponent = (e) => {
    const { liveCompnent } = this.state;
    if(liveCompnent.name === 'questionBlock'){
      this.addQuestionBlock();
    }
    else if(liveCompnent.name ==='contentBlock'){
      this.addContentBlock();
    }
    else if(liveCompnent.name === 'seatNumber'){
      this.addSeatNumber();
    }
    else if(liveCompnent.name === 'modelNumber'){
      this.addModelNumber();
    }
  }
  render() {
      if(!this.state){
        return(
            <p>Not Found Yet</p>
        )
      }
      else{
          const authUser = this.props.auth.user.id;
          const paperUser = this.props.match.params.userId;
          let componentFeatures = null;
          if(this.state.liveCompnent.name === 'questionBlock'){
            componentFeatures =(
                    <div className="feature">
                      <div className="grid">
                      <RowTextField
                      label='Number Of Questions'
                      type='number'
                      id='noQ'
                      placeholder='Enter number of questions'
                      />
                      <RowTextField
                      label='Number Of Columns'
                      type='number'
                      id='noCols'
                      placeholder='Enter number of columns'
                      />
                      <RowTextField
                      label='Number Of Choices'
                      type='number'
                      id='noCho'
                      placeholder='Enter number of choices'
                      />
                    </div>
                    </div>
                  )
          }
          else if(this.state.liveCompnent.name === 'contentBlock'){
            componentFeatures = (
                    <div className="grid">
                      <RowTextField
                      label='Number of Rows'
                      id='nRows'
                      type='number'
                      placeholder='Enter number of rows'/>
                      <RowTextField
                      label='Number of Columns'
                      id='nCols'
                      type='number'
                      placeholder='Enter Number of columns'
                      />
                    </div>
            )
          }
          else if(this.state.liveCompnent.name === 'seatNumber'){
            let displayMethod = null;
            if(this.state.liveCompnent.display === 'horizontal'){
                displayMethod = (
                  <RowTextField
                      label='Number of Rows'
                      id='nRowsORColumns'
                      type='number'
                      placeholder='Enter number of rows'/>
                )
            }
            else if(this.state.liveCompnent.display === 'vertical'){
                displayMethod = (
                  <RowTextField
                      label='Number of Columns'
                      id='nRowsORColumns'
                      type='number'
                      placeholder='Enter Number of columns'
                      />
                )
            }
            componentFeatures = (
              <div className="features">
                  <label htmlFor="display">Display Method</label>
                  <select 
                  name="display" 
                  id="" 
                  className="custom-select"
                  value={this.state.liveCompnent.display}
                  onChange={this.changeDisplayMethod}>
                    <option value="none">None</option>
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">vertical</option>
                  </select>
                    <div className="grid">
                      {displayMethod}
                    </div>
              </div>
            )
          }
          else if(this.state.liveCompnent.name === 'modelNumber'){
            componentFeatures =(
                    <div className="feature">
                      <div className="grid">
                      <RowTextField
                      label='Number Of Models'
                      type='number'
                      id='noModels'
                      placeholder='Enter number of Models'
                      />
                    </div>
                    </div>
                  )
          }
          let ToolsVisible = 'none';
          if(authUser === paperUser)
                ToolsVisible = '';
          let takeItToMyWorkSpace = null
          if(this.props.auth.isAuthenticated && authUser !== paperUser)
              takeItToMyWorkSpace = (
                <div className='text-center'>
                <button 
                className='btn takebtn'
                onClick={this.takeIt}>
                Take It To My Workspace
                </button>
                </div>
              );
        return (
          <div style={{position:'relative', paddingBottom:'49px', paddingTop: '35px', background:'rgba(148, 144, 144, 0.6)'}}>
            <div className='overflow-hidden pt-5'>
                
              <div style={
                {
                  borderTop:'1px solid #888'
                }
              }>
                <div className='container'>
                <h2 className='pb-2 pt-2 pl-3 text-center'>{this.state.filename}</h2>
                {takeItToMyWorkSpace}
                </div>
                <UploadImage 
                upload={this.state.upload}
                uploadImage={this.uploadImage}
                imageUploaded={this.imageUploaded} />
                {ToolsVisible===''?(
                <Actions 
                    valid={this.state.valid}
                    filename={this.state.filename}
                    saveChanges={this.saveChanges}
                    delete={this.delete}
                    takeScreenShot={this.converthtml2Image}
                    createJsonFile={this.createJsonFileNew}
                    uploadImage   = {this.uploadImage}
                    changeCorrectionMode={this.changeCorrectionMode}
                    
                />):null}
                <div className="row" style={{position:'relative'}}>
                
                <div className={`${ToolsVisible === '' && !this.state.correctionMode? "col-md-9 fullpaperwidth" : " col-md-12"}`}>
                {this.state.correctionMode?(
                  <CorrectionPaper 
                  paperId = {this.state.paperId}
                  seatNumber={this.state.seatNumber}
                  controlWithKeyboard = {null}
                  controlContentBlock = {null}
                  controlSeatNumberWithKeyboard={null}
                  controlModelNumberWithKeyboard={null}
                  ToolsVisible={ToolsVisible}
                  contentDetermined={this.contentDetermined}
                  handelDrop={this.handelDrop}
                  data={this.state}
                  paperDeterminedf = {null}
                  questionBlockDeterminedf={null}
                  seatNumberDeterminedf={null}
                  modelNumberDeterminedf={null}
                  userId={this.props.match.params.userId} />
                ):<Paper 
                paperId = {this.state.paperId}
                seatNumber={this.state.seatNumber}
                controlWithKeyboard = {this.controlWithKeyboard}
                controlContentBlock = {this.controlContentBlock}
                controlSeatNumberWithKeyboard={this.controlSeatNumberWithKeyboard}
                controlModelNumberWithKeyboard={this.controlModelNumberWithKeyboard}
                ToolsVisible={ToolsVisible}
                contentDetermined={this.contentDetermined}
                handelDrop={this.handelDrop}
                data={this.state}
                paperDeterminedf = {this.paperDeterminedf}
                questionBlockDeterminedf={this.questionBlockDeterminedf}
                seatNumberDeterminedf={this.seatNumberDeterminedf}
                modelNumberDeterminedf={this.modelNumberDeterminedf}
                userId={this.props.match.params.userId}/>
                }
               
                </div>
                {!this.state.correctionMode &&
                 authUser === paperUser?(
                <PropertiesS 
                valid = {this.state.valid}
                data={this.state} 
                answersChange = {this.answersChange}
                paperChange={this.paperChange}
                questionBlockChange={this.questionBlockChange}
                questionsChange={this.questionsChange}
                defaultAnsChange={this.defaultAnsChange}
                questionChange={this.questionChange} 
                contentBlockChange={this.contentBlockChange}
                seatNumberChange={this.seatNumberChange}
                modelNumberChange={this.modelNumberChange}/>
                ):null}
                <Modal 
                head="Question Block" 
                id="qusetionBLock"
                handelClick={this.addQuestionBlock}>
                  <div>
                    <label>Number of Questions</label>
                    <input 
                    type="number" 
                    id='noOfQuestions'
                    required/>
                  </div>
                  <div>
                    <label>Number of Columns</label>
                    <input 
                    type="number"
                    id='noOfColumns'
                    required/>
                  </div>
                  <div>
                    <label>Number of Choices</label>
                    <input 
                    type="number"
                    id='noOfChoices'
                    required/>
                  </div>
                </Modal>
                <Modal
                  head="content Block"
                  id="contentBlock"
                  handelClick={this.addContentBlock}
                >
                  <div>
                    <label>Enter Number Of Columns</label>
                    <input type="number" id="colN" />
                  </div>
                  <div>
                    <label>Enter Number Of Rows</label>
                    <input type="number" id="rowN" />
                  </div>
                </Modal>
                <Modal head="Seat number" id="seatNumber">
                  <div>
                    <label>posX</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>posY</label>
                    <input type="text" />
                  </div>
                </Modal>
                <Modal 
                head="Create Component" 
                id="componentId"
                handelClick={this.addComponent}>
                  <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="component"></label>
                          <select 
                          name="componentName" 
                          className="custom-select"
                          id='componentName_id'
                          value={this.state.liveCompnent.name}
                          onChange={this.changeLiveComponent}>
                            <option value="None">None</option>
                            <option value="questionBlock">Question Block Component</option>
                            <option value="contentBlock">Content Block Component</option>
                            <option value="seatNumber">Seat Number Component</option>
                            <option value="modelNumber">Model Number Component</option>
                          </select>
                          {componentFeatures}
                        </div>
                      </div>
                  </div>
                </Modal>
              </div>
              </div>
            </div>
          </div>
        );
      }
  }
}
const mapStateToProps = (state) =>(
    {
        auth: state.auth,
        errors: state.errors
    }
)
export default connect(mapStateToProps)(PaperPreview);
