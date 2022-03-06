import React, { useState, useEffect, useRef } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";

import Store from '../services/store.js';

//data models

function Copytext2(props) {

  const copytextElement = useRef(null);

  useEffect(() => {
    if (copytextElement.current) {
      copytextElement.current.focus();
      document.execCommand("copy");
    }
  }, [props.copytext]);

  return (
    <Modal show={props.show} id="copytext2" centered>
      <Form.Control type="text" ref={copytextElement} defaultValue={props.copytext} className="mx-2" style={{width:'10px'}} autoFocus onFocus={e => e.currentTarget.select()}/>  
    </Modal>  
  );
}

export default Copytext2;