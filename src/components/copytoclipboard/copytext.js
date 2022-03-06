import React, { useState, useEffect, useRef } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";

//data models

function Copytext(props) {

  const copytextElement = useRef(null);

  useEffect(() => {
    if (copytextElement.current) {
      copytextElement.current.focus();
      document.execCommand("copy");
      //props.onCancel();
    }
  }, [props.copytext]);

  return (
    <Modal show={props.show} id="copytext" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Copy to clipboard</ModalTitle>
      </ModalHeader>
      <ModalBody>

              <div className="p-2 flex-fill bg-info">
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex align-items-baseline mx-2">
                    <span className="mx-2" style={{width:'150px'}}>copy</span>
                    <Form.Control type="text" ref={copytextElement} defaultValue={props.copytext} className="mx-2" style={{width:'300px'}} autoFocus onFocus={e => e.currentTarget.select()}/>  
                  </div>
                </div>
              </div>

      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={(e) => { e.preventDefault(); props.onCancel();}}>close</button>
      </ModalFooter>

    </Modal>  
  );
}

export default Copytext;