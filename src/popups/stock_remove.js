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

import Evetype from '../data/eve/table/evetype.js';

function Stock_remove(props) {

  const removestock = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const volume = formdata.get('volume');
    props.onStockremove(volume);
  }

  return (
    <Modal show={props.show} size="xl" id="tradelinemodal" centered>
        <Form onSubmit={removestock}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Remove Stock</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Row m-0="true">
          <div class="d-flex">

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.evetype.name}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">volume</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <Form.Control type="number" id="volume" name="volume" defaultValue={1} />                  
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <button type="submit" className="btn btn-primary">remove</button>               
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

export default Stock_remove;