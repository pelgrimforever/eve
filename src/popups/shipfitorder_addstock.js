import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';

import Store from '../services/store.js';

function Shipfitorder_addstock(props) {

  const addstock = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const amount = formdata.get('amount');
    props.onShipfitorderaddstock(amount);
  }

  return (
    <Modal show={props.show} id="tradelinemodal" centered>
        <Form onSubmit={addstock}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Remove Shipfit order</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Row m-0="true">
          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-1">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.shipfitorder.evetypename}</label>
                </div>
              </div>
              <div className="row m-1">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">volume</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <Form.Control type="number" id="amount" name="amount" defaultValue={props.shipfitorder.amountwanted} />                  
                </div>
              </div>
              <div className="row m-1">
                <div className="col col-sm-4 input-group-prepend">
                  
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <button type="submit" className="btn btn-primary">add stock</button>               
                </div>
              </div>
            </div>

          </div>
        </Row>

      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={() => props.onCancel()}>close</button>
      </ModalFooter>
        </Form>

    </Modal>  
  );
}

export default Shipfitorder_addstock;