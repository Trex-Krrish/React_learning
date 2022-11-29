import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", 'success');
    }

    const CopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", 'success');
    }

    const Capitalize = () => {
        let newText = "Under construction";
        setText(newText);
    }

    const ClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("The text area has been cleared", 'success');
    }

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase", 'success');
    }

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase", 'success');
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here.");
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" style={{background: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3" onClick={upperCase}>Upper Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={lowerCase}>Lower Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={Capitalize} disabled>Capitalize Case</button>
                <button className="btn btn-primary my-3 mx-3" onClick={ClearClick}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelExtraSpaces}>Remove Extra spacest</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text Summery.</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words, {text.length} characters</p>
                <p>Average time to read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
