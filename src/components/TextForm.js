import React, { useState } from 'react'

export default function TextForm(props) {
    
    const CapitalClick = () => {
        let newText = "Under construction";
        setText(newText);
    }

    const ClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const loClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here.");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3" onClick={upClick}>Upper Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={loClick}>Lower Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={CapitalClick}>Capitalize Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={ClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text Summery.</h1>
                <p>{text.split(" ").length} Words, {text.length} characters</p>
                <p>Average time to read: {0.008 * text.split(" ").length} Minuts</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
