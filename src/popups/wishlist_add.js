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

function Wishlist_add(props) {

  const additem = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const maxprice = formdata.get('maxprice');
    props.onWishlistadd(maxprice);
  }

  return (
    <Modal show={props.show} size="xl" id="tradelinemodal" centered>
        <Form onSubmit={additem}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Add Type</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Row m-0="true">
          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
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
                  <label className="input-group-text">max price</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <Form.Control type="number" id="maxprice" name="maxprice" defaultValue={1} />                  
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <button type="submit" className="btn btn-primary">add</button>               
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

export default Wishlist_add;