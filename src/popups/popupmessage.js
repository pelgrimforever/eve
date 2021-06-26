import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

function Popupmessage(props) {

  return (
    <Modal show={props.show} id="popupmodal" centered>
      <ModalHeader className="bg-info">
        <ModalTitle className="text-light">{props.title}</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        {props.message}
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={() => props.onHide()}>Close</button>
      </ModalFooter>

    </Modal>  
  );
}

export default Popupmessage;