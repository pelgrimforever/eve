import React, { useState, useEffect, useRef } from 'react';

//components
import Copytext from './copytext.js';

function Copytoclipboard(props) {

  const [text, setText] = useState("");
  const [showcopytext, setShowcopytext] = useState(false);

  const copyToClipboard = (e, str) => {
    e.preventDefault();
/*    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(str);
    } else {*/
      setShowcopytext(true);
      //trigger useEffect in copyToClipboard
      setText(props.copytext);
      setTimeout(() => {
        setShowcopytext(false);
      }, 1000);
//    }
  };

  const onCopytextcancel = () => {
    setShowcopytext(false);
  }

  return (
    <>
      <button type="button" className="btn btn-sm tiny btn-secondary mr-1" onClick={(e) => copyToClipboard(e, props.copytext)}>C</button>
      <Copytext copytext={text} show={showcopytext} onCancel={onCopytextcancel}/>
    </>
  );
}

export default Copytoclipboard;