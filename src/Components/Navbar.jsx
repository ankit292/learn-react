import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // const removeIdSet =(event)=>{
    //     // e.target.getAttribute("spellcheck");
    //     var attribute = event.target.attributes.getNamedItem('rc-editable-input-22').value;
    //     console.log(attribute)
    // } 
    // console.log(removeIdSet)
    const [state, setState] = useState({
        background: '#fff',
      });
    
     const handleChangeComplete = (color) => {
        setState({ background: color.hex });
      };
    const [colorVal, setColorVal] = useState('info');
    const colorValChange = (event)=>{
          setColorVal(event.target.value);
      }
  return (
    <header>
    {/* <p>{removeIdSet}</p> */}
     <SketchPicker
        color={state.background }
        onChangeComplete={handleChangeComplete }
      />
        <nav className={`navbar navbar-expand-lg px-5 navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.tittle}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/TextForm">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/About">{props.aboutText}</Link>
                    </li>
                </ul>
                <form className="d-flex align-items-center w-50 justify-content-end">
                    <input className="form-control me-2 w-25" type="text" placeholder="Color Select"
                     value={colorVal} onChange={colorValChange}/>
                    {/* <SketchPicker
                        color={state}
                        onChangeComplete={handleChangeComplete}
                    /> */}
                    {/* <button onClick={}></button> */}
                    <button type="button" className={"btn btn-"+colorVal+" mx-2 w-25"}>bg-{colorVal}</button>
                    {/* <button type="button" class="btn btn-secondary mx-2">Secondary</button>
                    <button type="button" class="btn btn-success mx-2">Success</button>
                    <button type="button" class="btn btn-danger mx-2">Danger</button>
                    <button type="button" class="btn btn-warning mx-2">Warning</button>
                    <button type="button" class="btn btn-info mx-2">Info</button>
                    <button type="button" class="btn btn-light mx-2">Light</button>
                    <button type="button" class="btn btn-dark mx-2">Dark</button> */}
                    <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.modeChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.modeText} </label>
                    </div>
                </form>
                </div>
            </div>
        </nav>
    </header>
    
  )
}
Navbar.propTypes = {tittle: PropTypes.string.isRequired,
                   aboutText: PropTypes.string }
Navbar.defaultProps = {
    tittle: "TextUtils Text here",
    aboutText: "About text here"
}
