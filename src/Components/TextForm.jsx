import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const onUpCase = ()=>{
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert('Text Transform To Uppercase','success');
  }
  const onLowCase = ()=>{
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert('Text Transform To Lowercase','success');
  }
  const onChange = (event)=>{
    setText(event.target.value);
  }
  const onClearCase = ()=>{
    setText('');
    props.showAlert('','');
  }
  const onExtraSpace = ()=>{
    let removeXspc = text.split(/[ ]+/);
    setText(removeXspc.join(' '));
  }
  return (
    <>
      <div style={{color: props.mode ==='dark' ? '#000':'#fff'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" style={{color: props.mode ==='dark' ? '#fff':'#000',backgroundColor:props.mode ==='dark' ? '#212529':'#fff'}} value={text} onChange={onChange} id="myBox" rows="8"></textarea>
          </div>
          <button className='btn btn-primary me-4' onClick={onUpCase}>Convert to Uppercae</button>
          <button className='btn btn-primary me-4' onClick={onLowCase}>Convert to Uppercae</button>
          <button className='btn btn-primary me-4' onClick={onExtraSpace}>Remove Extra Space</button>
          {/* <button className='btn btn-primary me-4' onClick={onCopyCase}>Copy Text</button> */}
          <button className='btn btn-primary' onClick={onClearCase}>Clear Text</button>
      </div>
      <div className='container py-4' style={{color: props.mode ==='dark' ? '#000':'#fff'}}>
        <h2>Your Summery</h2>
        <p style={{fontWeight:'500',textTransform:'capitalize'}}><span style={{fontWeight:'700',color:'red'}}>{text.split(' ').length - 1}</span>  word and <span style={{fontWeight:'700',color:'red'}}>{text.length}</span>  charecters</p>
        <p style={{fontWeight:'500',textTransform:'uppercase'}}>read time <span style={{fontWeight:'700',color:'red'}}> {0.008 - 1 *  text.split(' ').length}</span></p>
        
        <h2 className='pt-4'>Preview</h2>
        <p style={{fontWeight:'500'}}>{text.length>0?text:"Enter somthing to priview it here"}</p>
      </div>
    </>
  )
}
