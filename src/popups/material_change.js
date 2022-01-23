import React, { useState, useEffect } from 'react';
import NumericInput from 'react-numeric-input';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';
import Sortmode from '../utilities/sortmode.js';

import Store from '../services/store.js';

//data models
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
//services
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';

function Material_change(props) {

  useEffect(async () => {
  }, []);

  const changematerial = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    props.viewmaterialinput.amount = formdata.get('amount');
    props.viewmaterialinput.unitprice = formdata.get('unitprice');
    const result = await props.onMaterialchange();
  }

  const bodyheight = {height: '40rem'};

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={changematerial}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Add Ship module</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <Row m-0="true" style={bodyheight}>
          <div className="col-12 root fullheight">
            <div className="containerheader">
              <div className="mx-auto bg-light p-1">
                <div className="d-flex">
                  <div className="p-2 flex-fill bg-info">
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>date</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          {props.viewmaterialinput.addtimestampUI}
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>type</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          {props.viewmaterialinput.name}
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>amount</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <Form.Control type="number" id="amount" name="amount" defaultValue={props.viewmaterialinput.amount} style={{width:'150px'}} />  
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <span className="mx-2" style={{width:'150px'}}>unit price</span>
                        <div className="mx-2" style={{width:'200px'}}>
                          <NumericInput id="unitprice" name="unitprice" className="form-control" defaultValue={props.viewmaterialinput.unitprice} style={{width:'150px'}}/>
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col col-sm-12 d-flex">
                        <button type="submit" className="btn btn-primary">change</button>
                      </div>
                    </div>
                  </div>
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

export default Material_change;