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

function Bpmaterial_change(props) {

  useEffect(async () => {
  }, []);

  const changematerial = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    props.viewbpmaterial.amount = formdata.get('amount');
    const result = await props.onMaterialchange();
  }

  const col_name = {width: '15rem'};
  const col_type = {width: '30rem'};

  return (
    <Modal show={props.show} size="lg" id="tradelinemodal" centered>
        <Form onSubmit={changematerial}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Add Ship module</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <Row m-0="true">
          <div className="col-12 root fullheight">
            <div className="containerheader">
              <div className="p-2 flex-fill bg-info">
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex align-items-baseline">
                    <span className="mx-2" style={{width:'150px'}}>group</span>
                    <div className="mx-2" style={{width:'200px'}}>
                      {props.viewbpmaterial.typegroupname}
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex align-items-baseline">
                    <span className="mx-2" style={{width:'150px'}}>type</span>
                    <div className="mx-2" style={{width:'200px'}}>
                      {props.viewbpmaterial.name}
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col col-sm-12 d-flex align-items-baseline">
                    <span className="mx-2" style={{width:'150px'}}>amount</span>
                    <Form.Control type="number" id="amount" name="amount" defaultValue={props.viewbpmaterial.amount} className="mx-2" style={{width:'150px'}} />  
                    <button type="submit" className="btn btn-primary">change</button>
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

export default Bpmaterial_change;