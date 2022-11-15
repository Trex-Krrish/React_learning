import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const CopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const Capitalize = () => {
        let newText = "Under construction";
        setText(newText);
    }

    const ClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const upperCase = () => {
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
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3" onClick={upperCase}>Upper Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={lowerCase}>Lower Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={Capitalize}>Capitalize Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={ClearClick}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelExtraSpaces}>Remove Extra spacest</button>
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
